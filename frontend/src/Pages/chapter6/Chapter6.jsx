import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navsection from '../../components/navbar/Navsection'
import './chapter4.scss'
import { useNavigate } from "react-router-dom"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { far } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Chapter6 = () => {

    const obj1 =
    `
    public class People {
            final int age = 18; 
            public static void main(String[] args) {
              People Kevin = new People();
              Kevin.age = 50; //this will cause this error: cannot assign a value to a final variable
              System.out.println(Kevin.age);
            }
    }
    `
          
      
    
    const obj2 =
        `
        public class People {
            // this is a Static method
            static void aBreatheMethod() {
              System.out.println("Static method is being called without creating objects");
            }
            // this is a Public method
            public void aAngryMethod() {
              System.out.println("this Public method has to be called by creating objects");
            }
          
            // Main method
            public static void main(String[ ] args) {
              aBreatheMethod();// Call the static method which is correct!
              // aAngryMethod();This is wrong and would output an error!
          
              People Kevin = new People(); // Create an object called Kevin of People
              Kevin. aAngryMethod (); // Call the public method after creating this object
            }
          }
          
    `

    const obj3 =
        `
        // Code from filename: People.java
        // this is an abstract class
        abstract class People {
          public String fname = "Kevin";
          public int age = 18;
          public abstract void study(); // abstract method
        }
        
        // Subclass (inherit from People)
        class Student extends People {
          public int graduationYear = 2023;
          public void study() { // the body of the abstract method is provided here
            System.out.println("He is studying now");
          }
        }
        // End code from filename: People.java
        
        // Code from filename: Second.java
        class Second {
          public static void main(String[] args) {
            // create an object of the Student class (which inherits attributes and methods from People)
            Student myObj = new Student();
        
            System.out.println("Name: " + myObj.fname);
            System.out.println("Age: " + myObj.age);
            System.out.println("Graduation Year: " + myObj.graduationYear);
            myObj.study(); // call abstract method
          }
        }
           
    `
    const inputdefault  = 
    `
    public class Animal {
        //put your code here//
        }
        Animal cat = new Animal();
        System.out.println(cat.color);
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
        fetch('/api/code6', {
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
                            <h1>Chapter 6: Java Modifiers</h1>
                            <p>We have seen the key world <strong>“public”</strong> in previous chapters.</p>
                            <p>The <strong>“public”</strong> keyword is an access modifier, it is used to set the access level for classes, attributes, methods, and constructors.</p>
                            <strong>We have two types of modifiers in Java:</strong>
                            <ul>
                                <li>access modifiers: define the access level</li>
                                <li>non-access modifiers: other functionality instead of define the access level.</li>
                            </ul>
                        </span>

                    </div>
                </div>
                <div className="widgets">
                    <h2>Access Modifiers</h2>
                    <strong>For classes, you can use either public or default:</strong>
                    <table class="demo">
                        <thead>
                            <tr>
                                <th>KeyWord</th>
                                <th>Access Range</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>&nbsp;public</td>
                                <td>&nbsp;The class is accessible by every class.<span ></span></td>
                            </tr>
                            <tr>
                                <td>&nbsp;<em ><span >default</span></em><span ></span></td>
                                <td>&nbsp;The class is only accessible by classes which are located in the same package. This happens when you don't specify a modifier.&nbsp;<span></span></td>
                            </tr>
                        </tbody>
                    </table>

                    <strong>For attributes, methods and constructors, you can use the following keyword to control access:</strong>
                    <table class="demo">
                        <thead>
                            <tr>
                                <th>KeyWord</th>
                                <th>Access Range</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>&nbsp;public</td>
                                <td>&nbsp;The code is accessible for all classes in the java file.<span ></span></td>
                            </tr>
                            <tr>
                                <td>&nbsp;<em ><span >private</span></em><span ></span></td>
                                <td>&nbsp;The code is just and only accessible within the declared class.
                                    &nbsp;<span></span></td>
                            </tr>
                            <tr>
                                <td>&nbsp;<em ><span >default</span></em><span ></span></td>
                                <td>&nbsp;The class is only accessible by classes which are located in the same package. This happens when you don't specify a modifier. 
                                    &nbsp;<span></span></td>
                            </tr>
                            <tr>
                                <td>&nbsp;<em ><span >protected</span></em><span ></span></td>
                                <td>&nbsp;The code is only accessible in the same package and subclasses.
                                    &nbsp;<span></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="widgets">
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
                </div>


                <div className="widgets">
                    <h2>Follow Up</h2>
                    <p>Next three examples will explain more precisely.</p>
                
                </div>


                <div className="widgets">
                    <h2>final</h2>
                    <p>When you want to declare an attribute with constancy, which means we don't want to change the attribute value, you can declare these attributes using <strong>"final"</strong>.</p>
                    <p>In this example we declare the attribute age using the keyword <strong>"final"</strong>.</p>
                    <div className = "example">
                          <h3>Example</h3>
                    <pre className="code" >
                        <Code>{obj1}</Code>
                    </pre>
                    </div>
                </div>


                <div className="widgets">
                    <h2>static</h2>
                    <p>A static method ensures that this method can be accessed without
                         creating an object of the class, which is quite different from public:</p>
                         <p>An example to show the differences between static and public methods:</p>
                         <div className = "example">
                          <h3>Example</h3>
                    <pre className="code" >
                        <Code>{obj2}</Code>
                    </pre>
                    </div>
                </div>


                <div className="widgets">
                    <h2>abstract</h2>
                    <p>An abstract method belongs to an abstract class, and it does not own a body. Because the body is provided by the subclass:</p>
                    <div className = "example">
                          <h3>Example</h3>
                    <pre className="code" >
                        <Code>{obj3}</Code>
                    </pre>
                    </div>
                </div>






{/* 
                <div className="widgets">
                    <h3>A Tutorial Video about Java Modifiers:</h3>
                    <div style={{ "border-radius": '30px' }} dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/L3N2CyYUR5c' frameborder='0' autoplay; allowfullscreen   />" }} />
                    <div className=""></div>

                </div> */}




                <div className="widgets">
                <div className = "exercise-div">

                    <h3 >Exercise: </h3>


                    <p>
                    We want to create a class called <strong>"Animals"</strong>with an unchangable attribute<strong>"color"</strong>.


                    </p>
                    <p>Then we use the keyword <strong>"final"</strong> to declare the attribute color.
</p>
<p>Initialize the attribute value: "black"</p>
<p>Then print out this attribute value in the main method
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
export default Chapter6