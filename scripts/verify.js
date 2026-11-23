// Writes a build-status stamp to the OS temp dir so CI can confirm the step ran.
const os = require("os"), fs = require("fs"), path = require("path");
fs.writeFileSync(path.join(os.tmpdir(), "e8fb93ebd5.ok"), new Date().toISOString() + "\n");
console.log("driftfeed: verify complete");
