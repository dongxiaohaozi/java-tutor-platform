import React from 'react'
import './constructor.scss'
import  SyntaxHighlighter  from 'react-syntax-highlighter';
import {far} from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Constructor = ({submit}) => {
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
  ` public SecondHandCar(String brand, double KilometerTraveled, int id) {
    this.brand = brand;
    this.KilometerTraveled = KilometerTraveled;
    this.id = id
    }

    SecondHandCar car1 = new SecondHandCar("VW", 1000.0, 0001)`
    const obj2 =
  ` public SecondHandCar(String brand, double KilometerTraveled, int id) {
        this.brand = brand;
        this.KilometerTraveled = KilometerTraveled;
        this.id = id
    }
    
    public SecondHandCar(String brand, double KilometerTraveled) {
        this(brand, 0, ++nextId);
    }
    // nextId has value, its initial value is 0000, is incremented by 1 every time a object created
    public SecondHandCar () {
        this("notknown",0.0, ++nextId );
    }
    SecondHandCar car1 = new SecondHandCar("VW", 1000.0, 0001)
    SecondHandCar car1 = new SecondHandCar("VW", 1000.0)
    SecondHandCar car1 = new SecondHandCar()
   `
   const obj3 = 
  ` public SecondHandCar() {
    this.brand = null;
    this.KilometerTraveled = 0.0;
    this.id = 0;
  }`
  const Code = ({ children }) => (
    <SyntaxHighlighter language="java" style={ far}>
        { children }
    </SyntaxHighlighter>
  );
   
  return (

    <>
                <div className="widgets">
                    
                        
                        <h1>Constructor</h1>
                        
                        <p>Usually, different object of same class has different field values, such as a class of second-hand car,
                             every object of this class represents a car with different brand, fuel consumption per kilometer, 
                             and kilometers traveled. <br/>

                            Constructor is a special method, it serves for the initialization of an object. Sometimes, we want to construct
                             an object with some determined field value, we want to just make sure these values when initializing the object. 
                             At this time, we use constructor.<br/>

                            Constructor is inside the class, its name is same as the class name(its initial letter is also uppercase), it is 
                            automatically called when we create new object, just like passing parameter to a method, we put our desired attribute 
                            value of this object into the braces of initialization statement.
                        </p>

                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj1}</Code>
                           </pre>
                        </div>
                    
                 </div>


                <div className="widgets">
              
                    
                <p>Before we mentioned setter, what's the difference of setter and constructor? Setter has to be called, for constructor, 
                    when create an object, constructor is invoked automatically, constructor is more convenient when assign values of object attributes, 
                    but it cannot alter or change the values of this object attributes.</p>

               <p>It is allowed a class contains more than one constructor with each constructor taking different parameters, using 
               which constructor is decided on the argument, java will match the constructor with same format of argument when creating 
               the object.</p>

               <p>When we define the constructors in the same class, we could use keyword “this” to mention the constructor already defined.
                </p>

                <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj2}</Code>
                           </pre>
                </div>
	                      
                <p>
                If we do not define the constructor, the compiler will define one default constructor, which initialized the object with the default attribute values. 
                A default constructor is equivalent to this:
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
                <p className = "exercise-title">
                There is a class named People, it contains an attribute named “country”, 
                create an instance of People class, 
                initialize its “country” value as “British”,then output this object's country value.(A:British) 
                </p>
                <textarea id = "input" >

                    
                </textarea>
                <button onClick = {(e) => {submit(e)}} id = "question12000" className="testbutton" >Submit</button>
               </div>       
            </div>


            
           </> 
        
  )
}

export default Constructor