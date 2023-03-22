const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post('/codehome', function (req, res, next) {
	var result = ""
	let code = req.body.code;
	const fs = require('fs')
	const home=Date.now()
	home.toString()
	console.log(home)

	fs.writeFile('./home.txt', code, err => {
		if (err) {
			console.error(err)
		}
	})
	console.log("1.file created successfully!")

	const { exec } = require('node:child_process')

	const command = exec('jshell -q home.txt')

	command.stdout.on('data', output => {

		result = result + output.toString().replace(/[\r\n]/g, "")

		console.log(result.replace("jshell>", ""))
		console.log("2.file runned successfully!")


		if (result.includes("jshell")) {
			console.log("3")
			result = result.replace("jshell>", "").trim()
			console.log("result " + result + " result")
			if (result !== "Hello World") {
				if (result == "") {
					res.status(200).json("syntax mistake! Please check your Syntax carefully :)");
				} else {
					res.status(200).json("You are almost there! No Syntax error, but incorrect output ;)");
				}

			}
			else {
				res.status(200).json("Brilliant! You are 100% correct!");
			}
		}
	})
});

module.exports = router;