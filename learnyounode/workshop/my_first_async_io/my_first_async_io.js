const fs = require("fs")
let argv = process.argv
let buffer = fs.readFile(argv[2], function (err, data) {
    console.log(data.toString().split('\n').length - 1)
})