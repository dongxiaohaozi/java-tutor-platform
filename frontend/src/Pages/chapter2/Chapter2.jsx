import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navsection from '../../components/navbar/Navsection'
import './chapter2.scss'
import { useNavigate } from "react-router-dom"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { far } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Chapter2 = () => {
    const obj2 =
        `
A=1; //the value of A will be 1
B = A++; // the value of B will be 2
    `

    const Code = ({ children }) => (
        <SyntaxHighlighter language="java" style={far}>
            {children}
        </SyntaxHighlighter>
    );
    // ----------------
    const navigate = useNavigate();

    const transfer = (txt) => {
        if (txt.includes(":)")) {
            setTimeout(() => navigate('/'), 500);

        }
    }
    const submit = (e) => {
        e.preventDefault();

        const code = document.getElementById("input").value;
        const data = { code: code };
        fetch('/api/code2', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.text())
            .then(txt => alert(txt))
            .then(txt => transfer(txt))

    }
    return (
        <div className='introduction'>
            {/* <Sidebar /> */}
            <div className="introductionContainer">
                {/* <Navsection /> */}
                <div className="widgets">
                    <div className="left">
                        <span className="title">
                            <h1>Chapter 2: Java Operators and Expressions </h1>
                            <h2 >4 Types of Operators in Java:</h2>
                            <table class="demo">
                                <caption>Arithmetic Operators</caption>
                                <thead>
                                    <tr>
                                        <th>Operator</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Example</th>
                                    </tr>
                                </thead>

                                <tr>
                                    <td>&nbsp;+</td>
                                    <td>&nbsp;Additon</td>
                                    <td>&nbsp;Adds together two values</td>
                                    <td>&nbsp;a+b</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;_</td>
                                    <td>&nbsp;Substraction</td>
                                    <td>&nbsp;Substract one value from another</td>
                                    <td>&nbsp;a-b</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;*</td>
                                    <td>&nbsp;Multiplication</td>
                                    <td>&nbsp;Multiple two values</td>
                                    <td>&nbsp;a*b</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;/</td>
                                    <td>&nbsp;Division</td>
                                    <td>&nbsp;Divides one value by another</td>
                                    <td>&nbsp;a/b</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;%</td>
                                    <td>Modulus</td>
                                    <td>&nbsp;Returns the division remiander</td>
                                    <td>&nbsp;a%b</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;++</td>
                                    <td>&nbsp;Increment</td>
                                    <td>&nbsp;Increase the value of a variable by 1</td>
                                    <td>&nbsp;++a</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;--</td>
                                    <td>&nbsp;Decrement</td>
                                    <td>&nbsp;Decrease the value of a variable by 1</td>
                                    <td>&nbsp;--a</td>
                                </tr>

                            </table>



                        </span>
                    </div>
                    <table class="demo">
                        <caption>Assignment Operators</caption>
                        <thead>
                            <tr>
                                <th>Operator</th>
                                <th>Example</th>
                                <th>Same As</th>
                            </tr>
                        </thead>

                        <tr>
                            <td>&nbsp;=</td>
                            <td>&nbsp;a=5</td>
                            <td>a=5</td>
                        </tr>
                        <tr>
                            <td>&nbsp;+=</td>
                            <td>&nbsp;a+=1</td>
                            <td>a=a+1</td>
                        </tr>
                        <tr>
                            <td>&nbsp;-=</td>
                            <td>a-=2</td>
                            <td>a=a-2</td>
                        </tr>
                        <tr>
                            <td>&nbsp;*=</td>
                            <td>&nbsp;a*=3</td>
                            <td>x=x*3</td>
                        </tr>
                        <tr>
                            <td>/=</td>
                            <td>a/=2</td>
                            <td>a=a/2</td>
                        </tr>
                        <tr>
                            <td>&nbsp;%=</td>
                            <td>&nbsp;a%=3</td>
                            <td>&nbsp;x=x%3</td>
                        </tr>
                        <tr>
                            <td>&nbsp;&amp;=</td>
                            <td>&nbsp;a&amp;=3</td>
                            <td>&nbsp;a=a&amp;3</td>
                        </tr>
                        <tr>
                            <td>|=&nbsp;</td>
                            <td>&nbsp;a|=3</td>
                            <td>&nbsp;a=a|3</td>
                        </tr>
                        <tr>
                            <td>&nbsp;^=</td>
                            <td>&nbsp;a^=3</td>
                            <td>&nbsp;a=a^3</td>
                        </tr>
                        <tr>
                            <td>&nbsp;&gt;&gt;=</td>
                            <td>&nbsp;a&gt;&gt;=3</td>
                            <td>&nbsp;a=a&gt;&gt;3</td>
                        </tr>
                        <tr>
                            <td>&nbsp;&lt;&lt;=</td>
                            <td>&nbsp;a&lt;&lt;=3</td>
                            <td>&nbsp;a=a&lt;&lt;3</td>
                        </tr>

                    </table>

                    <table class="demo">
                        <caption>Comparision Operators</caption>
                        <thead>
                            <tr>
                                <th>Operator</th>
                                <th>Name</th>
                                <th>Example</th>
                            </tr>	</thead>		<tr>
                            <td>&nbsp;==</td>
                            <td>Equal to</td>
                            <td>a==b</td>
                        </tr>
                        <tr>
                            <td>!=</td>
                            <td>Not equal</td>
                            <td>a!=b</td>
                        </tr>
                        <tr>
                            <td>&gt;</td>
                            <td>Greater than</td>
                            <td>a&gt;b</td>
                        </tr>
                        <tr>
                            <td>&lt;</td>
                            <td>Less than</td>
                            <td>a&lt;b</td>
                        </tr>
                        <tr>
                            <td>&gt;=</td>
                            <td>Greater than or equal to</td>
                            <td>a&gt;=b</td>
                        </tr>
                        <tr>
                            <td>&nbsp;&lt;=</td>
                            <td>&nbsp;Less than or equal to</td>
                            <td>&nbsp;a&lt;=b</td>
                        </tr>

                    </table>
                    <table class="demo">
                        <caption>Logical Operators</caption>
                        <thead>
                            <tr>
                                <th>Operator</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Example</th>
                            </tr>	</thead>		<tr>
                            <td>&amp;&amp;</td>
                            <td>Logical and</td>
                            <td>Return true if both statement is true</td>
                            <td>&nbsp;a&lt;8&amp;&amp;a&lt;1</td>
                        </tr>
                        <tr>
                            <td>||</td>
                            <td>Logical or</td>
                            <td>Return true if one of the statement is true</td>
                            <td>&nbsp;a&lt;8||a&lt;7</td>
                        </tr>
                        <tr>
                            <td>!</td>
                            <td>Logical not</td>
                            <td>Reverse the result, return false if the result is true</td>
                            <td>&nbsp;!(a&lt;1&amp;&amp;A&lt;4)</td>
                        </tr>

                    </table>
                </div>
                {/* <div className="widgets">
                    <h3>A Tutorial Video about Java Operator:</h3>
                    <div style={{ "border-radius": '30px' }} dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/tx1QIp0P6W8' frameborder='0' autoplay; allowfullscreen   />" }} />
                    <div className=""></div>

                </div> */}

                <div className="widgets">
                    <h2>Java Operator and Expression:</h2>
                    <p>Expressions perform specific actions, based on an operator, with one or two operands. An operand can be a constant, a variable or a function result. Operators are arithmetic, logical, and relational. Some operators vary in functionality according to the data type of the operands specified in the expression.</p>
                    <span>Operators are manipulating values in an expression to produce new values:
                    </span>
                    <div className="example">
                        <h3>Example</h3>

                        <pre className="code" >
                            <Code>{obj2}</Code>
                        </pre>
                    </div>




                </div>




                <div className="widgets">
                    <div className="exercise-div">

                        <h3 >Exercise: </h3>
                        <p>As we all know: "1{'>'}0" is true and "100{'<'}20"is false;</p>
                        <p>                            Then please use the <strong>logic operators</strong> to combine these two expressions and output a boolean value: <strong>"false"</strong> .
                        </p>
                        <p>                            Hint 1: you can use "!","{'&&'}", "()" to connect your statements.
                        </p>
                        <p>
                            Hint 2: you can use the System.out.print() to output the boolean value.

                        </p>

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
                </div>
            </div>
        </div>
    )
}
export default Chapter2