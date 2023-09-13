import { exec } from "node:child_process";
import { join } from "node:path";
import { execPromise } from "../../lib/execPromise.js";
import { writeFile } from "node:fs/promises";
import { barelyServe } from "barely-a-dev-server";

function plugins(dev) {
  const plugins = [];
  // TODO: convenience hack for @lgarron; figure out how to either generalize this or add light auto-refresh to `barely-a-dev-server`
  if (
    dev &&
    process.env["EXPERIMENTAL_CUBING_JS_RELOAD_CHROME_MACOS"] === "1"
  ) {
    console.log(
      "\nEXPERIMENTAL_CUBING_JS_RELOAD_CHROME_MACOS is set. In dev mode, the current Chrome tab (if it begins with `http://[cubing.]localhost`) will refresh after every build.\n",
    );
    plugins.push({
      name: "refresh",
      setup(build) {
        build.onEnd(() => {
          exec(
            `osascript -e 'tell application "Google Chrome"
              set theURL to get URL of the active tab of its first window
              if theURL starts with "http://localhost" then
                tell the active tab of its first window to reload
              end if
              if theURL starts with "http://cubing.localhost" then
                tell the active tab of its first window to reload
              end if
            end tell'`,
          );
        });
      },
    });
  }
  return plugins;
}

export async function barelyServeSite(srcFolder, dev) {
  const outDir = dev ? join(".temp/dev", srcFolder) : join("dist", srcFolder);
  await barelyServe({
    entryRoot: join("src", srcFolder),
    outDir,
    dev,
    devDomain: "cubing.localhost",
    port: 3333,
    esbuildOptions: {
      target: "es2020",
      plugins: plugins(dev),
      minify: !dev,
      external: ["node:*"], // TODO
    },
  });
  if (!dev) {
    // TODO: Include this in the custom build process.
    await writeVersionJSON("dist/sites/alpha.twizzle.net");
  }
}

async function writeVersionJSON(siteFolder) {
  // https://git-scm.com/docs/git-describe
  const gitDescribeVersion = (
    await execPromise("git describe --tags || echo v0.0.0")
  ).trim();
  const gitBranch = (
    await execPromise("git rev-parse --abbrev-ref HEAD")
  ).trim();
  const date = (await execPromise("date")).trim();
  const commitHash = (await execPromise("git rev-parse HEAD")).trim();
  const commitGitHubURL = `https://github.com/cubing/cubing.js/commit/${commitHash}`;

  await writeFile(
    join(siteFolder, "version.json"),
    JSON.stringify(
      { gitDescribeVersion, gitBranch, date, commitHash, commitGitHubURL },
      null,
      "  ",
    ),
  );
}

export const sitesTarget = {
  name: "sites",
  builtYet: false,
  dependencies: [],
  buildSelf: async (dev) => {
    await barelyServe(siteOptions("sites", dev));
  },
};

export const twizzleTarget = {
  name: "twizzle",
  builtYet: false,
  dependencies: [],
  buildSelf: async (dev) => {
    await barelyServe(siteOptions("sites/alpha.twizzle.net", dev));
    if (!dev) {
      // TODO: Include this in the custom build process.
      await writeVersionJSON("dist/sites/alpha.twizzle.net");
    }
  },
};

export const experimentsTarget = {
  name: "experiments",
  builtYet: false,
  dependencies: [],
  buildSelf: async (dev) => {
    await barelyServe(
      siteOptions("sites/experiments.cubing.net/cubing.js", dev),
    );
    if (!dev) {
      // TODO: Include this in the custom build process.
      await writeVersionJSON("dist/sites/experiments.cubing.net/cubing.js");
    }
  },
};
