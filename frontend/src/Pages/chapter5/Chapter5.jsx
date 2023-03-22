import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navsection from '../../components/navbar/Navsection'
import './chapter4.scss'
import { useNavigate } from "react-router-dom"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { far } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Chapter5 = () => {

    const obj1 =
        `
    public class People {
        int age;  // Create a class attribute
      
        // Create a class constructor for the People class
        public People() {
          age = 17;  // Set the initial value for the class attribute age
        }
      
        public static void main(String[] args) {
          People Kevin = new People(); // Create an object of class People (This will call the constructor immediately)
          System.out.println(Kevin.age); // Print the value of age
        }
      }
      
      // Outputs:
       17
    `
    const obj2 =
        `
 public class Car {
  int modelYear;
  String modelName;

  public Car(int year, String name) {
    modelYear = year;
    modelName = name;
  }

  public static void main(String[] args) {
    Car KevinCar = new Car(2022, "Dream");
    System.out.println(KevinCar.modelYear + " " + KevinCar.modelName);
  }
}

// Outputs:
2022 Dream
    `

    const obj3 =
        `
    public class People {
        int height = 180;
      
        public static void main(String[] args) {
          People kevin = new People();  // Object 1 called Kevin
          People Danny = new People();  // Object 2 called Danny
          System.out.println(Kevin.age);
          System.out.println(Danyy.age);
        }
      }      
    `
    const inputdefault =
        `
    public class Tool {
        String color;
      
        public Tool(String name) {
          //put your code here//
      
      
        }
      }
        
    Tool knife = new Tool( "Black");     
    System.out.println(knife.color);
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
        fetch('/api/code5', {
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
                            <h1>Chapter 5: Java Constructors</h1>
                            <p >A constructor is one kind of method which is created for the goal of initializing objects (setting the initial value of attributes).

                            </p>
                            <p>Constructor is called immediately once an object of a class is created.</p>

                        </span>

                    </div>
                </div>
                <div className="widgets">
                    <h2>Create a constructor:</h2>
                    <p>We have leanred to use the keyword “class” to create a class: </p>
                    <p>In the previous chapter, we create a class named <strong>"People"</strong> with a variable <strong>“age”</strong></p>
                    <p>Now we create a constructor to the class "People" and initialize the age value to 17:</p>
                    <div className="example">
                        <h3>Example</h3>
                        <pre className="code" >
                            <Code>{obj1}</Code>
                        </pre>
                    </div>

                </div>


                <div className="widgets">
                    <h2>Note</h2>
                    <p>A constructor’s name must match with the class name </p>
                    <p>In this case:  public class <strong>"People"</strong> match with constructor public <strong>"People()"</strong></p>
                    <p>Moreover, the constructor cannot have a return type and it is called once the object is created.</p>
                </div>
                <div className="widgets">
                    <h2>Constructor Parameters</h2>
                    <p>Constructors can also take parameters, which is used to initialize attributes.

                    </p>                    <p>This example creates a class <strong>"Car"</strong> with two attributes and we pass two parameter to the constructor:</p>
                    <div className="example">
                        <h3>Example</h3>
                        <pre className="code" >
                            <Code>{obj2}</Code>
                        </pre>
                    </div>


                </div>









                {/* <div className="widgets">
                    <h3>A Tutorial Video about Java Constructor:</h3>
                    <div style={{ "border-radius": '30px' }} dangerouslySetInnerHTML={{ __html: "<iframe src='https://www.youtube.com/embed/jbcng9VhaSY' frameborder='0' autoplay; allowfullscreen   />" }} />
                    <div className=""></div>

                </div> */}




                <div className="widgets">
                    <div className="exercise-div">

                        <h3 >Exercise: </h3>


                        <p>
                            1.Create a class called <strong>“Tool”</strong> with an String attribute called<strong>“color”</strong>.

                        </p>
                        <p>2.Create a constructor with a parameter called name.</p>
                        <p>3.Then create an object called “Knife” with parameter value: “black”.</p>
                        <p>4.Then use the main method of this class to output knife’s color value.
                        </p>


                        <form onSubmit={(e) => { submit(e) }}>
                            <textarea
                                class="input shadow"
                                name="name"
                                rows="15"
                                cols="100"
                                defaultValue={inputdefault}


                                style={{ marginTop: "10px", width: "400px", height: "200px" }} type="text" id="input" ></textarea>
                            <button className="btn btn-primary" style={{ marginLeft: "10px" }} id="button" type="submit">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chapter5