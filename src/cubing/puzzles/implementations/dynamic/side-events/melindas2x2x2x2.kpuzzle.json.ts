import type { KPuzzleDefinition } from "../../../../kpuzzle";

const orientation = new Array(64).fill(0);
const range = orientation.map((_, i) => i);

export const melindas2x2x2x2OrbitJSON: KPuzzleDefinition = {
  name: "Melinda's 2x2x2x2",
  orbits: {
    CORNERS: { numPieces: 64, numOrientations: 1 },
  },
  startStateData: {
    CORNERS: {
      pieces: range,
      orientation,
    },
  },
  moves: {
    Rx: {
      CORNERS: {
        permutation: [
          16, 19, 17, 18, 20, 22, 23, 21, 4, 7, 5, 6, 0, 2, 3, 1, 28, 30, 31,
          29, 24, 27, 25, 26, 8, 10, 11, 9, 12, 15, 13, 14, 32, 33, 34, 35, 36,
          37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
          54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
        ],
        orientationDelta: orientation,
      },
    },
    Ry: {
      CORNERS: {
        permutation: [
          12, 13, 14, 15, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 28, 29, 30, 31,
          16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 32, 33, 34, 35, 36,
          37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
          54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
        ],
        orientationDelta: orientation,
      },
    },
    Rz: {
      CORNERS: {
        permutation: [
          4, 6, 7, 5, 20, 23, 21, 22, 24, 26, 27, 25, 8, 11, 9, 10, 0, 3, 1, 2,
          16, 18, 19, 17, 28, 31, 29, 30, 12, 14, 15, 13, 32, 33, 34, 35, 36,
          37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
          54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
        ],
        orientationDelta: orientation,
      },
    },
    Lx: {
      CORNERS: {
        permutation: [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 48, 51, 49, 50, 52,
          54, 55, 53, 36, 39, 37, 38, 32, 34, 35, 33, 60, 62, 63, 61, 56, 59,
          57, 58, 40, 42, 43, 41, 44, 47, 45, 46,
        ],
        orientationDelta: orientation,
      },
    },
    Ly: {
      CORNERS: {
        permutation: [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 44, 45, 46, 47, 32,
          33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 60, 61, 62, 63, 48, 49,
          50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
        ],
        orientationDelta: orientation,
      },
    },
    Lz: {
      CORNERS: {
        permutation: [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 36, 38, 39, 37, 52,
          55, 53, 54, 56, 58, 59, 57, 40, 43, 41, 42, 32, 35, 33, 34, 48, 50,
          51, 49, 60, 63, 61, 62, 44, 46, 47, 45,
        ],
        orientationDelta: orientation,
      },
    },
    Mx: {
      CORNERS: {
        permutation: [
          0, 1, 2, 3, 20, 22, 23, 21, 4, 7, 5, 6, 12, 13, 14, 15, 16, 17, 18,
          19, 24, 27, 25, 26, 8, 10, 11, 9, 28, 29, 30, 31, 48, 51, 49, 50, 36,
          37, 38, 39, 40, 41, 42, 43, 32, 34, 35, 33, 60, 62, 63, 61, 52, 53,
          54, 55, 56, 57, 58, 59, 44, 47, 45, 46,
        ],
        orientationDelta: orientation,
      },
    },
    My: {
      CORNERS: {
        permutation: [
          0, 1, 2, 3, 9, 8, 11, 10, 45, 44, 47, 46, 12, 13, 14, 15, 16, 17, 18,
          19, 25, 24, 27, 26, 61, 60, 63, 62, 28, 29, 30, 31, 5, 4, 7, 6, 36,
          37, 38, 39, 40, 41, 42, 43, 33, 32, 35, 34, 21, 20, 23, 22, 52, 53,
          54, 55, 56, 57, 58, 59, 49, 48, 51, 50,
        ],
        orientationDelta: orientation,
      },
    },
    Mz: {
      CORNERS: {
        permutation: [
          0, 1, 2, 3, 34, 33, 35, 32, 47, 45, 44, 46, 12, 13, 14, 15, 16, 17,
          18, 19, 7, 5, 4, 6, 10, 9, 11, 8, 28, 29, 30, 31, 51, 49, 48, 50, 36,
          37, 38, 39, 40, 41, 42, 43, 62, 61, 63, 60, 22, 21, 23, 20, 52, 53,
          54, 55, 56, 57, 58, 59, 27, 25, 24, 26,
        ],
        orientationDelta: orientation,
      },
    },
    Ox: {
      CORNERS: {
        permutation: [
          16, 19, 17, 18, 4, 5, 6, 7, 8, 9, 10, 11, 0, 2, 3, 1, 28, 30, 31, 29,
          20, 21, 22, 23, 24, 25, 26, 27, 12, 15, 13, 14, 32, 33, 34, 35, 52,
          54, 55, 53, 36, 39, 37, 38, 44, 45, 46, 47, 48, 49, 50, 51, 56, 59,
          57, 58, 40, 42, 43, 41, 60, 61, 62, 63,
        ],
        orientationDelta: orientation,
      },
    },
    Oy: {
      CORNERS: {
        permutation: [
          37, 36, 39, 38, 4, 5, 6, 7, 8, 9, 10, 11, 1, 0, 3, 2, 53, 52, 55, 54,
          20, 21, 22, 23, 24, 25, 26, 27, 17, 16, 19, 18, 32, 33, 34, 35, 41,
          40, 43, 42, 13, 12, 15, 14, 44, 45, 46, 47, 48, 49, 50, 51, 57, 56,
          59, 58, 29, 28, 31, 30, 60, 61, 62, 63,
        ],
        orientationDelta: orientation,
      },
    },
    Oz: {
      CORNERS: {
        permutation: [
          19, 17, 16, 18, 4, 5, 6, 7, 8, 9, 10, 11, 30, 29, 31, 28, 54, 53, 55,
          52, 20, 21, 22, 23, 24, 25, 26, 27, 59, 57, 56, 58, 32, 33, 34, 35, 2,
          1, 3, 0, 15, 13, 12, 14, 44, 45, 46, 47, 48, 49, 50, 51, 39, 37, 36,
          38, 42, 41, 43, 40, 60, 61, 62, 63,
        ],
        orientationDelta: orientation,
      },
    },
    U2: {
      CORNERS: {
        permutation: [
          40, 41, 42, 43, 44, 45, 46, 47, 32, 33, 34, 35, 36, 37, 38, 39, 16,
          17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 8, 9, 10,
          11, 12, 13, 14, 15, 0, 1, 2, 3, 4, 5, 6, 7, 48, 49, 50, 51, 52, 53,
          54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
        ],
        orientationDelta: orientation,
      },
    },
    D2: {
      CORNERS: {
        permutation: [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 56, 57, 58, 59,
          60, 61, 62, 63, 48, 49, 50, 51, 52, 53, 54, 55, 32, 33, 34, 35, 36,
          37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 24, 25, 26, 27, 28, 29,
          30, 31, 16, 17, 18, 19, 20, 21, 22, 23,
        ],
        orientationDelta: orientation,
      },
    },
    F2: {
      CORNERS: {
        permutation: [
          52, 53, 54, 55, 48, 49, 50, 51, 8, 9, 10, 11, 12, 13, 14, 15, 36, 37,
          38, 39, 32, 33, 34, 35, 24, 25, 26, 27, 28, 29, 30, 31, 20, 21, 22,
          23, 16, 17, 18, 19, 40, 41, 42, 43, 44, 45, 46, 47, 4, 5, 6, 7, 0, 1,
          2, 3, 56, 57, 58, 59, 60, 61, 62, 63,
        ],
        orientationDelta: orientation,
      },
    },
    B2: {
      CORNERS: {
        permutation: [
          0, 1, 2, 3, 4, 5, 6, 7, 60, 61, 62, 63, 56, 57, 58, 59, 16, 17, 18,
          19, 20, 21, 22, 23, 44, 45, 46, 47, 40, 41, 42, 43, 32, 33, 34, 35,
          36, 37, 38, 39, 28, 29, 30, 31, 24, 25, 26, 27, 48, 49, 50, 51, 52,
          53, 54, 55, 12, 13, 14, 15, 8, 9, 10, 11,
        ],
        orientationDelta: orientation,
      },
    },
    y2: {
      CORNERS: {
        permutation: [
          40, 41, 42, 43, 44, 45, 46, 47, 32, 33, 34, 35, 36, 37, 38, 39, 56,
          57, 58, 59, 60, 61, 62, 63, 48, 49, 50, 51, 52, 53, 54, 55, 8, 9, 10,
          11, 12, 13, 14, 15, 0, 1, 2, 3, 4, 5, 6, 7, 24, 25, 26, 27, 28, 29,
          30, 31, 16, 17, 18, 19, 20, 21, 22, 23,
        ],
        orientationDelta: orientation,
      },
    },
    z2: {
      CORNERS: {
        permutation: [
          52, 53, 54, 55, 48, 49, 50, 51, 60, 61, 62, 63, 56, 57, 58, 59, 36,
          37, 38, 39, 32, 33, 34, 35, 44, 45, 46, 47, 40, 41, 42, 43, 20, 21,
          22, 23, 16, 17, 18, 19, 28, 29, 30, 31, 24, 25, 26, 27, 4, 5, 6, 7, 0,
          1, 2, 3, 12, 13, 14, 15, 8, 9, 10, 11,
        ],
        orientationDelta: orientation,
      },
    },
  },
  experimentalDerivedMoves: {
    x: "Lx Rx",
    // y2: "U2 D2", // TODO(https://github.com/cubing/cubing.js/issues/279)
    // z2: "F2 B2", // TODO(https://github.com/cubing/cubing.js/issues/279)
  },
};
