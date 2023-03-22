import React from 'react'
import './overloading.scss'
import  SyntaxHighlighter  from 'react-syntax-highlighter';
import {far} from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Overloading = ({submit}) => {
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
  ` public class SecondHandCar {
    private int price;
    private String brand;

    public void setPrice(double taxRate, double price, String brand) {
        double price = price*(1+taxRate);
        this.price = price;
        this.brand = brand;
    }

    public void setPrice(double price, String brand ) {
        setPrice(0.05, price, brand)        
    }

    public void setPrice(double price) {
        setPrice(price, "null")
    }
  `
const Code = ({ children }) => (
    <SyntaxHighlighter language="java" style={far}>
        { children }
    </SyntaxHighlighter>
);

   
  return (

    <>
                <div className="widgets">
                    
                        
                        <h1>Overloading</h1>
                        
                        <p>Before in the constructor section, we have known a class can contain different constructors, although each constructor has the same name as class, they can be distinguished by their different arguments. For the other methods in the class, we can also do this. But different from the constructors using keyword “this” to call other constructor in the same class, or use keyword “super” to call the constructor in the superclass, we use the method name to call another same-name method. E.g.:
                        </p>

                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj1}</Code>
                           </pre>
                        </div>
                    
                 </div>


                
                <div className="widgets">
                
                <h3>Exercise:</h3>
                <div className = "exercise-div">
                <p className = "exercise-title">
                There is a static method to add three numbers, but now we want to calculate: add(1.0,2.0) , please write another same-name method to realize it.
                </p>
                <textarea id = "input" >

                    
                </textarea>
                <button onClick = {(e) => {submit(e)}} id = "question15" className="testbutton" >Submit</button>
               </div>       
            </div>


            
           </> 
        
  )
}

export default Overloading