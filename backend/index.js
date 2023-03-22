const MongoClient = require('mongodb').MongoClient;

const config = require('./config-db.js');

const url = `mongodb://${config.username}:${config.password}@${config.url}:${config.port}/${config.database}?authSource=admin`;

const client = new MongoClient(url, { useUnifiedTopology: true });
var express = require('express');
var bodyParser = require('body-parser');


const cors=require('cors')
const dotenv = require("dotenv");
const mongoose = require('mongoose')
const API_PORT = 5002
const path = require('path')
const homeRoute = require("./routes/home")
const homeRoute5 = require("./routes/exercise5")
const homeRoute4 = require("./routes/exercise4")
const homeRoute3 = require("./routes/exercise3")
const homeRoute2 = require("./routes/exercise2")
const homeRoute1 = require("./routes/exercise1")

const introductionRoute = require("./routes/introduction")
const chapter1Route = require("./routes/chapter1")
const chapter2Route = require("./routes/chapter2")
const chapter3Route = require("./routes/chapter3")
const chapter4Route = require("./routes/chapter4")
const chapter5Route = require("./routes/chapter5")
const chapter6Route = require("./routes/chapter6")
const chapter7Route = require("./routes/chapter7")
const chapter8Route = require("./routes/chapter8")


var app = express();
dotenv.config();
app.use(express.json());
app.use(cors());


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) //optional but use

let loginginUser = null
let userCollection = null; // store data about users {_id:**, passport:**}
let answerCollection = null;  // store data about    {_id:**, answer: **,reference:**}




//these are the apis routes of this backend.
// app.use("/api/auth", authRoute);
app.use("/api/home", homeRoute);
app.use("/api/home", homeRoute5);
app.use("/api/home", homeRoute4);
app.use("/api/home", homeRoute3);
app.use("/api/home", homeRoute2);
app.use("/api/home", homeRoute1);

app.use("/api/", introductionRoute);
app.use("/api/", chapter1Route);
app.use("/api/", chapter2Route);
app.use("/api/", chapter3Route);
app.use("/api/", chapter4Route);
app.use("/api/", chapter5Route);
app.use("/api/", chapter6Route);
app.use("/api/", chapter7Route);
app.use("/api/", chapter8Route);



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) //optional but useful for url encoded data
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('content'));




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//this post function matches with the frontend login function
app.post('/login',function (req, res, next) {
	let username = req.body.user;
	let inputedpassword = ""+req.body.password;
  
	userCollection.findOne({_id: username})  //use the database here   collection called userCollection
	.then(logInfo => {
	  console.log(logInfo);
  
	  if(logInfo !== null) {
		
		let password = logInfo.password
		console.log(password)
		console.log(inputedpassword)
		console.log(password === inputedpassword);
  
		if (password === inputedpassword) {
		  loginginUser = username
		  console.log("login successfully");
		  res.status(200).json(logInfo);

		} else if(password !== inputedpassword) {
		  res.status(400).send({msg:`password is not correct!`})
		}     
	  } else {
		res.status(400).send({msg:`User does not exsit.`})
	  }
	})
	.catch(err => {
	  console.log("user" + err)
	})
  })

///////////////////////////////////////////////////////////////////////////
// this post function matches with the frontend register function

