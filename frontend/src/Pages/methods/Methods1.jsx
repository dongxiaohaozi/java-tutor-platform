import React from 'react'
import './methods.scss'
import  SyntaxHighlighter  from 'react-syntax-highlighter';
import {far} from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Methods = ({submit}) => {

           function submit (e) {
      e.preventDefault();
      console.log("hh")
      let code = document.getElementById("input").value;
      let answerID = Number((e.target.id).replace (/[^0-9]+/g, '')); // eg: "1stQuestion" => 1
      console.log(answerID)
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
  ` public class MyFirstClass {
    public void myFirstMethod() {
      // code
    }
  }`
    const obj2 =
  ` public class MyFirstClass {
    public void myFirstMethod(Fruit fruit) {
        // code to be executed
    }
}`
   const obj3 =
   `Car car = new Car()`
   const obj4 =
  ` String car = "VM";
   public boolean mySecondMethod(String car) {
       
       if (car == "VM") {
           return true;
       } else {
           return false;
       }
   }
mySecondMethod(car)`
   const obj5=
  ` String car = "VM";
   public boolean mySecondMethod(String car) {
       
       if (car.equals("VM") {
           return true;
       } else {
           return false;
       }
   }
mySecondMethod(car)`

const Code = ({ children }) => (
    <SyntaxHighlighter language="java" style={far}>
        { children }
    </SyntaxHighlighter>
);
  return (

    <>
                <div className="widgets">
                    
                        
                        <h1>Methods</h1>
                        
                        <p>In Java, the appearance of method is somehow different from the method's in other language. Because Java emphasizes the type of data, so no matter where and how we declare a variable, we must add the type in front of the variable name after the modifier. For a method, we need to write the type of return value, if the method doesn’t return a value, we use keyword "void". For the parameter, we also need to indicate the type. So the fundamental look of method is like this:</p>

                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj1}</Code>
                           </pre>
                        </div>
                        <p>In Java, there are two kinds of methods, one is the main method, it's used for executing the program, and the other is the method declared in the class we create.</p>
                        <p>Notice, any type of data can be the parameter, it is totally okay we use the object of class we create to be the parameter:</p>
                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj2}</Code>
                           </pre>
                        </div>
                        <p>We know the data in Java have two general types: primitive and reference. For reference type data, such as string, “=” actually means convey the referencing memory address rather than copy the value. Below code firstly creates a new object and allocates the memory space to it, then copies the address to the car variable.</p>
                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj3}</Code>
                           </pre>
                        </div>
                        <p>So the following codes should return false in principle, because “==” is to check the referencing object is the identical:</p>
                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj4}</Code>
                           </pre>
                        </div>
                        <p>but in reality because the compiler is smart enough to recognize the same value so only construct one referenced string.</p>
                        <p>To avoid this issue, when we compare two strings, we better use String.equals() method:</p>
                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj5}</Code>
                           </pre>
                        </div>
                        <p><strong>Notice</strong>: the initial value of any reference type data is null, meaning It haven't has a referencing address yet, if we want to pass this object to another object, there would be a run-time error occurring.</p>
                 </div>        
           </> 
        
  )
}

export default Methods