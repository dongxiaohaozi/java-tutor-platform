import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navsection from '../../components/navbar/Navsection'
import './chapter1.scss'
import { useNavigate } from "react-router-dom"


import SyntaxHighlighter from 'react-syntax-highlighter';
import { far } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Chapter1 = () => {
    const obj11=
    `
    final int c=10;
    c=12; //this would casue a error ‘cannot assign a value to a final variable’
    `
const obj10 = 
`// Java program to demonstrate reference variables in java
 
import java.io.*;
 
class Demo {
    int x = 10;
    int display()
    {
        System.out.println("x = " + x);
        return 0;
    }
}
 
class Main {
    public static void main(String[] args)
    {
        Demo D1 = new Demo(); // point 1
 
        System.out.println(D1); // point 2
 
        System.out.println(D1.display()); // point 3
    }
}

`
    const obj1 =
        ` 
    int a;
    a=1;    (equivalent to  int a=1;)
    
    
    String b=”Xin”;  (it must be the “”,   ‘’ is for assigning character)
    boolean d=true;
    float f =5.99f;
    char g=’d’
    
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
        fetch('/api/code1', {
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
                            <h1>Chapter 1: Variables </h1>
                            <h2>What is Variable?</h2>
                            <p>Variable in Java is a data container that saves the data values during Java program execution.


                            </p>
                            <p>Every variable is assigned a data type that designates the type and quantity of value it can hold. </p>
                            <p>                            A variable is a memory location name for the data.
                            </p>
                            <strong>Variable Types :</strong>
                            <p>A variable's type determines the values that the variable can have and the operations that can be performed on it. For example, the declaration int count declares that count is an integer ( int ).
                            </p>

                    </div>
                </div>
                <div className="widgets">
                    <h3>Primitive Types:</h3>


                    <table class="demo">
                        <caption><span >8 types of basic information</span><span ></span></caption>
                        <thead>
                            <tr>
                                <th>type name</th>
                                <th>example</th>
                                <th>size</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>boolean</td>
                                <td>&nbsp;True/false<span ></span></td>
                                <td>&nbsp;1bit<span ></span></td>
                            </tr>
                            <tr>
                                <td>byte</td>
                                <td>&nbsp;Signed integer<span ></span></td>
                                <td>&nbsp;8bit<span ></span></td>
                            </tr>
                            <tr>
                                <td>&nbsp;char</td>
                                <td>&nbsp;Unicode character<span ></span></td>
                                <td>&nbsp;16bit<span ></span></td>
                            </tr>
                            <tr>
                                <td>&nbsp;short</td>
                                <td>&nbsp;Signed integer<span ></span></td>
                                <td>&nbsp;16bit<span ></span></td>
                            </tr>
                            <tr>
                                <td>&nbsp;int</td>
                                <td>&nbsp;Signed integer<span ></span></td>
                                <td>&nbsp;32bit<span ></span></td>
                            </tr>
                            <tr>
                                <td>&nbsp;long</td>
                                <td>&nbsp;Signed integer</td>
                                <td>&nbsp;64bit<span ></span></td>
                            </tr>
                            <tr>
                                <td>&nbsp;float</td>
                                <td>&nbsp;Floating point number<span ></span></td>
                                <td>&nbsp;32bit<span ></span></td>
                            </tr>
                            <tr>
                                <td>double&nbsp;</td>
                                <td>Floating point number</td>
                                <td>&nbsp;64bit<span ></span></td>
                            </tr>
                        </tbody>
                    </table>

                    <table></table>
                    <table></table>

                </div>

                <div className="widgets">
                    <h3>Reference Variables:</h3>
                    <ul>
                        <li>Reference variable is used to point object/values.</li>
                        <li>Classes, interfaces, arrays, enumerations, and, annotations are reference types in Java. Reference variables hold the objects/values of reference types in Java.</li>
                        <li>Reference variable can also store null value. By default, if no object is passed to a reference variable then it will store a null value.</li>
                        <li>You can access object members using a reference variable using dot syntax.</li>
                    </ul>

                </div>
                <div className="widgets" style={{ whiteSpace: 'pre-wrap' }}>
                    <h3>An example of reference variables </h3>
                    {/* <div style={{ "border-radius": '30px'}} dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/N6aWNLVoh1g' frameborder='0' autoplay; allowfullscreen   />" }} /> */}





                    <div className="example">
                        <h3>Example</h3>

                        <pre className="code" >
                            <Code>{obj10}</Code>
                        </pre>
                    </div>
                </div>


                <div className="widgets" style={{ whiteSpace: 'pre-wrap' }}>
                    <h3>Variable Declarations:</h3>
                    {/* <div style={{ "border-radius": '30px'}} dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/N6aWNLVoh1g' frameborder='0' autoplay; allowfullscreen   />" }} /> */}





                    <p>Type + name + (optionally) initial value </p>
                    <div className="example">
                        <h3>Example</h3>

                        <pre className="code" >
                            <Code>{obj1}</Code>
                        </pre>
                    </div>
                </div>
                <div className="widgets">
                    <h3>Note:</h3>
                    <span>If  the variable is assigned twice, the value of this variable would be changed (overwritten by the second value) to the second value, So, if you want a variable to be not overwritten, we can use the keyword “final”
                   

                    </span>
                    <strong>For Example</strong>
                        <pre className="code" >
                            <Code>{obj11}</Code>
                        </pre>
                </div>

                <div className="widgets">
                    <h3>Rules about Variable Names</h3>

                    <span className='strong' style={{ color: "black" }}>An identifier (unique):</span>
                    <ul>
                        <li>Unlimited length of letters (numerals, underscore)</li>
                        <li>Cannot begin with a number</li>
                        <li>No spaces, dots, hyphens</li>
                        <li>Cannot be the same with a <strong>keyword</strong></li>
                    </ul>

                </div>
                <div className="widgets">
                    <h3>Keyword list in Java:</h3>

                    <table className="demo">
                        <caption></caption>	<thead>	</thead>		<tr>
                            <td>&nbsp;abstract</td>
                            <td>&nbsp;double</td>
                            <td>int&nbsp;</td>
                            <td>&nbsp;true</td>
                        </tr>
                        <tr>
                            <td>&nbsp;boolean</td>
                            <td>else&nbsp;</td>
                            <td>interface&nbsp;</td>
                            <td>super false&nbsp;</td>
                        </tr>
                        <tr>
                            <td>&nbsp;break</td>
                            <td>&nbsp;extends</td>
                            <td>&nbsp;long</td>
                            <td>&nbsp;switch null</td>
                        </tr>
                        <tr>
                            <td>&nbsp;byte</td>
                            <td>&nbsp;final</td>
                            <td>&nbsp;native</td>
                            <td>&nbsp;synchronized</td>
                        </tr>
                        <tr>
                            <td>&nbsp;case</td>
                            <td>&nbsp;finally</td>
                            <td>&nbsp;new</td>
                            <td>&nbsp;this</td>
                        </tr>
                        <tr>
                            <td>&nbsp;catch</td>
                            <td>&nbsp;float</td>
                            <td>&nbsp;package</td>
                            <td>&nbsp;throw</td>
                        </tr>
                        <tr>
                            <td>&nbsp;char</td>
                            <td>&nbsp;for</td>
                            <td>&nbsp;private</td>
                            <td>&nbsp;throws</td>
                        </tr>
                        <tr>
                            <td>&nbsp;class</td>
                            <td>&nbsp;goto</td>
                            <td>&nbsp;protected</td>
                            <td>&nbsp;transient</td>
                        </tr>
                        <tr>
                            <td>&nbsp;const</td>
                            <td>&nbsp;if</td>
                            <td>&nbsp;public</td>
                            <td>&nbsp;try</td>
                        </tr>
                        <tr>
                            <td>&nbsp;continue</td>
                            <td>&nbsp;implements</td>
                            <td>&nbsp;return</td>
                            <td>&nbsp;void</td>
                        </tr>
                        <tr>
                            <td>&nbsp;default</td>
                            <td>&nbsp;import</td>
                            <td>&nbsp;short</td>
                            <td>&nbsp;volatile</td>
                        </tr>
                        <tr>
                            <td>&nbsp;do</td>
                            <td>&nbsp;instanceof</td>
                            <td>&nbsp;static</td>
                            <td>&nbsp;while</td>
                        </tr>
                    </table>
                    <table></table>
                </div>



                <div className="widgets">
                    <div className="exercise-div">

                        <h3 >Exercise: </h3>
                        <p>Please try to declare a integer variable called <strong>"a"</strong> and set its value to "100":
                        </p>
                        <p>                            Then output the value of <strong>"a"</strong> by using System.out.println()
</p>
<p>                            Hint: you can divide your code by typing ";"
</p>
                        <form onSubmit={(e) => { submit(e) }}>
                            <textarea
                                className="input shadow"
                                name="name"
                                rows="15"
                                cols="100"
                                placeholder="please enter your Java code here:"
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
export default Chapter1



