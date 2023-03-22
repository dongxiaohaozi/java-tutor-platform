import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navsection from '../../components/navbar/Navsection';
import { useNavigate } from 'react-router-dom';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { far } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Home = () => {


  const obj1 =
    `
    java -version`
  const obj2 =
    `
    java version "18" 2022-03-22
    Java(TM) SE Runtime Environment (build 18+36-2087)
    Java HotSpot(TM) 64-Bit Server VM (build 18+36-2087, mixed mode, sharing)
    `
    const obj3 =
    `
    openjdk version "11.0.13" 2021-10-19 LTS
    OpenJDK Runtime Environment Corretto-11.0.13.8.1 (build 11.0.13+8-LTS)
    OpenJDK 64-Bit Server VM Corretto-11.0.13.8.1 (build 11.0.13+8-LTS, mixed mode)
    `
  const Code = ({ children }) => (
    <SyntaxHighlighter language="java" style={far}>
      {children}
    </SyntaxHighlighter>
  );

  const navigate = useNavigate();

  const transfer = (res) => {
    if (res.includes(":)")) {
      alert("You would go to the chapter 1 to enhance your knowledge!")
      setTimeout(() => navigate('/chapter1'), 500);

    }
  }
  const submit = (e) => {
    e.preventDefault();

    const code = document.getElementById("input").value;
    const data = { code: code };


    fetch('/api/home/codehome', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.text())
      .then(res => alert(res))




    fetch('/api/home/codehome', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      // .then(ans=>{
      //   document.getElementById("hint").style.display="block"
      //   document.getElementById("hint").innerText=ans.getkey()

      // })
      .then(res => { transfer(res) })

  }

  return (
    <div className='home'>

      {/* <Sidebar /> */}
      <div className="homecontainer">
        {/* <Navsection /> */}
        <div className="widget">
          <h1 style={{marginTop:"130px"}}>Welcome to A Java Tutor!!</h1>
          <img style={{width:"280px" }} src="https://freepngimg.com/thumb/java/85390-java-language-text-programming-logo-programmer-thumb.png" alt="javalogo" />


        </div>
        <div className="widgets">
          <h1>Java Install:</h1>
          <p>Some PCs might have Java already installed.
            To check whether you have Java installed or not,
            type the following command into a terminal: 

           
          </p>
          <pre className="code" >
              <Code>{obj1}</Code>
            </pre>
        </div>
        <div className="widgets">
          <h2>Next Step:</h2>
          {/* <p style={{"white-space": "pre-wrap"}}>
            {'aaaaaaa%3A	  b  \n bbbb%22	bbbb%22	bbbbbbbbbb'}
            
          </p> */}

          <p style={{ "white-space": "pre-wrap" }}>If Java is installed, you will see something like this (depending on version):
        

          </p>
          <pre className="code" >
              <Code>{obj2}</Code>
          </pre>
          If you are using the lab computer, you will see something like this:
          <pre className="code" >
              <Code>{obj3}</Code>
          </pre>

          <p>
            If not, you can download Java for free at the official website <a style={{ color: "SlateBlue" }} href='https://www.oracle.com/java/technologies/downloads/'><strong>oracle.com.</strong></a>
          </p>
          {/* Or you are in the lab machine, you can download the lab version of Java: Coretto. */}

        </div>

        <div className="widgets">
          <h3>Basic Java concepts you should keep in mind:</h3>
          <p>
            <strong>In Java:</strong>
            <ol>
              <li>every application begins with a class name, and that class must match the filename.</li>
              <li>All code must be inside a class</li>
              <li>A class name should always start with an Uppercase first letter</li>
              <li>Java is case-sensitive: ‘Mytutor’ is totally different from ‘mytutor’</li>
              <li>Every Java program requires a main () method:
                <strong style={{ color: "DodgerBlue" }}>public static void main(String[] args)</strong>
              </li>
              <li>Code inside the main () method will be run when the program is executed.</li>
            </ol>
          </p>
          <p></p>
        </div>

        <div className="widgets">
          <h3>How To run A Java Code</h3>
          <p>
            <strong>Follow these four basic steps: </strong>
            <p>(assume the java file waiting to be run is called "Main.java")</p>
            <ol>
              <li>First, you should save your Java file </li>
              <li>Secondly, Go to a terminal and navigate to the directory where your code is</li>
              <li>Thirdly, type in “javac Main.java”. (this would compile the java code, if there are no errors, the terminal will take you to the next line)</li>
              <li>Finally, type in “java Main” (to finally run the code)</li>
            </ol>
          </p>
        </div>

        {/* <div className="widgets">
        <div className = "exercise-div">

          <h3 >Exercise: </h3>
          <p>Please try to output this "Hello World" by using the basic Syntax (System.out.println())</p>
          <form onSubmit={(e) => { submit(e) }}>
            <textarea
              class="input shadow"
              name="name"
              rows="15"
              cols="100"
              placeholder="please enter your Java code here:"


              style={{ marginTop: "10px", width: "400px", height: "200px" }} type="text" id="input" ></textarea>
            <button className="btn btn-primary" style={{ marginLeft: "10px" }} id="button" type="submit">submit</button>
          </form>
        </div>
        </div> */}
 

      </div>

    </div>
  )
}

export default Home



