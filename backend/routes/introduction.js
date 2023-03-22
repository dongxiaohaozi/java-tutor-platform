const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
router.post('/codeintroduction', function (req, res, next) {
	var result = ""
	let code = req.body.code;
	const fs = require('fs')

	fs.writeFile('./introduction.txt', code, err => {
		if (err) {
			console.error(err)
			return
		}
	})
	console.log("1")

	const { exec } = require('node:child_process')

	const command = exec('jshell -q introduction.txt')

	command.stdout.on('data', output => {

		result = result + output.toString().replace(/[\r\n]/g, "")

		console.log(result.replace("jshell>", ""))
		console.log("2")


		if (result.includes("jshell")) {
			console.log("3")
			result = result.replace("jshell>", "").trim()
			console.log("result= " + result)
			if (result !== "A Java Tutor") {
				if (result == "") {
					res.status(200).send("syntax mistake! Please check your Syntax carefully :)");
				} else {
					res.status(200).send("You are almost there! No Syntax error, but incorrect output ;)");
				}

			}
			else {
				res.status(200).send("Brilliant! You are 100% correct!");
			}
		}
	})
});
module.exports = router;