const fs = require("fs")
let args = process.argv
let buffer = fs.readFileSync(args[2])
console.log(Number(buffer.toString().split("\n").length) - 1);
