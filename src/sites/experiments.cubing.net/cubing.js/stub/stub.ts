// Stub file for testing.
// Feel free to add code here if you need a quick place to run some code, but avoid committing any changes.

import { insideAPI } from "cubing/search/inside/api";
import { stats } from "cubing/vendor/mit/cs0x7f/sq12phase/sq1-solver";

// Warming the buffers...
await insideAPI.randomScrambleForEvent("sq1");

while(true) {
    let scramble = await insideAPI.randomScrambleForEvent("sq1");
    if(stats.phase2_duration_ms > 100) {
        console.log(`we spent this long in phase2: ${stats.phase2_duration_ms}ms, with this many phase2 starts: ${stats.phase2_starts}`);//<<<
        scramble.log();
        break;
    }
}
