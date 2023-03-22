const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
router.post('/code6', function (req, res, next) {
	var result = ""
	let code = req.body.code;
	const fs = require('fs')
	const stringRandom = require('string-random');
	let filename = stringRandom();

	fs.writeFile(`${filename}.txt`, code, err => {
		if (err) {
			console.error(err)
			return
		}
	})
	console.log("1.file created successfully!")

	const { exec } = require('node:child_process')

	const command = exec(`jshell -q ${filename}.txt`)

	command.stdout.on('data', output => {

		console.log(output)
		result = result + output.toString().replace(/[\r\n]/g, "")

		console.log(result.replace("jshell>", ""))
		console.log("2.code run successfully!")


		if (result.includes("jshell")) {
			console.log("3")
			result = result.replace("jshell>", "").trim()
			console.log("result=" + result)
			if (result !== "black") {
				if (result == "") {
					exec(`rm ${filename}.txt`)	
					res.status(200).send("syntax mistake! Please check your Syntax carefully :)");
				} else {
					exec(`rm ${filename}.txt`)	
					res.status(200).send("You are almost there! No Syntax error, but incorrect output ;)");
				}

			}
			else {
				exec(`rm ${filename}.txt`)	
				res.status(200).send("Brilliant! You are 1000% correct!");
			}
			exec(`rm ${filename}.txt`)	
		}
	})
});
module.exports = router;