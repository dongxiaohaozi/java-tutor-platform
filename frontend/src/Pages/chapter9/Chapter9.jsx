import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navsection from '../../components/navbar/Navsection'
import './chapter4.scss'
import { useNavigate } from "react-router-dom"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { far } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Chapter9 = () => {

    const obj1 =
        `
        // this is an Abstract class
        abstract class Creature {
          // Abstract method (does not have a body)
          public abstract void creatureSound();
          // Regular method
          public void eat() {
            System.out.println("yammmy");
          }
        }
        
        // Subclass (inherit from Animal)
        class dog extends Creature {
          public void creatureSound() {
            // The body of creatureSound() is provided here
            System.out.println("The pig says: wee wee");
          }
        }
        class Main {
          public static void main(String[] args) {
            Dog mDog = new Dog(); // Create a Dog object
            myDog.creatureSound();
            myDog.eat();
          }
        }
        
        `



const obj2 =
`
if (statement) {
                    // block of code to be executed if the value of this statement is true
} else {
                    // block of code to be executed if the value of this statement is false
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

const obj15=
`
abstract class Animal {
    public abstract void animalSound();
    public void sleep() {
      System.out.println("Zzz");
    }
  }
`
const obj16=
`
Animal newObj = new Animal(); // this will produce an error
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
        fetch('/code4', {
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
                            <h1>Chapter 9: Java Abstraction</h1>
                            <p>Abstract Classes and Methods:</p>
                            <p>Data abstraction is the process of hiding certain details and showing only essential information to the user.
Abstraction can be achieved with either abstract classes or interfaces.</p>
                            <p></p>
                            <p style={{color:"darkred"}}>The abstract keyword is a non-access modifier, applied by classes and methods:

                            </p>

                            <ul>
                                <li><strong>Abstract class:</strong> is a restricted class that cannot be used to create objects (to access it, it must be inherited from another class).

                                </li>
                                <li><strong>Abstract method:</strong> can only be used in an abstract class, and it does not have a body. The body is provided by the subclass (inherited from).</li>
                            </ul>
                        </span>

                    </div>
                </div>

                <div className="widgets">
                    <h2>Example
                    </h2>
                    <strong>An abstract class can have both abstract and regular methods:

</strong>
                    <div className = "example">
                    <pre className="code" >
                        <Code>{obj15}</Code>
                    </pre>
                    <p>From this example above, it is impossible to create an object of the Animal class:

</p>
<pre className="code" >
                        <Code>{obj16}</Code>
                    </pre>
                    </div>


                </div>

                <div className="widgets">
                    <h2>To access the abstract class, it must be inherited from another class. </h2>

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





{/* 

                <div className="widgets">
                    <h3>A Tutorial Video about Java Abstraction:</h3>
                    <div style={{ "border-radius": '30px' }} dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/SwAkGw4K8D4' frameborder='0' autoplay; allowfullscreen   />" }} />
                    <div className=""></div>

                </div> */}


{/* 

                <div className="widgets">
                    <h3 >Exercise: </h3>


                    <p>
                        Follow the steps in this chapter and write a abstarct class and a abstract method
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
                </div> */}
            </div>
        </div>
    )
}
export default Chapter9