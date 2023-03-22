import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useState } from "react";

// import Highlight from 'react-highlight'

import useDebounceFn from "./debounce/useDebounceFn";
import Home from './Pages/home/Home.jsx';
import Introduction from "./Pages/introduction/Introduction.jsx";
import Chapter1 from './Pages/chapter1/Chapter1.jsx'
import Chapter2 from './Pages/chapter2/Chapter2.jsx'
import Chapter3 from './Pages/chapter3/Chapter3.jsx'
import Chapter4 from './Pages/chapter4/Chapter4.jsx'
import Chapter5 from './Pages/chapter5/Chapter5.jsx'
import Chapter6 from './Pages/chapter6/Chapter6.jsx'
import Chapter7 from './Pages/chapter7/Chapter7.jsx'
import Chapter8 from './Pages/chapter8/Chapter8.jsx'
import Chapter9 from './Pages/chapter9/Chapter9.jsx'


// ----------------------
import FixedLayout from "./Pages/fixedLayout/FixedLayout.jsx";
import Encapsulation from "./Pages/encapsulation/Encapsulation.jsx";
import InputAndOutput from "./Pages/inputAndOutput/InputAndOutput.jsx";
import Constructor from "./Pages/constructor/Constructor.jsx";
import Array from "./Pages/array/Array.jsx";
import Collection from "./Pages/collection/Collection.jsx";
import Overloading from "./Pages/overloading/Overloading.jsx";
import Inheritance from "./Pages/inheritance/Inheritance.jsx";
import Substitutability from "./Pages/substitutability/Substitutability.jsx";
import Methods from "./Pages/methods/Methods.jsx";
import Overriding from "./Pages/overriding/Overriding.jsx";
import LateBinding from "./Pages/lateBinding/LateBinding.jsx";
import FileHandling from "./Pages/fileHandling/FileHandling.jsx";
import Exercise1 from "./Pages/exercise1/Exercise1.jsx";
import Exercise2 from "./Pages/exercise2/Exercise2.jsx";
import Exercise3 from "./Pages/exercise3/Exercise3.jsx";
import Exercise4 from "./Pages/exercise4/Exercise4.jsx";
import Exercise5 from "./Pages/exercise5/Exercise5.jsx";



