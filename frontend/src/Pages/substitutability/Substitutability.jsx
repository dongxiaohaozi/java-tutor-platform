import React from 'react'
import './substitutability.scss'
import  SyntaxHighlighter  from 'react-syntax-highlighter';
import {far} from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Substitutability = () => {

   
   
    const obj1 = 
  ` Fruit apple = new Fruit()`
  const obj2 = 
  ` Fruit apple = new Apple()`
  const obj3 = 
  `Superclass apple = new Subclass()`
   const obj4 =
   `Fruit[] fruits = new Fruit[10];
fruits[0] = new Apple()`
   const obj5 =
   `public class Fruit {
    public double clories = 60;
}

public class Apple extends Fruit {
    
    this.clories =50;  
} 

public class Person {
    public double dailyColries;

    public double consume(Fruit fruit) {
        double clories = fruit.clories;
        this.dailyColries += clories;
    } 
} 

public class App{
    public static void main(String[] args) {
         Person me = new Person();
         me.consume(new Apple()); // rather than  me.consume(new Fruit());

    }
}
`
  const obj6 = 
` Apple[] apple = new Apple[10];
 apple[0] = new Fruit();`

 const obj7=
` Apple fruit = new Fruit()`

 function submit(e) {
    if (document.getElementById("exercise-checkbox-1-false").checked )
    {
        alert("Answer is correct!")
    } else {
        alert("Answer is wrong!")
    }
 }
 const Code = ({ children }) => (
    <SyntaxHighlighter language="java" style={far}>
        { children }
    </SyntaxHighlighter>
);
  return (
    <>
                <div className="widgets">
                    
                        
                        <h1>Substitutability</h1>
                        
                        <p>From the last section, we have known the subclass inherits all the properties of the subclass, but the superclass do not possess the properties that only belong to the subclass. Subclass extends the content on the basis of the superclass. </p>
                        <p>Java compiler uses declared type as the criteria to judge the methods and attributes that declared object should have.</p>
                        <p>So we can replace the superclass with the subclass anytime and anywhere. Such as when we initialize an apple, we originally want to create a fruit object:</p>
                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj1}</Code>
                           </pre>
                        </div>
                        <p>Then we decide to create an apple object but remain the type to be the fruit: </p>
                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj2}</Code>
                           </pre>
                        </div>
                        <p>This is okay. But if we want to create a fruit object with apple type, it is inoperable as the   declared object may actually owns less properties than it should have. </p>
                        <p>So only this is operable:</p>
                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj3}</Code>
                           </pre>
                        </div>
                        <p>Ihis characteristic of declaration usually used in the array:</p>
                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj4}</Code>
                           </pre>
                        </div>
                        <p>We can also replace superclass with subclass as the parameter of a function:</p>
                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj5}</Code>
                           </pre>
                        </div>
                 </div>


                
                <div className="widgets">
                
                <h3>Exercise:</h3>
                <div className = "exercise-div">
                <p className = "exercise-title">
                Class Fruit is the superclass of class Apple. If the following statements are right?
                </p>
                <div>
                    <ul className = "exercise-checkbox">
                        <pre>
                            <code>{obj6}</code>
                        </pre>
                        <form >
                        <li><input  type = "radio" value ="true" name = "exercise-checkbox-1" ></input>True</li>
                        <li><input  type = "radio" value = "false" name = "exercise-checkbox-1" id ="exercise-checkbox-1-false"></input>False</li>
                        </form>
                    </ul>
{/*                    <ul className = "exercise-checkbox">
                        <pre>
                            <code>{obj7}</code>
                        </pre>
                        <form>
                        <li><input  type = "radio" name = "exercise-checkbox-2"></input>True</li>
                        <li><input type = "radio" name = "exercise-checkbox-2" id ="exercise-checkbox-2-false"></input>False</li>
                        </form>
                    </ul>*/}

                </div>
                <button onClick = {(e) => {submit(e)}} id = "question17" className="testbutton" >Submit</button>
               </div>       
            </div>


            
           </> 
        
  )
}

export default Substitutability