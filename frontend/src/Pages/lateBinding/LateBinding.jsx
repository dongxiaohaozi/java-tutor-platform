import React from 'react'
import './lateBinding.scss'
import  SyntaxHighlighter  from 'react-syntax-highlighter';
import {far} from 'react-syntax-highlighter/dist/esm/styles/hljs';
const lateBinding = ({submit}) => {
   
    const obj1 = 
  ` Fruit apple = new Apple();
 apple.hello()`

   const obj2 =
  ` Apple apple = new Apple();
 apple.hello()`

   const obj3=
   ` Fruit apple = new Apple();
 ((Apple)apple).hello()`

  const obj4 =
  ` public String type(Fruit fruit) {
    if (fruit instanceOf Apple) {
        ((Apple)fruit).hello();
    }
 }`
const obj5 = 
  ` public class Apple extends Fruit {
}
public class Orange extends Fruit{
    public String color = "orange";
}
public class Cherry extends Fruit{
    public String color = "red";
}
public String whatColor(Fruit fruit) {
    if (fruit instanceOf Orange) {
        return ((Orange)fruit).color
    } else if (fruit instanceOf Cherry) {
        return ((Cherry)fruit).color;
    }else {
        return "its color is not fixed.";
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
                    
                        
                        <h1>Late Binding</h1>
                        
                        <p>
                        Please think of what version of hello method to use in this case if both class fruit and class apple have hello method:
                        </p>
                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj1}</Code>
                           </pre>
                        </div>
                        <p>
                        The answer is using class Apple's version. It is because when the codes is ran, Java use the actual type of the object to determine the method version, which is different from the way compiler thinks.
                        </p>
                       <p>
                       When compiling, compiler uses declared type to judge if the codes are effectiveness. When operating, Java uses actual type to decide the method to use.

                       </p>
                       <p>
                       At runtime, if the actual object doesn't have the called method, java will goes to its superclass to find, if this class doesn't have either, java keeps to go to its superclass until it finds.
                       </p>        
                    
                 </div>
                <div className="widgets">
                <p>
                So what's the meaning of late binding? Java have to wait until run time to know the actual method to use.
                </p>
                <p>
                For the above codes, if class Fruit doesn't have hello method, only class Apple has, then compiler will think object apple doesn't have hello method, so the codes becomes invalid.
                </p>
                <p>
                Then how can we fix it? Well, one way is directly declaring apple as Apple type:</p>
                <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj2}</Code>
                           </pre>
                </div>
                
                <p>
                Another way is casting:
                </p>
                <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj3}</Code>
                           </pre>
                </div>
                <p>
                Sometimes we don't know if the fruit object is an apple, then we can create a function to test:
                </p>
                <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj4}</Code>
                           </pre>
                </div>
                <p>
                This knowledge is also useful when we want to use a method only existing in some of the subclasses of one superclass:
                </p>
                <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj5}</Code>
                           </pre>
                </div>
                </div>
    
           </> 
        
  )
}

export default lateBinding