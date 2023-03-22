import React from 'react';
import './inheritance.scss';
import  SyntaxHighlighter  from 'react-syntax-highlighter';
import {far} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Inheritance = ({submit}) => {

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
  ` public class Fruit{
    protected String color
 }
    
 public class Apple extends Fruit {
    super.color = "red"
 }`
  const obj2 =
  `public class Fruit{
    protected String color
    public void variety() {
        System.out.println("I am a fruit.")
    }
}
public class App{
    public static void main(String[] args) {
         Apple apple = new Apple();
         apple.variety()
    }
}`
const obj3 =
  ` public class Fruit{
    private String color;
    public Fruit(String color) {
       this.color = color
    }
}
       
public class Apple extends Fruit {
    public Apple() {
        super("red")
    }
  }`
  const Code = ({ children }) => (
    <SyntaxHighlighter language="java" style={ far}>
        { children }
    </SyntaxHighlighter>
  );
  return (
    <>
               <div className="widgets">
                    
                        
                        <h1>Inheritance</h1>
                        
                        <p>When programming, we may want to define a class inheriting all the components from another class, then adding its own components. Such as we define a class Apple, it inherits all the natures of the class Fruit. And maybe we also want to define other class Banana, Strawberry inheriting class Fruit. In Java, we use subclass and superclass to handle this case.
                           The Fruit is superclass, Apple is subclass. 
                        </p>
                        <p>We can only define the superclass first, then when defining subclass, use keyword “extends” to manifest it is a subclass of the superclass:
                        </p>
                        <p>Because subclass automatically inherits all the properties of superclass, in the subclass we can directly use superclass's properties:
                        </p>

                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj1}</Code>
                           </pre>
                        </div>
                        <p>
                        Besides, after we create the object of the subclass, we can also use those methods or attributes defined in the superclass:
                        </p>
                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj2}</Code>
                           </pre>
                        </div>
                        <p>
                        Subclass can also use the constructor of the superclass. We use keyword “super” to call it.
                        </p>
                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj3}</Code>
                           </pre>
                        </div>
                        <p>
                        <strong>Notice:</strong> the superclass constructor must be called at the first line of the subclass constructor if we want to use it.
                        </p>
                    
                 </div>
                 <div className = "widgets">
                    <h3 className = "small-caption">Characteristics</h3>
                    <ul>
                        <li>The inheritance is transitive, if A is the subclass of B, B is the subclass of C, then A is also the subclass of C.</li>
                        <li>One class can only inherits directly one superclass.</li>
                        <li>Don't forget the difference between modifier "protected" and "private", if we define a private field in the superclass, we cannot assess it directly, we need to use the public getter or public constructor of the superclass. If we define a protected filed in the superclass, we then can get it directly in the subclass or by the object of the subclass.</li>
                        <li>Don't forget the function of modifier "final", if a class is defined as final type, it cannot be inherited.</li>
                        <li>Don't forget to use it when you code your program, it can promote the efficiency of development because we just need to define those common properties once.</li>
                    </ul>
                 </div>


                
                <div className="widgets">
                
                <h3>Exercise:</h3>
                <div className = "exercise-div">
                <p className = "exercise-title">
                There is a class Fruit defined just like above example. Define a class Banana as its subclass and make its objects' default color is yellow when initializing. Create a Banana object,output its color.
                </p>
                <textarea id = "input" >

                    
                </textarea>
                <button onClick = {(e) => {submit(e)}} id = "question16" className="testbutton" >Submit</button>
               </div>       
            </div>


            
           </> 
        
  )
}

export default Inheritance