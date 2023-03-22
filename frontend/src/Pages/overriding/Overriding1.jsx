import React from 'react'
import './overriding.scss'
import  SyntaxHighlighter  from 'react-syntax-highlighter';
import {far} from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Overriding = ({submit}) => {


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
  ` public class Car {
    public double speed;
    public void accelerate (){
        this.speed++;
    }
}

 public class Bus extends Car {
    @ override
    public void accelerate () {
        if (this.speed < 60) {
            this.speed++;
        }
    }
}`
   const obj2 =
  ` public class Fruit {
    public void hello() {
        System.out.println("I'm a fruit.");
    }
}

 public class Apple extends Fruit {
    @ override
    public void hello() {
        System.out.println("I'm an apple.")
    }
  }`
   const obj3=
   `public class Fruit {
    public void hello() {
        System.out.println("I'm fruit.");
    }
}

public class Apple extends Fruit {
    @ override
    public void hello() {
        super.hello();
        System.out.println("Explicitly, I'm apple.");
    }
  }`

  const obj4 =
  ` public class Fruit { 
    public String type = "fruit";
}

 public class Apple extends Fruit {
    public String type = "apple";
    public String getType() {
       return "I am an "+ this.type + ", also a " + super.type;

   }
}`
const obj5 = 
  ` public class Employee{
    protected salary;
    public void setSalary(double duration) {
        this.salary = duration*500;
    }
  }`
const Code = ({ children }) => (
    <SyntaxHighlighter language="java" style={far}>
        { children }
    </SyntaxHighlighter>
);
  return (
    <>
                <div className="widgets">
                    
                        
                        <h1>Overriding</h1>
                        
                        <p>Subclass inherits all the methods and fields of its superclass, but sometimes we want to redefine a method in the subclass that has already exited in the superclass. This behavior is called overriding. </p>
                        <p>The overriding method must have the same method name, parameter and return type as the override method. And we should write "@ override" as the identifier signal of the overriding method. Here is two examples:</p>
                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj1}</Code>
                           </pre>
                        </div>
                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj2}</Code>
                           </pre>
                        </div>
                        
                    
                 </div>
                <div className="widgets">
                <p>There are many built-in methods in Java, such as equals() and toString(), belonging to the Object class. Object class is the superclass for all other classes in Java, that's why we can use them inside any class. It is also operatable that we override these methods in other classes.</p>
                <p>Keyword “super” refers to the object of the superclass, “this” refers to the object of current class. If we want to use the overridden version of superclass in subclass, we just use "super":</p>
                <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj3}</Code>
                           </pre>
                </div>
                
                <p>Notice: we can't override a field of superclass. Overriding only applies to method. In the following example, the superclass version of "type" is hidden in the subclass. But actually we also can use "this" and "super" to denote which version of the field to use.</p>
                <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj4}</Code>
                           </pre>
                </div>
                <p>The returned string is "I am an apple ,also a fruit".</p>
                <p>Modifier "final" means the final version. Method with "final" cannot be overridden, class with "final" cannot be extended, field with "final" cannot be changed.</p>
                
                </div>
                <div className="widgets">
                    <h3>What's the difference between overriding and overloading? </h3>
                    <p>Overloading refers to defining more than one same name methods in one class, overriding refers to redefine the method in superclass with same format of one method in subclass.</p>
                </div>
                <div className="widgets">
                
                <h3>Exercise:</h3>
                <div className = "exercise-div">
                <p className = "exercise-title">
                There is a class Employeeas below.Interns is its subclass, override the setSalary method to set the intern's salary is duration*100. If an intern's working duration is 20. Output his salary.

                </p>
                <textarea id = "input" defaultValue={obj5}>

                    
                </textarea>
                <button onClick = {(e) => {submit(e)}} id = "question19" className="testbutton" >Submit</button>
               </div>       
            </div>      
           </> 
        
  )
}

export default Overriding