import './encapsulation.scss';
import React from 'react';
import  SyntaxHighlighter  from 'react-syntax-highlighter';
import {far} from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Encapsulation = ({submit}) => {

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
  ` private class Person {
        int phoneNumber; 
        
        public int getPhoneNumber() {
          return phoneNumber;
         }
        
        public void setPhoneNumber(int phoneNumber) {
          this.phoneNumber = phoneNumber;
        }
  }`
    const obj2 = 
  ` public int getPhoneNumber (Person name) {
    if (name.identify == "employee") {
        return this.phoneNumber;
    }
  }`
    
  const obj3 = 
  ` public void setPhoneNumber(int phoneNumber) {
    String phoneStr = Integer.toString(phoneNumber);
         if(phoneStr.length() == 12) {
             this.phoneNumber = phoneNumber;
        }
  }` 
  const inputdefault  = 
  `
  public class Main {
    public static void main(String[] args) {
      Animal dog = new Animal();
      myObj.setName("dog");
      System.out.println(myObj.getName());
    }}
  class Animal{
      private String name;
  
      public String getName() {
          
      }
  
      public void setName(String name) {
          
      }
  }
  ` 
  const Code = ({ children }) => (
    <SyntaxHighlighter language="java" style={ far}>
        { children }
    </SyntaxHighlighter>
  );
    return (
            <>
            <div className="widgets">
                <h1>Encapsulation</h1>
                
                <p>The objects' field value can not be seen and assessed directly by other objects, 
                    those fields are wrapped up into class, isolated with the outside codes, 
                    that's why it is called encapsulation. The only way to assess the field values is 
                    by calling two kinds of methods— setter and getter. </p>
                    

                    
            
               <p>The <strong>setter </strong>is for setting the value of the field, the <strong>getter </strong> is for getting their value. 
                In below example, <i>getPhoneNumber</i> is getter, <i>setPhoneNumber</i> is setter. Usually, 
                the getter directly returns the required value, the getter assigns the parameter's value to the field.</p>
               <div className = "example">
               <h3>Example</h3>
               <pre className = "code" >
                <Code>{obj1}</Code>
               </pre>
               </div> 
            </div>

            <div className="widgets">
                <h3>So what are the benefits of the encapsulation? </h3>
                <p>
                Encapsulation protects the data from unauthorized access, after learning the modifier section, 
                we have known the modifier <i>private</i> restricts the variable and the function can not be 
                assessed and invoked from anywhere outside the class. If we make the field private, with the use of setter and getter, 
                then the field can only be assessed with setter and getter,
                 we could add some logic verification before returning the value in the getter.
                </p>
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
                <div className = "example">
                <h3>Example</h3>
                <pre className = "code" >
                <Code>{obj3}</Code>
                </pre>
                </div>    
            </div>

            <div className="widgets">
                
                <h3>Exercise:</h3>
                <div className = "exercise-div">
                <p className = "exercise-title">finish the following codes to make system print dog's name: dog.</p>
                <textarea id = "input" defaultValue = {inputdefault}>

                    
                    </textarea>
                <button onClick = {(e) => {submit(e)}} id = "question10" className="testbutton" >Submit</button>
                </div>   
                    
                    
               
            </div>
        </>   

  )
  
}


export default Encapsulation
