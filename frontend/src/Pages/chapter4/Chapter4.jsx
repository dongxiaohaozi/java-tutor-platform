import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navsection from '../../components/navbar/Navsection'
import './chapter4.scss'
import { useNavigate } from "react-router-dom"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { far } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Chapter4 = () => {

    const obj1 =
        `
    public class People {
        int age = 18;
    }
    `
    const obj2 =
        `
    public class People {
        int age = 18;
      
        public static void main (String[] args) {
          People Mike = new People ();
          System.out.println(Mike.age);
        }
    }

    output:
    18
    `

    const obj3 =
        `
    public class People {
        int height = 180;
      
        public static void main(String[] args) {
          People kevin = new People();  // Object 1 called Kevin
          People Danny = new People();  // Object 2 called Danny
          System.out.println(Kevin.height);
          System.out.println(Danyy.height);
        }
      }      
    `

    const inputdefault  = 
  `
  class YourFirstClass {
    int YourFirstAttribute = 100;
}
//add your code here//
System.out.print(YourFirstObj.YourFirstAttribute);
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
        fetch('/api/code4', {
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
                            <h1>Chapter 4: Java Classes and Objects</h1>
                            <p >Java is an object-oriented language.
                                For example, a person is an object. This person has attributes, such as hair color, age, height, and methods, such as walk and sleep.
                                A class is like an object generator, which is used for producing objects.

                            </p>

                        </span>

                    </div>
                </div>
                <div className="widgets">
                    <h2>Create a Class</h2>
                    <p>We use the keyword <strong>"class"</strong> to create a class: (this class has an attribute called “age”)</p>
                    <p>Create a class named "People" with a variable “age”:</p>
                    <div className = "example">
                          <h3>Example</h3>
                    <pre className="code" >
                        <Code>{obj1}</Code>
                    </pre>
                    </div>

                </div>


                <div className="widgets">
                    <h2>Create an Object</h2>
                    <p>We use the key word <strong>"new"</strong> to create a object.</p>
                    <p>An object is created from a class, which means an object is an <strong>instance</strong> of a class and an object has to be created after its class being created:</p>
                    <p>Now we use the previous <strong>"People"</strong> class to create an object called <strong>"Mike"</strong> and print the value of this object’s attribute (age):</p>
                    <div className = "example">
                          <h3>Example</h3>
                    <pre className="code" >
                        <Code>{obj2}</Code>
                    </pre>
                    </div>

                </div>
                <div className="widgets">
                    <h2>More Objects relating to one class</h2>
                    <p>This example creates two people <strong>"Kevin"</strong> and <strong>"Danny"</strong>:</p>
                    <p><strong>"People"</strong> is the class, <strong>"Kevin"</strong> and <strong>"Danny"</strong> are objects of the class <strong>"People"</strong>.</p>
                    <div className = "example">
                          <h3>Example</h3>
                    <pre className="code" >
                        <Code>{obj3}</Code>
                    </pre>
                    </div>
                    <p>This example can be explained as a group of people whose heights are the same as 180.
                        And the group people contains two members: Kevin and Danny.
                    </p>

                </div>









                {/* <div className="widgets">
                    <h3>A Tutorial Video about Java Classes and Objects:</h3>
                    <div style={{ "border-radius": '30px' }} dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/Mm06BuD3PlY' frameborder='0' autoplay; allowfullscreen   />" }} />
                    <div className=""></div>

                </div> */}




                <div className="widgets">
                <div className = "exercise-div">

                    <h3 >Exercise: </h3>


                    <p>
                        Now you can use what you learned to create an object of “YourFirstClass” called “YourFirstObj”:        </p>
                       <p>Then Adding the attribute named “YourFirstAttribute” to this class and set its value to 100</p> 
                        <p>                        Then try to print out the value of “YourFirstAttribute” in the main method:
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
export default Chapter4