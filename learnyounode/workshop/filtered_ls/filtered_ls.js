const fs = require("fs");
const p = require("path");
let argv = process.argv
fs.readdir(argv[2], function (err, list) {
	let target_path = '.' + argv[3];
	for (let i = 0; i < list.length; i++) {
		if (p.extname(list[i]) === target_path) {
			console.log(list[i])
		}
	}
})
