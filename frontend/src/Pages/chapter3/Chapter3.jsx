import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navsection from '../../components/navbar/Navsection'
import './chapter3.scss'
import { useNavigate } from "react-router-dom"
import  SyntaxHighlighter  from 'react-syntax-highlighter';
import {far} from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Chapter3 = () => {
    const obj1 = 
    ` public class Main {
        static void aMethod() {
          System.out.println("A Java Tutor!");
        }
        public static void main(String[] args) {
          myMethod();
        }
}`
const obj2 = 
` public class Main {
    static void aMethod(String name, int age) {
        System.out.println(name + " is " + age+ "years Old!");
    }
    public static void main(String[] args) {
        aMethod("Xin", 5);
        aMethod("Hao", 8);}
    }
}
    output: 
    Xin is 5 years Old!
    Hao is 8 years Old!

`

const inputdefault  = 
  `
  int myMethod(int a) {
    return a;
   }
  System.out.print(myMethod())
  ` 

    const Code = ({ children }) => (
        <SyntaxHighlighter language="java" style={far}>
            { children }
        </SyntaxHighlighter>
      );



    // ----------------
    // const navigate = useNavigate();

    // const transfer = (txt) => {
    //     if (txt.includes(":)")) {
    //         setTimeout(() => navigate('/'), 500);

    //     }
    // }
    const submit = (e) => {
        e.preventDefault();

        const code = document.getElementById("input").value;
        const data = { code: code };
        fetch('/api/code3', {
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
                            <h1>Chapter 3: Java Methods</h1>
                            <p >A method is a block of code which only runs when it is invoked.
                                We can pass data (known as parameters) into a method.
                                Methods are called to perform things, so we also call methods functions.
                            </p>
                            <p>                                It is much easier to define a method once and reuse it many times.
</p>
                            <p>Java has some build-in methods like System.out.println(),
                                However, we can make our own methods.
                            </p>
                            <p style={{color:"darkred"}}>                                Note: a method must be declared within a class.
</p>
                            
                        </span>
                    </div>
                </div>
                <div className="widgets">
                    <h2>Call a Method:</h2>

                    <p>Define a method and call it as follows:</p>
                    <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj1}</Code>
                           </pre>
                           <p><strong>aMethod () </strong>is the name of this method </p>
                                <p><strong>static</strong> means that this method belong to the Main class, and it is not a object of the Main class.
                                </p><p><strong>void</strong> means that this method returns nothing.</p>
                    <span style={{color:"darkred"}}>
                         call the aMethod() method Inside a Main Class,
                    </span>
                </div>



                    {/* <p style={{ color: "green" }}>

                        <hr style={{ color: "Background" }} />

                        public class Main {'{'}
                        <hr style={{ color: "Background" }} />

                        static void aMethod() {'{'}

                        System.out.println("A Java Tutor!");{'}'}
                        <hr style={{ color: "Background" }} />
                        public static void main(String[] args) {'{'}

                        aMethod();
                        {'}'}
                        <hr style={{ color: "Background" }} />




                        {'}'}

                    </p> */}
                    <p></p>
                </div>
                <div className="widgets">
                    <h2>Java Method Parameters</h2>
                    <span>
                        We can pass information to methods using parameter.
                    </span>
                    <div className = "example">
                    <h3>Example</h3>

                    <pre className = "code" >
                              <Code>{obj2}</Code>
                    </pre>
                    </div>
                    



                </div>

{/* 
                <div className="widgets">
                    <h3>A Tutorial Video about Java Methods:</h3>
                    <div style={{ "border-radius": '30px' }} dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/r0SewFmbCUI' frameborder='0' autoplay; allowfullscreen   />" }} />
                    <div className=""></div>

                </div> */}




                <div className="widgets">
                <div className = "exercise-div">

                    <h3 >Exercise: </h3>
                

                    <p>
                        Complete this sinppet code below: to putput the value of "8"
                    </p>

                 
                    <form onSubmit={(e) => { submit(e) }}>
                        <textarea
                            class="input shadow"
                            name="name"
                            rows="15"
                            cols="100"
                            defaultValue = {inputdefault}
                            style={{ marginTop: "10px", width: "400px", height: "200px" }} type="text" id="input" >
                        </textarea>
                        <button className="btn btn-primary" style={{ marginLeft: "10px" }} id="button" type="submit">submit</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Chapter3