function App() {

  const [user, setUser] = useState("");
  const [timerContent, settimerContent] = useState("");



  function login(username, password) {

    console.log("login!!!");
    let user = document.getElementById("name").value;
    let passport = document.getElementById("passport").value;
    if (!user || !passport) {
      settimerContent("Please fill in the information completely");
      //document.getElementById("remainder").innerHTML= "Please fill in the information completely";
      // setTimeOut(()=>document.getElementById("remainder").innerHTML=null ,5000)
      setTimeout(() => {
        settimerContent("");
      }, 5000);
    }

    fetch("/login", {
      //check if the credentials match with the deatils in server
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: user, password: passport }),
    })
      .then((res) => res.json())
      .then((jsn) => {
        console.log(jsn.msg)
        console.log(jsn.msg==undefined)

        if (jsn.msg!==undefined) {
          //document.getElementById("remainder").innerHTML = jsn.msg;
          // setTimeOut(()=>document.getElementById("remainder").innerHTML=null ,5000)
          settimerContent(jsn.msg);
          setTimeout(() => {
            settimerContent("");
          }, 5000);
        } else {
          //login successfully
          document.getElementById("login-page").style.display = "none";
          document.getElementById("covering").style.display = "none";


          //loginginUser = jsn._id
          setUser(jsn._id);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function register(username, password) {
    let user = document.getElementById("name").value;
    let passport = document.getElementById("passport").value;
    if (!user || !passport) {
      document.getElementById("remainder").innerHTML =
        "Please fill in the information completely";
      setTimeout(
        () => (document.getElementById("remainder").innerHTML = null),
        5000
      );
    }

    let personalInfo = { user: user, password: passport };
    fetch("/register", {
      method: "POST",
      body: JSON.stringify(personalInfo),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((jsn) => {
        alert(jsn.msg);
      })
      .catch((error) => {
        console.log(error);
      });
  }

   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 function submit (e) {
  useDebounceFn(() => {
    console.log("submitted！")
    let code = document.getElementById("input").value;
    let answerID = Number((e.target.id).replace (/[^0-9]+/g, '')); // eg: "1stQuestion" => 1
    //let answerID = "0";
    let data = { code: code };
    fetch(`http://localhost:23078/code/${answerID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((txt) => alert(txt));
  },1000, false);
}

 ///////////////////////////////////////////////////////////////////////////////
 function changepage(e) {



  console.log([...document.getElementsByClassName("sidebar")][0].style.backgroundColor)
   console.log([...document.getElementById("tutoriallist").childNodes])



   let currentNode= e.target
    // if (currentNode == "span") {



   // }
     console.log(e.target)
    var listitem = document.querySelectorAll("li,span");    // 查找所有有name属性的li
        for (var i = 0; i < listitem.length; i++) {
            
               listitem[i].style.backgroundColor= "white";
               //listitem[i].childNodes.forEach((i)=> i.style.backgroundColor="white");
               //console.log("hhhhhhh")
           
        }



      currentNode.style.backgroundColor = "rgb(248, 217, 205)";
       currentNode.parentNode.style.backgroundColor = "rgb(248, 217, 205)";
       //console.log( currentNode.parentNode.style.backgroundColor)
       //console.log([...currentNode.childNodes])
    let arr = [...currentNode.childNodes]
    console.log(currentNode.nodeName)
    //arr.forEach((i)=> {if (i !== undefined) {i.style.backgroundColor="rgb(248, 217, 205)"}})
    arr.forEach((i)=> {if (i.nodeName =="SPAN") {i.style.backgroundColor="rgb(248, 217, 205)"}})
   



 }
///////////////////////////////////



  return (
    
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<FixedLayout login={(username, password) => login(username, password)} register={(username, password) => register(username, password)} timerContent={timerContent}
        
changepage= {(e) =>changepage(e)}


        />}>
          <Route index element={<Home />} />
          <Route path='introduction' element={<Introduction />} />
          <Route path='chapter1' element={<Chapter1 />} />
          <Route path='chapter2' element={<Chapter2 />} />
          <Route path='chapter3' element={<Chapter3 />} />
          <Route path='chapter4' element={<Chapter4 />} />
          <Route path='chapter5' element={<Chapter5 />} />
          <Route path='chapter6' element={<Chapter6 />} />
          <Route path='chapter7' element={<Chapter7 />} />
          <Route path='chapter8' element={<Chapter8 />} />
          <Route path='chapter9' element={<Chapter9 />} />
          <Route path="encapsulation" element={<Encapsulation submit = {(e)=> {submit(e)}}/>} />
          <Route path="inputandoutput" element={<InputAndOutput submit = {(e)=> {submit(e)}}/>} />
          <Route path="inputandoutput" element={<InputAndOutput submit = {(e)=> {submit(e)}}/>} />
          <Route path="constructor" element={<Constructor submit = {(e)=> {submit(e)}}/>} />
          <Route path="arrays" element={<Array submit = {(e)=> {submit(e)}}/>} />
          <Route path="collections" element={<Collection />} />
          <Route path="overloading" element={<Overloading submit = {(e)=> {submit(e)}}/>} />
          <Route path="inheritance" element={<Inheritance submit = {(e)=> {submit(e)}}/>} />
          <Route path="substitutability" element={<Substitutability />} />
          <Route path="methods" element={<Methods submit = {(e)=> {submit(e)}}/>} />
          <Route path="overriding" element={<Overriding submit = {(e)=> {submit(e)}}/>} />
          <Route path="lateBinding" element={<LateBinding submit = {(e)=> {submit(e)}}/>} />
          <Route path="fileHandling" element={<FileHandling submit = {(e)=> {submit(e)}}/>} />
          <Route path="exercise1" element={<Exercise1 submit = {(e)=> {submit(e)}}/>} />
          <Route path="exercise2" element={<Exercise2 submit = {(e)=> {submit(e)}}/>} />
          <Route path="exercise3" element={<Exercise3 submit = {(e)=> {submit(e)}}/>} />
          <Route path="exercise4" element={<Exercise4 submit = {(e)=> {submit(e)}}/>} />
          <Route path="exercise5" element={<Exercise5 submit = {(e)=> {submit(e)}}/>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
