import { Alg } from "../../cubing/alg";
import {
  KPuzzle,
  KPuzzleDefinition,
  Transformation,
} from "../../cubing/kpuzzle";
import { reid3x3x3ToTwizzleBinary } from "../../cubing/protocol";
import {
  Binary3x3x3Components,
  reid3x3x3ToBinaryComponents,
} from "../../cubing/protocol/binary/binary3x3x3";
import { cube3x3x3KPuzzle as defJSON } from "../../cubing/puzzles/implementations/3x3x3/3x3x3.kpuzzle.json_";
import { kpuzzleToReidString, kpuzzleToStickers } from "./convert";

const def: KPuzzleDefinition = defJSON;
const kpuzzle = new KPuzzle(def);

const tests: {
  name: string;
  alg: string;
  kpuzzle: Transformation;
  binaryComponents: Binary3x3x3Components;
  binaryBytes: number[];
  reidString: string;
  stickers: number[];
}[] = [];

function addTest(name: string, alg: string): void {
  kpuzzle.reset();
  kpuzzle.applyAlg(Alg.fromString(alg));
  tests.push({
    name: name,
    alg: alg,
    kpuzzle: kpuzzle.state,
    binaryComponents: reid3x3x3ToBinaryComponents(kpuzzle.state),
    binaryBytes: Array.from(
      new Uint8Array(reid3x3x3ToTwizzleBinary(kpuzzle.state)),
    ),
    reidString: kpuzzleToReidString(kpuzzle.state),
    stickers: kpuzzleToStickers(kpuzzle.state),
  });
}

addTest("Solved", "");
for (const face of "ULFRBDxyz".split("")) {
  for (const suffix of ["", "'", "2"]) {
    const move = face + suffix;
    addTest(`${move} Move`, move);
  }
}
addTest("K Trigger", "R U R'");
addTest("Sune", "R U R' U R U2 R'");
addTest("Pons Asinorum", "M2 E2 S2");
addTest("Pure epLex (4 3-cycles)", "(R2 U' R' U' R2 U R U R U2' R z)4");
addTest("Pure eoMask (superflip)", "((M' U')4 [U2, M' E2 M] x y)3");
addTest("Pure coMask (4cw, 4 ccw", "(L U L' U L U2 L' R' U' R U' R' U2' R z)4");
addTest("Pure cpLex (4 2-swaps)", "([[R: B'], F] [[R: B], F] z2)2");
addTest("Pure moMask (cw center + ccw center)", "[U, [M': E]]");
addTest("Pure moMask (rotate U center 180 degrees)", "(R' U' R U')5");
addTest("Center swaps", "[M', E]");
addTest(
  "3.47 world record scramble",
  "F U2 L2 B2 F' U L2 U R2 D2 L' B L2 B' R2 U2",
);
addTest(
  "random scramble",
  "B2 R2 B2 L2 U2 L2 U2 F2 U2 F' D2 R' U B2 D' R' B L R' D L",
);

const testString = JSON.stringify(
  tests,
  (_: string, v: any) => {
    if (v instanceof Array && typeof v[0] === "number") {
      return `##[${v.join(", ")}]##`;
    } else {
      return v;
    }
  },
  "  ",
)
  .replace(/"##\[/g, "[")
  .replace(/\]##"/g, "]");

(document.querySelector(
  "#test-string",
)! as HTMLTextAreaElement).value = testString;
