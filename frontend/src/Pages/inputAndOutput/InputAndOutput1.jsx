import './inputAndOutput.scss';
import React, { useEffect } from 'react';
import  SyntaxHighlighter  from 'react-syntax-highlighter';
import {far} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const InputAndOutput = ({submit}) => {
  function submit (e) {
    e.preventDefault();
    console.log("hh")
    let code = document.getElementById("input").value;
    let answerID = Number((e.target.id).replace (/[^0-9]+/g, '')); // eg: "1stQuestion" => 1
    // let answerID = "100000";
    let data = { code: code };
    fetch(`/code/${answerID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((txt) => alert(txt));
  }






    const obj1 = 
  ` Public class Main{
        public static void main(String[] args){}
  }`
        
    const obj2 = 
  `System.out.println("Hello World");`
    
  const obj3 = 
  ` import java.util.Scanner; 

  class Main {
      public static void main(String[] args) {
          Scanner inputScanner = new Scanner(System.in);
  // String input
          String name = inputScanner.nextLine();
  
  // Numerical input
          int age = inputScanner.nextInt();
          double salary = inputScanner.nextDouble();
  
  // Output input by user
          System.out.println("The employee's name: " + name);
          System.out.println("The employee's age: " + age);
          System.out.println("The employee's salary: " + salary);
      }
  }` ;
// useEffect is run after every time the element is rendered
// make the cursor in the user input area of the second exercise when the page is loaded, reminding user can input number on that place
useEffect(() => {document.getElementById("userinput").focus()})

function deliverNum(e) {
  let userinput = document.getElementById("userinput")
  if (e.keycode = 13) {
      if ((isNaN(userinput.value)) || (userinput.value = "")) {
        document.getElementById("userinputoutput").innerHTML = "please note inputing number."
      } else {
        document.getElementById("userinputoutput").innerHTML = "Inputed Number: " + userinput.value
      }
  }
}
const Code = ({ children }) => (
  <SyntaxHighlighter language="java" style={ far}>
      { children }
  </SyntaxHighlighter>
);
    return (
            <>
            <div className="widgets">
                <h1>Input, output, and main method</h1>
                
                <p>In Java, every line of code must be inside a class, each java file needs to be named with the class name adding the suffix of “.java”. For a java program, 
                    it must contain the Main method to make the program executed. We can regard it as the evocation of the program,
                     every bit of code in the Main method would be running. The main method looks like this: </p>
                    
               <div className = "example">
               <h3>Example</h3>
               <pre className = "code" >
                <Code>{obj1}</Code>
               </pre>
               </div>
               <p>As an object-oriented programming language, for a Java program, we need to create different classes, in each class,
                 we define the field and method belonging to this class. A good manner is creating a sole file for every class.</p> 
               <p>In the main method, we can create different objects of different classes then quote their methods and fields in different
                places to create connections and interactions between objects.</p>
               
    
            </div>

            <div className="widgets">
                <p>Generally, there would be input and output command lines in the main method. We use the following statement to print content to the screen:</p>

                <div className = "example">
                <h3>Example</h3>
                <pre className = "code" >
                <Code>{obj2}</Code>
                </pre>
                </div>
                <p>
                We can also set some logic in the setter to make the field value can only be 
                set if the value meets some conditions, in this way, we avoid the mistake people make to some degree.
                </p>
                <p>System is a built-in class in Java, we can directly use it, out means output, it also a class belonging to System. 
                    println() is its method. It just means print a separate line. There is another method print(), it means to print the message with starting a new line.<br/>

                   Scanner is the class used for getting user's input. First, we need to create an object of the Scanner class, then use this object to invoke methods. 
                   Before using it, we need to import the package java.util.Scanner. There are several methods of implementing reading different types of content.
                </p>

                <table>
                    <tbody>
                     <tr>
                        <th style = {{width:"30%"}}>Method</th> <th style = {{width:"70%"}}>Description</th>
                     </tr>
                     <tr>
                        <td>nextBoolean()</td> <td>Reads a boolean value from the user</td>
                     </tr>
                     <tr>
                        <td>nextByte()</td> <td>Reads a byte value from the user</td>
                     </tr>
                     <tr>
                        <td>nextDouble()</td> <td>Reads a double value from the user</td>
                     </tr>
                     <tr>
                        <td>nextFloat()</td> <td>Reads a float value from the user</td>
                     </tr>
                     <tr>
                        <td>nextInt()</td> <td>Reads an int value from the user</td>
                     </tr>
                     <tr>
                        <td>nextLong()</td> <td>Reads a long value from the user</td>
                     </tr>
                     <tr>
                        <td>nextShort()</td> <td>Reads a short value from the user</td>
                     </tr>
                    </tbody>
                </table>
                <p>The example below uses different input methods to receive different inputted data.</p>
                <div className = "example">
                <h3>Example</h3>
                <pre className = "code" >
                <Code>{obj3}</Code>
                </pre>
                </div>

                {/* (reference w3school) */}

                <div className = "example">
                <h3>Example</h3>
                <pre className = "code" >
                <Code>{obj3}</Code>
                </pre>
                </div>
                <p>If the user types the wrong type of input, the system will throw the error message, e.g.  "InputMismatchException".</p>    
            </div>

            <div className="widgets">
                
                <h3>Exercise:</h3>
                <div className = "exercise-div">
                <p className = "exercise-title">1. Output the result of calculation: 1+1</p>
                <textarea id = "input" >

                    
                </textarea>
                <button onClick = {(e) => {submit(e)}} id = "question11" className="testbutton" >Submit</button>



                <p className = "exercise-title">2. Input any integer you want, then the system will receive your input:</p>
                
                <div id = "question3">
	                 	Scanner inputScanner = new Scanner(System.in);<br/>
                    int num = inputScanner.nextInt();<br/>
		                <input  keyUp = {(e) => deliverNum(e)} type="text" id = "userinput" style = {{border:"none", outline:"none"}}/><br/>
		                <span id  = "userinputoutput"></span>
	              </div>
                

                
                
                </div>       
            </div>
        </>   

  )
  
}


export default InputAndOutput