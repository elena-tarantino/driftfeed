// Lightweight sanity check: no filesystem writes.
const { normalize } = require("../src/transform");
const r = normalize({ id: "7", name: "  Zed " });
if (r.id !== 7 || r.name !== "Zed") { console.error("check failed"); process.exit(1); }
console.log("driftfeed: check ok");
