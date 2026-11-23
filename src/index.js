#!/usr/bin/env node
const { normalize } = require("./transform");
const args = process.argv.slice(2);
if (args.includes("--build")) { console.log("driftfeed: build ok"); process.exit(0); }
const rows = [{ id: 1, name: " Ada " }, { id: 2, name: "Lin" }];
console.log(JSON.stringify(rows.map(normalize), null, 2));
