import { build } from "esbuild";
import { resolve } from "path";
import { existsSync } from "fs";

import { targetInfos } from "./target-infos.js";

// Note that we have to use an extra `..` to back out of the file name
const PATH_TO_SRC_CUBING = resolve(
  new URL(".", import.meta.url).pathname,
  "../cubing",
);

class Target {
  constructor(name, targetInfo) {
    this.name = name;
    // this.outdir = `./${this.name}`
    this.outdir = `./dist/experimental-splitting-build/${this.name}`;

    this.deps = targetInfo.deps;

    this.dirPath = resolve(PATH_TO_SRC_CUBING, this.name);
    if (!existsSync(this.dirPath)) {
      throw new Error(`Folder doesn't exist: ${this.name}`);
    }

    this.indexFilePath = resolve(this.dirPath, "index.ts");
    if (!existsSync(this.indexFilePath)) {
      throw new Error(`Entry point index file doesn't exist: ${this.name}`);
    }

    this.regExp = new RegExp(this.name);
  }

  checkImportable(args, forTarget) {
    switch (args.kind) {
      case "import-statement":
        if (!forTarget.deps.direct.includes(this.name)) {
          console.error(
            `\`cubing/${forTarget.name}\` is not allowed to directly (non-dynamically) import \`cubing/${this.name}\`. Update src/make/target-infos.js to change this.`,
          );
          console.log("From: ", args.importer);
          console.log("Import path: ", args.path);
          process.exit(2);
        }
        return;
      case "dynamic-import":
        if (!forTarget.deps.dynamic.includes(this.name)) {
          console.error(
            `\`cubing/${forTarget.name}\` is not allowed to dynamically import \`cubing/${this.name}\`. Update src/make/target-infos.js to change this.`,
          );
          console.log("From: ", args.importer);
          console.log("Import path: ", args.path);
          process.exit(2);
        }
        return;
      default:
        throw new Error(`Unknown kind: ${args.kind}`);
    }
  }

  plugin(forTarget) {
    const setup = (build) => {
      if (this.name === forTarget.name) {
        return undefined;
      }
      build.onResolve({ filter: this.regExp }, (args) => {
        if (
          args.kind !== "import-statement" &&
          args.kind !== "dynamic-import"
        ) {
          // TODO
          return undefined;
        }

        const resolved = resolve(args.resolveDir, args.path);
        if (this.dirPath === resolved) {
          this.checkImportable(args, forTarget);
          return {
            path: `cubing/${this.name}`,
            external: true,
          };
        }

        if (resolved.startsWith(forTarget.dirPath + "/")) {
          return undefined;
        }

        console.error(
          "Bad import! Imports between targets must reference each other's top-level folders.",
        );
        console.log("From: ", args.importer);
        console.log("Import path: ", args.path);
        process.exit(1);
      });
    };
    return {
      name: this.name,
      setup: setup,
    };
  }
}

const targets = [];
for (const [name, targetInfo] of Object.entries(targetInfos)) {
  targets.push(new Target(name, targetInfo));
}

// targets.map(a => console.log(a.dirPath))

for (const currentTarget of targets) {
  build({
    target: "es2020",
    bundle: true,
    splitting: true,
    format: "esm",
    // sourcemap: true,
    outdir: currentTarget.outdir,
    external: ["three"],
    entryPoints: [currentTarget.indexFilePath],
    plugins: targets.map((t) => t.plugin(currentTarget)),
  });
}