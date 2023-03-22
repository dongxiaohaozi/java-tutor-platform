import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navsection from '../../components/navbar/Navsection'
import './chapter4.scss'
import { useNavigate } from "react-router-dom"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { far } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Chapter8 = () => {

    const obj1 =
        `
        if (statement) {
            // block of code to be executed if the value of this statement is true
        }
        `



    const obj2 =
        `
        if (statement) {
            // block of code to be executed if the the value of this statement is true
          } else {
            // block of code to be executed if the value of this statement is false
          }         
    `
    const obj20 =
    `
    if (statement) {
        System.out.print("statement is true")// block of code to be executed if the the value of this statement is true
      } else {
        System.out.print("statement is false")// block of code to be executed if the value of this statement is false
      }         
`

    const obj3 =
        `
        import java.io.IOException;
        import java.io.File;
        
        public class CreateFile {
            public static void main(String[] args){
                try{
                    File myObj =new File("/Users/kuidou/Documents/filename_kuidou.txt");
                    if (myObj.createNewFile()){
                        System.out.println("File created: "+ myObj.getName());
                    }else{
                        System.out.println("File already exists.");
                    }
                } catch(IOException e){
                    System.out.println("An error ocurred.");
                    e.printStackTrace();
        
                }
            }
        }
        `
    const obj4 =
        `
    package myspecialpack;
    class MySpecialPackageClass {
        public static void main(String[] args) {
        System.out.println("This is a package of my own!");
        }
    }

`
    const obj5 =
        `
C:\Users\Your Name>java myspecialpack.MySpecialPackageClass
`
    const obj6 =
        `
This is a package of my own!
`

const inputdefault  = 
`
int a=1,b=2,c=3,d=4,e=5,f=6,g=7,day;

String Day(int day){
//finish your code here//

    if (           ) {
        return("Today is Monday");
      } else if(day==b) {
        return("Today is Tuesday");
      } else if(day==c) {
        return("Today is Wednesday");
      } else if(day==d) {
        return("Today is Thursday");
      } else if(day==e) {
        return("Today is Friday");
      } else if(day==f) {
        return("Today is Saturday");
      } else{
        return("Today is Sunday");
      } 
}
System.out.print(Day(7))
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
        fetch('/api/code8', {
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
                            <h1>Chapter 8: Java Conditional Statements</h1>
                            <strong>Java supports the usual logical conditions from mathematics:

                            </strong>


                            <ul>
                                <li>Less than: x &lt;	 y </li>
                                <li>Less than or equal to: x &le;
                                    y
                                </li>
                                <li>Greater than: x &gt;	 y
                                </li>
                                <li>Greater than or equal to: x &ge;
                                    y
                                </li>
                                <li>Equal to x == y
                                </li>
                                <li>Not Equal to: x != y
                                </li>

                            </ul>
                            <strong>Java has the following conditional statements:</strong>
                                <ul>
                                    <li>Use "if" to let a piece of code to be executed, if a specified statement is true</li>
                                    <li>Use "else" to let a piece of code to be executed, if the first statement is false</li>
                                    <li>Use "else" if to let a new condition to test, if the first condition is false</li>
                                    <li>Use "switch" to let one of several alternative pieces of code to be executed</li>
                                </ul>


                        </span>

                    </div>
                </div>
                <div className="widgets">
                    <h2>The if Statement
</h2>
<strong>Syntax</strong>
<div className = "example">
                          <h3>Example</h3>
<pre className="code" >
                        <Code>{obj1}</Code>
                    </pre>
                    </div>

                
                </div>


                {/* <div className="widgets">
                    <h2>Non-Access Modifiers</h2>
                    <strong>For classes, you can use final / abstract:</strong>
                    <table class="demo">
                        <thead>
                            <tr>
                                <th>KeyWord</th>
                                <th>Access Range</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>&nbsp;final</td>
                                <td>&nbsp;It means this class cannot be inherited by other classes.<span ></span></td>
                            </tr>
                            <tr>
                                <td>&nbsp;<em ><span >abstract</span></em><span ></span></td>
                                <td>&nbsp;It means this class cannot be utilized to create objects.
                                    &nbsp;<span></span></td>
                            </tr>
                        </tbody>
                    </table>

                    <strong>For attributes and methods, you can use the one of the following:</strong>
                    <table class="demo">
                        <thead>
                            <tr>
                                <th>KeyWord</th>
                                <th>Access Range</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>&nbsp;final</td>
                                <td>&nbsp;Attributes and methods cannot be overridden or changed.<span ></span></td>
                            </tr>
                            <tr>
                                <td>&nbsp;<em ><span >static</span></em><span ></span></td>
                                <td>&nbsp;Attributes and methods belong to the class, rather than an object.
                                    &nbsp;<span></span></td>
                            </tr>
                            <tr>
                                <td>&nbsp;<em ><span >abstract</span></em><span ></span></td>
                                <td>&nbsp;Can only be used in an abstract class and can only be used on methods.
                                    &nbsp;<span></span></td>
                            </tr>
                            <tr>
                                <td>&nbsp;<em ><span >transient</span></em><span ></span></td>
                                <td>&nbsp;Attributes and methods are skipped when serializing
                                    the object containing them.
                                    &nbsp;<span></span></td>
                            </tr>
                            <tr>
                                <td>&nbsp;<em ><span >synchronized</span></em><span ></span></td>
                                <td>&nbsp;Methods can only be accessed by one thread at a time.
                                    &nbsp;<span></span></td>
                            </tr>
                            <tr>
                                <td>&nbsp;<em ><span >volatile</span></em><span ></span></td>
                                <td>&nbsp;The value of an attribute is not cached thread-locally, and is always read from the "main memory".
                                    &nbsp;<span></span></td>
                            </tr>




                        </tbody>
                    </table>
                </div> */}


                {/* <div className="widgets">
                    <h2>Follow Up</h2>
                    <p>Next three examples will explain more precisely</p>

                </div> */}


                <div className="widgets">
                    <h1>The else Statement</h1>
                    <strong>Syntax</strong>
                    <div className = "example">
                          <h3>Example</h3>
                    <pre className="code" >
                        <Code>{obj2}</Code>
                    </pre>
                    </div>
                </div>


                <div className="widgets">
                <div className = "example">
                          <h3>Example</h3>
                    <pre className="code" >
                        <Code>{obj20}</Code>
                    </pre>
                    </div>
                </div>


                <div className="widgets">
                    <h2>One More Example</h2>
                    <p>Import the package and use it to create files in the if statements:</p>
                    <div className = "example">
                          <h3>Example</h3>
                    <pre className="code" >
                        <Code>{obj3}</Code>
                    </pre>
                    </div>
                </div>
                {/* <div className="widgets">
                    <h2>User-defined Packages</h2>
                    <p>MySpecialPackageClass.java</p>
                    <pre className="code" >
                        <Code>{obj4}</Code>
                    </pre>
                    <strong>This let the compiler to generate the "myspecialpack" package.
                        The package name should be written in lower case to avoid conflict with exact the same name of class names.
                    </strong>
                    <p>To run the MySpecialPackageClass.java file, write the following:</p>
                    <pre className="code" >
                        <Code>{obj5}</Code>
                    </pre>
                    <p>The output will be:</p>
                    <pre className="code" >
                        <Code>{obj6}</Code>
                    </pre>
                </div> */}







                {/* <div className="widgets">
                    <h3>A Tutorial Video about Java Conditional Statements:</h3>
                    <div style={{ "border-radius": '30px' }} dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/WxKuolkQoPo' frameborder='0' autoplay; allowfullscreen   />" }} />
                    <div className=""></div>

                </div> */}




                <div className="widgets">
                <div className = "exercise-div">

                    <h3 >Exercise: </h3>


                    <p>
                        Follow the steps in this chapter and try to create a java file that take a integer input from 1 to 7, and output "Monday to Sunday" according to this input integer.
                    </p>


                    <form onSubmit={(e) => { submit(e) }}>
                        <textarea
                            class="input shadow"
                            name="name"
                            rows="15"
                            cols="100"
                            defaultValue = {inputdefault}


                            style={{ marginTop: "10px", width: "400px", height: "200px" }} type="text" id="input" ></textarea>
                        <button className="btn btn-primary" style={{ marginLeft: "10px" }} id="button" type="submit">submit</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Chapter8