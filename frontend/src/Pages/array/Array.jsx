import './array.scss';
import React from 'react';
import p1 from './p1.jpg';
import  SyntaxHighlighter  from 'react-syntax-highlighter';
import {far} from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Array = ({submit}) => {

  function submit (e) {
    console.log("hh")
    let code = document.getElementById("input").value;
    let answerID = Number((e.target.id).replace (/[^0-9]+/g, '')); // eg: "1stQuestion" => 1
console.log(answerID);
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
  `int[] myFirstArray`
        
  const obj2 = 
  `int[] myFirstArray = new int[10]`
    
  const obj3 = 
  `int[] myFirstArray = {1,2,3,4,5}` ;
  const obj4 = 
  `int[] myFirstArray = {1,2,3,4,5}
System.out.prinln(myFirstArray[0])// print 1`
  const obj5 =
  `int[] myFirstArray = {1,2,3,4,5}`
  const obj6 =
  `int[] myFirstArray = {1,2,3,4,5}
int[] mySecondArray = myFirstArray
myFirstArray[0] = -1
System.out.println(mySecondArray[0])`
  const obj7 =
  `int[][] chessBoard = new int[10][10]`

  const obj9 =
  `String[] arr = {"I", "am", "an", "Array"};
for (int i = 0; i < cars.length; i++) {
    System.out.println(arr[i]);
  } 
for (String i : arr) {
    System.out.println(i);
  }`

  const obj8 =
  `int i = 0; i < cars.length; i++`

  const Code = ({ children }) => (
    <SyntaxHighlighter language="java" style={ far}>
        { children }
    </SyntaxHighlighter>
);
    return (
      <>
      <div className="widgets">
          <h1>Array</h1>
          
          <p>An array is a collection of values/objects of the same type/class. Array is defined as follows: </p>
              
         <div className = "example">
         <h3>Example</h3>
         <pre className = "code">
          <Code>{obj1}</Code>
         </pre>
         {/* <Highlight language={java}>{obj1}</Highlight> */}
         </div>
         <p>In front of the square brackets, we need to give the type of elements in the array, then followed by the array name. 
          Usually, we bind the declaration with the initialization of array into one statement:</p> 

         <div className = "example">
         <h3>Example</h3>
         <pre className = "code" >
          <Code>{obj2}</Code>
         </pre>
         </div>    
      </div>

      <div className="widgets">
      <p>
          All the array elements are set to be the default value, which is 0 for the primitive variables, 
          null for reference variables, false for the Boolean variables. 
          </p>
          <p>
          Similar to the initialization of an object, we use the keyword new to remind the compiler allocate memory to the initialized array.
           But one difference with object is we have to fill in a number in the square brackets, it represents the length of the array. 
           Besides, if we want to get the length of an array, we just use myFirstArray.length rather than myFirstArray.length(). 
           length()  is a method for string, length is a field for the array. 
           </p>
           <p>
           If we want to assign values to elements of array, we can code like this:
           </p>


           <div className = "example">
           <h3>Example</h3>
           <pre className = "code" >
           <Code>{obj3}</Code>
           </pre>
           </div> 

          <p>
          Array elements are assessed by their index, this index begins at 0, and added 1 successively from left to right:
          </p>
          <div className = "example">
           <h3>Example</h3>
           
           <pre className = "code">
           <Code>{obj4}</Code>
           </pre>
          
          </div>
       </div>

      <div className="widgets">
      <p>
      Array is reference variable, which means the variable itself does not store the value in the memory, 
      it references another object in the memory. 
      </p>
      <div className = "example">
           <h3>Example</h3>
           <img style = {{width: "30%",height:"30%"}} src={p1} alt="arrayReferencing"></img>
           <div className = "code">
             <pre>
             <Code>{obj5}</Code>
             </pre>
             
             <pre>
             <Code>{obj6}</Code>
             </pre>

           </div> 
           
      </div>
      <p>
      Above codes will output -1, because when make mySecondArray = myFirstArray, it actually makes mySecondArray reference the object the myFirstArray references, two arrays reference the same object, when the element value of myFirstArray is changed, 
      the referenced value also changed, making the mySecondArray's reference value changed.
      </p>
      </div>
      

      <div className="widgets">
      <p>
      A 2D array means an array with each element being a array, it is declared and initialized like this :
      </p>
      <div className = "example">
           <h3>Example</h3>
           
           <pre className = "code">
           <Code>{obj7}</Code>
           </pre>
          
      </div>
      <p>we can locate the grid in the second line and the fifth column by chessboard[1][4].</p>
      </div>
      <div className="widgets">
          <p>
          In Java, if we want to loop through an array, besides using the traditional <pre><code>{obj8}</code></pre>
          statement to access element by index, we can also use a more convenient way:
          </p>
          <div className = "example">
           <h3>Example</h3>
           
           <pre className = "code">
           <Code>{obj9}</Code>
           </pre>
          
          </div>
      </div>

            <div className="widgets">
                
                <h3>Exercise:</h3>
                <div className = "exercise-div">
                <p className = "exercise-title">Create an array including 1-5, output every element of this array.</p>
                <textarea id = "input" >

                    
                </textarea>
                <button onClick = {(e) => {submit(e)}} id = "1" className="testbutton" >Submit</button>
               </div>       
            </div>
        </>   

  )
  
}


export default Array