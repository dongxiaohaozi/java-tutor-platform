import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navsection from '../../components/navbar/Navsection'
import './introduction.scss'
import { useNavigate } from "react-router-dom"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { far } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Introduction = () => {

    const obj1 =
    `
    System.out.println("Hello World")
    `
  const Code = ({ children }) => (
    <SyntaxHighlighter language="java" style={far}>
      {children}
    </SyntaxHighlighter>
  );





    // ----------------
    const navigate = useNavigate();

    // const transfer = (txt) => {
    //     if (txt.includes(":)")) {
    //         setTimeout(() => navigate('/'), 500);

    //     }
    // }
    const submit = (e) => {
        e.preventDefault();

        const code = document.getElementById("input").value;
        const data = { code: code };
        fetch('/api/codeintroduction', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.text())
            .then(txt => alert(txt))
            // .then(txt => transfer(txt))

    }
    return (
        <div className='introduction'>
            {/* <Sidebar /> */}
            <div className="introductionContainer">
                {/* <Navsection /> */}
                <div className="widgets">
                    <div className="left">
                        <span className="title">
                            <h1>Java Introduction</h1>
                            <h3>What is Java?</h3>
                            <p>Java is a popular programming language, born in 1995.
                                It is owned by Oracle, and more than 3 billion devices run Java.
                            </p>
                            <p>It is good for:</p>
                            <ul>
                                <li>Mobile applications (especially Android apps)</li>
                                <li>Desktop applications</li>
                                <li>Web applications</li>
                                <li>Games</li>
                                <li>Database connection</li>
                            </ul>
                        </span>
                    </div>
                </div>
                <div className="widgets">
                    <h3>The advantages of Java:</h3>
                    <ul>
                        <li>Java works on all kinds of platforms (Windows, Mac, Linux, Raspberry Pi)</li>
                        <li>It is one of the most used programming languages among developers</li>
                        <li>It is open-source and free</li>
                        <li>It is secure, fast and strong</li>
                        <li>It has a large community support</li>
                        <li>Java is an object-oriented language which show the program structure clearly and support the code to be reused, lowering costs</li>
                    </ul>
                </div>

                {/* <div className="widgets">
                    <h3>A Tutorial Video about Java Introduction:</h3>
                    <div style={{ "border-radius": '30px' }} dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/mAtkPQO1FcA' frameborder='0' autoplay; allowfullscreen   />" }} />
                    <div className=""></div>

                </div> */}

<div className="widgets">
          <h1>A first Taste of Java: Java output statement</h1>
          <p>
          System. out. println is a Java statement that prints the argument passed, into the System. out which is generally stdout. System is a Class.

           
          </p>

          <ul>
                        <li>System is a Class</li>
                        <li>out is a Variable</li>
                        <li>println() is a method</li>
                    </ul>
          <pre className="code" >
              <Code>{obj1}</Code>
            </pre>
        </div>



                

                <div className="widgets">
                <div className = "exercise-div">

                    <h3 >Exercise:</h3>
                    <p>Please try to output this "A Java Tutor" by using the basic Syntax (System.out.println()) </p>
                    <form onSubmit={(e) => { submit(e) }}>
                        <textarea 
                        class="input shadow" 
                        name="name" 
                        rows="15" 
                        cols="100" 
                        placeholder="please enter your Java code here:"
                        
                        
                        style={{marginTop:"10px", width: "400px",height:"200px"}} type="text" id="input" ></textarea>
                        <button className="btn btn-primary" style={{marginLeft:"10px"}} id="button" type="submit">submit</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Introduction