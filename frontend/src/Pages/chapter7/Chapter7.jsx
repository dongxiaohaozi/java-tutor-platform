import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navsection from '../../components/navbar/Navsection'
import './chapter4.scss'
import { useNavigate } from "react-router-dom"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { far } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Chapter7 = () => {

    const obj1 =
        `
    import package.name.Class;   // Import a single class which is from a package
    import package.name.*;   // Import the whole package
        
    `



    const obj2 =
        `
    import java.util.Scanner;
    //import the a class called “Scanner” from the “java.util” package          
    `

    const obj3 =
        `
    import java.util.Scanner;

    class People {
            public static void main(String[] args){
                Scanner myObj = new Scanner(System.in);
                System.out.println("Enter name, age and salary:");
        
                String name = myObj.nextLine();
                int age = myObj.nextInt();
                double salary = myObj.nextDouble();
        
                System.out.println("name: "+ name);
                System.out.println("Age: "+age);
                System.out.println("salary:"+salary);
        
            }
            
    }

output//
Enter name, age and salary:
Kevin
18
3000
name: Kevin
Age: 18
salary:3000.0          
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
import java.lang.*;
int a = 100, b = 200,maxi;
//PUT YOUR CODE HERE//      
System.out.print(maxi);
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
        fetch('/api/code7', {
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
                            <h1>Chapter 7: Java Packages</h1>
                            <p>A Java package is like a file repository that contains all related classes.
                                It is an excellent way to avoid same-name overlaps.
                            </p>
                            <strong>Two categories of packages:</strong>
                            <ul>
                                <li>Built-in Packages</li>
                                <li>User defined Packages</li>
                            </ul>
                        </span>

                    </div>
                </div>
                <div className="widgets">
                    <h2>Built-in Packages</h2>
                    <p>There are many built-in packages in the Java API:
                        The entire packages list are shown at <a href='https://docs.oracle.com/javase/8/docs/api/'>Oracles Official website</a>
                    </p>
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
                    <h2>Syntax</h2>
                    <div className = "example">
                          <h3>Example</h3>
                    <pre className="code" >
                        <Code>{obj1}</Code>
                    </pre>
                    </div>
                </div>


                <div className="widgets">
                <div className = "example">
                          <h3>Example</h3>
                    <pre className="code" >
                        <Code>{obj2}</Code>
                    </pre>
                    </div>
                </div>


                <div className="widgets">
                    <h2>One More Example</h2>
                    <p>Using the Scanner class to get user input:</p>
                    <div className = "example">
                          <h3>Example</h3>
                    <pre className="code" >
                        <Code>{obj3}</Code>
                    </pre>
                    </div>
                </div>
                <div className="widgets">
                    <h2>User-defined Packages</h2>
                    <p>MySpecialPackageClass.java</p>
                    <div className = "example">
                          <h3>Example</h3>
                    <pre className="code" >
                        <Code>{obj4}</Code>
                    </pre>
                    </div>
                    <strong>This let the compiler to generate the "myspecialpack" package.
                        The package name should be written in lower case to avoid conflict with exact the same name of class names.
                    </strong>
                    <p>To run the MySpecialPackageClass.java file, write the following:</p>
                    <div className = "example">
                          <h3>Example</h3>
                    <pre className="code" >
                        <Code>{obj5}</Code>
                    </pre>
                    </div>
                    <p>The output will be:</p>
                    <div className = "example">
                          <h3>Example</h3>
                    <pre className="code" >
                        <Code>{obj6}</Code>
                    </pre>
                    </div>
                </div>






{/* 
                <div className="widgets">
                    <h3>A Tutorial Video about Java Packages:</h3>
                    <div style={{ "border-radius": '30px' }} dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/ipMdsje9J6s' frameborder='0' autoplay; allowfullscreen   />" }} />
                    <div className=""></div>

                </div> */}




                <div className="widgets">
                <div className = "exercise-div">

                    <h3 >Exercise: </h3>


                    <p> 1.Declare three integer variables a =100, b=200, maxi;
                 </p>
<p>2.Import the build-in Java Package : lang</p>
<p>3.Use its Math.max() method to output the greater one between a and b  </p>


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
export default Chapter7