app.post("/register", function (req, res, next) {
	let body = req.body;

    let peronalInfo = {_id: body.user, password:body.password}

	userCollection.findOne({_id:body.user})
	.then(result => {
	  if (result) {
		res.status(400).send({msg:"this user name has been used,please change one."})
  
	  } else {
		userCollection.insertOne(peronalInfo)
		
		.then(info => {
			console.log(userCollection.findOne({_id:body.user}))
		  res.status(200).send({msg:"user created successfully."})
  
		})
		.catch(err => {
		  console.log("could not add data.")
		})
	  }
	})
});
////////////////////////////////////////////////////////////////////
// this post function matches with the frontend no right-wrong answer question
app.post('/norightanswercode', function(req,res,next) {

	let result=""
	let code = req.body.code;
    console.log("get the front end code successfully!")


    //write code into a file
		const fs = require('fs')
		const stringRandom = require('string-random');
		let filename = stringRandom(); //this would randomly generate a file name.

		fs.writeFile(`${filename}.txt`, code, err => {
		if (err) {
			console.error(err)
			return
		}
		})
		console.log("step 1, created the file waiting to execute! ")
	    	
    // exexcute the file
		   const { exec } = require('node:child_process')
	
		   const  command = exec(`jshell -q ${filename}.txt`)
		
		   command.stdout.on('data', output => {
	      console.log(result)
		   result = result + output.toString().replace(/[\r\n]/g, "")
	
		   console.log(result.replace("jshell>",""))
		   console.log("2")

		   if (result.includes("jshell")) {
			console.log("3")
			result = result.replace("jshell>","").trim()
			console.log("result (" +result+") result")

			 	if (result == "") {
					exec(`rm ${filename}.txt`)
                     res.status(400).send("syntax mistake");
					 
			 	} else {
					exec(`rm ${filename}.txt`)
					res.status(200).send("right");
			 	}
				 exec(`rm ${filename}.txt`)							 				
		   }	
	       })
});
///////////////////////////////////////////////////////////////////
app.post('/code/:answerID', function(req,res,next) {
	let answerID = Number(req.params.answerID);
	let result=""
	let code = req.body.code;
    let rightAnswer;
    console.log("get the user answer from the client-side!")
    // get the right answer from database
    answerCollection.findOne({_id: answerID})
    .then(ans => {
		rightAnswer = ans.answer;

		console.log("rightAnswer= " +rightAnswer)
	})
	.catch(err => console.log("can't get answer from the database, because : " +err)) 

    //write code into file
		const fs = require('fs')
		const stringRandom = require('string-random');
		let filename = stringRandom();

		fs.writeFile(`${filename}.txt`, code, err => {
		if (err) {
			console.error(err)
			return
		}
		})
		console.log("1.text file created!")
	    	
    // exexcute the file
		   const { exec } = require('node:child_process')
	
		   const  command = exec(`jshell -q ${filename}.txt`)
		
		   command.stdout.on('data', output => {
	      console.log(result)
		   result = result + output.toString().replace(/[\r\n]/g, "")
	
		   console.log(result.replace("jshell>",""))
		   console.log("2.file executed!")
    // test the result with the right answer
		   if (result.includes("jshell")) {
			console.log("3")
			result = result.replace("jshell>","").trim()
			console.log("result (" +result+") result")
			 if (result !== rightAnswer) {
			 	if (result == "") {
					exec(`rm ${filename}.txt`)				 				

                     res.status(200).send("Syntax Mistake!");

			 	} else {
					exec(`rm ${filename}.txt`)				 				

			 		res.status(200).send("No Syntax error, just incorrect answer!");
			 	}				
			 	}
				 else {
					exec(`rm ${filename}.txt`)				 				

				res.status(200).send("You are right!!");
				 }
			exec(`rm ${filename}.txt`)				 				
		   }	
	       })
});

///////////////////////////////////////////////////////////////////




app.use(express.static('content'));


// initiate client
client.connect()
.then(conn => {
   
    collection = client.db().collection(config.collection);
    calendarCollection = client.db().collection(config.calendarCollection);
    mainCollection = client.db().collection(config.mainCollection);
	userCollection = client.db().collection(config.userCollection);
	answerCollection = client.db().collection(config.answerCollection);


    // users = client.db().collection(config.users);
    console.log("Connected!", conn.s.url.replace(/:([^:@]{1,})@/, ':****@')) 
})
.catch(err => { console.log(`Could not connect to ${url.replace(/:([^:@]{1,})@/, ':****@')}`, err);  throw err; })

// tell the server to listen on the given port and log a message to the console (so we can see our server is doing something!)
.then(() => app.listen(API_PORT, () => console.log(`Listening on localhost: ${API_PORT}`)))

// .then(() => answerCollection.insertOne(
// 		// {_id:1, answer:"12345"},
// 		{_id:14041,answer:"[10000,20000,50000]"},

// 		// {_id:2, answer:"1"},
// 	// {_id:10, answer:"Dog"},
// 	// {_id:11, answer:"2"},
// 	// {_id:12000, answer:"British"},
// 	// {_id:13000, answer:"[1,2,3,4,5]"},
// 	// {_id:1401, answer:"3"},
// 	// {_id:1402, answer:"true"},
// 	// {_id:1404, answer:"[10000,20000,50000]"},
// 	// {_id:15, answer:"3.0"},
// 	// {_id:16, answer:"yellow"},
// 	// {_id:19, answer:"2000"},

// ))

.catch(err => console.log(`Could not start server`, err))








// app.listen(API_PORT, () => {
// 	console.log(`backend is listening on localhost:${API_PORT}`)
// });

// module.exports=app;