import React from 'react'
import './collection.scss';
import p1 from './p1.jpg'
import  SyntaxHighlighter  from 'react-syntax-highlighter';
import {far} from 'react-syntax-highlighter/dist/esm/styles/hljs';
//exercise 有好几道，所以直接在这里面定义 submit， 因为submit 里面的getElementById("input") 要改
const Collection = () => {
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
  ` import java.util.List

  public void MyMethod() {
      ArrayList<Integer> MyFirstList = new ArrayList<Integer>();
      MyFirstList.add(1);
      if(MyFirstList.contains(1))
      System.out.println("List contains 1!");
  
  }`
        
    const obj2 = 
  `List<Integer> MyFirstList = new ArrayList<Integer>()`
    
  const obj3 = 
  ` import java.util.HashSet
  public void MyMethod() {
      HashSet<Integer> mySet = new HashSet<Integer>()
      MyFirstSet.add(1);
      MyFirstSet.add(1);
      for(Object i: mySet)
      System.out.println(i);
      }
  }` 
  const obj4 = 
  ` import java.util.HashMap;
  HashMap<String, Boolean> MyFirstMap = new HashMap<String, Boolean>();  
   `
  const obj5 =
  ` public class Maps {
    public static void main(String args[]) {
    Map<String,Boolean> SecondHandCars = new TreeMap<String,Boolean>();
    SecondHandCars.put("aaa", true);
    for(String i : SecondHandCars.keySet()) {

        if (SecondHandCars.get(i)){
            System.out.println(i+" has been sold.");
        } else {
            System.out.println(i+" hasn't been sold.");
        }
    }
    }
  }`
  const obj7 =
  `int[][] chessBoard = new int[10][10]`

  const obj9 =
  ` String[] arr = {"I", "am", "an", "Array"};
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
  function submit1 (e) {
    console.log("hh")
    let code = document.getElementById("input1").value;
    let answerID = Number((e.target.id).replace (/[^0-9]+/g, '')); // eg: "1stQuestion" => 1
    //let answerID = "0";
    let data = { code: code };
    fetch(`/code/${answerID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((txt) => alert(txt));
  }

  function noRightAnswerSubmit (e) {
    console.log("hh")
    let code = document.getElementById("input2").value;
    //let answerID = Number((e.target.id).replace (/[^0-9]+/g, '')); // eg: "1stQuestion" => 1
    //let answerID = "0";
    let data = { code: code };
    fetch('/norightanswercode', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((txt) => alert(txt))
      
  }

  function submit3 (e) {
    console.log("hh")
    let code = document.getElementById("input3").value;
    let answerID = Number((e.target.id).replace (/[^0-9]+/g, '')); // eg: "1stQuestion" => 1
    //let answerID = "0";
    let data = { code: code };
    fetch('/norightanswercode', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((txt) => alert(txt));
  }

  function submit4 (e) {
    console.log("hh")
    let code = document.getElementById("input4").value;
    let answerID = Number((e.target.id).replace (/[^0-9]+/g, '')); // eg: "1stQuestion" => 1
    //let answerID = "0";
    let data = { code: code };
    fetch(`/code/${answerID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((txt) => alert(txt));
  }
    return (
            <>
            <div className="widgets">
                <h1>Collection</h1>
                
                <p>There are some array-similar classes in Java: List, Set and Map. But they all possess some special properties array doesn't have. </p>
                <h3 className ='small-caption'>List</h3>
                <p>
                List do not have fixed capacity, we don't need to formulate its length when we initialize it, this is different from array. The list's
                 length is dynamically float with the elements being added or deleted. It includes three subclasses:
                 ArrayList, Vector, LinkedList. These subclass implements the interface “List”. The basic syntax of using it is like this:</p>    
               <div className = "example">
               <h3>Example</h3>
               <pre className = "code" >
                <Code>{obj1}</Code>
               </pre>
               </div>
               <p>Notice the word in the angle brackets is the class the elements in the list belong to, because the element in the list must 
                be the object, so we must use the class name rather than type name for primitive types, e.g. using Integer rather than Int.</p> 
                <p>Sometimes we may see this kind of declaration:</p>


               <div className = "example">
               <h3>Example</h3>
               <pre className = "code" >
                <Code>{obj2}</Code>
               </pre>
               </div> 
               <p>
               Because ArrayList implements the List interface, and the interface can be used as the type, so we can declare an ArrayList with List type, but it is actually an ArrayList object.

               <br/>Attention: unlike array can convey elements' value when being declared, we can only use add() method to add element to ArrayList one by one.

               <br/>The accompanying method of list is also different from array:

                </p> 
                <table>
                    <tbody>
                     <tr>
                        <th style = {{width:"30%"}}>Method</th> <th style = {{width:"70%"}}>Description</th>
                     </tr>
                     <tr>
                        <td>add()</td> <td>Add element into list</td>
                     </tr>
                     <tr>
                        <td>remove()</td> <td>Remove element from list</td>
                     </tr>
                     <tr>
                        <td>contains()</td> <td>If list contains one element, return result is boolean type</td>
                     </tr>
                     <tr>
                        <td>size()</td> <td>The length of list</td>
                     </tr>
                     <tr>
                        <td>get()</td> <td>Returns elements at appointed index</td>
                     </tr>
                     <tr>
                        <td>set()</td> <td>Replace the item at the appointed index</td>
                     </tr>
                     <tr>
                        <td>indexOf()</td> <td>Returns the index of the appointed item</td>
                     </tr>
                    </tbody>
                </table>  
            </div>

            <div className="widgets">
                <h3 className ='small-caption'>Set</h3>
                <p>
                Set can only contains different items, if the user inserts an item that is the same with one existing item in the set, set won’t execute this instruction, it will reserves only the former one.
                It includes HashSet, LinkedHashSet, TreeSet. These subclass implements the interface Set. It doesn't have a fixed length either and its elements also must be object. we can also only use add() method to add element to it one by one.
                It has some same methods as list has:
                </p>
                <table>
                    <tbody>
                     <tr>
                        <th style = {{width:"30%"}}>Method</th> <th style = {{width:"70%"}}>Description</th>
                     </tr>
                     <tr>
                        <td>add()</td> <td>Add element into list</td>
                     </tr>
                     <tr>
                        <td>remove()</td> <td>Remove element from list</td>
                     </tr>
                     <tr>
                        <td>contains()</td> <td>If list contains one element, return result is boolean type</td>
                     </tr>
                     <tr>
                        <td>size()</td> <td>The length of list</td>
                     </tr>

                    </tbody>
                </table>

                 <div className = "example">
                 <h3>Example</h3>
                 <pre className = "code" >
                 <Code>{obj3}</Code>
                 </pre>
                 </div> 
             </div>

            <div className="widgets">
            <h3 className ='small-caption'>Queue</h3>
            <p>
            Queue is a first-in-first-out collection. We can't get elements by the index, we can only get the head of the sequence every time and insert an element into the tail of the sequence.

            <br/>there are two classes in Java used to implement the Queue interface: LinkedList and PriorityQueue.

            </p>
            <img src={p1} alt="QueueStrcture"></img>
            <p>Basic methods of Queue:</p>
            <table id = "thirdtable">
                    <tbody>
                     <tr>
                        <th style = {{width:"30%"}}>Method</th> <th style = {{width:"70%"}}>Description</th>
                     </tr>
                     <tr>
                        <td>add()</td> <td>Add an element at the tail of the queue. If the queue is already full, it throws the exception.</td>
                     </tr>
                     <tr>
                        <td>offer()</td> <td>Add an element at the tail of the queue. If the queue is already full, it returns false</td>
                     </tr>
                     <tr>
                        <td>poll()</td> <td>Delete the head element, if the queue is empty, returns null</td>
                     </tr>
                     <tr>
                        <td>remove()</td> <td>Delete the head element, if the queue is empty, throw the exception</td>
                     </tr>
                     <tr>
                        <td>peek()</td> <td>Get the head element, if the queue is empty, returns null</td>
                     </tr>
                     <tr>
                        <td>element()</td> <td>Get the head element, if the queue is empty, throw the exception</td>
                     </tr>
                     <tr>
                        <td>size()</td> <td>Return the size of the queue</td>
                     </tr>
                    </tbody>
                </table>

            </div>
            

            <div className="widgets">
                <h3 className ='small-caption'>Map</h3>
            <p>
            Map's element is the pair of key-value. Usually, we get the value by the key. Every key in a map is unique. We must add the key and value simultaneously. If we add a key that already exists in the map, the new key-value pair will replace the old one. It includes HashMap, LinkedHashMap, TreeMap. These subclass implements the interface Map. The basic method of the map is following:
            </p>
            <table>
                    <tbody>
                     <tr>
                        <th style = {{width:"30%"}}>Method</th> <th style = {{width:"70%"}}>Description</th>
                     </tr>
                     <tr>
                        <td>put()</td> <td>Add the new key-value pair</td>
                     </tr>
                     <tr>
                        <td>get()</td> <td>Get the value using the key</td>
                     </tr>
                     <tr>
                        <td>remove()</td> <td>Remove one pair using the key</td>
                     </tr>
                     <tr>
                        <td>values()</td> <td>Return the array of values</td>
                     </tr>
                     <tr>
                        <td>keySet()</td> <td>Return the set of keys</td>
                     </tr>
                     <tr>
                        <td>size()</td> <td>Return the size of the map</td>
                     </tr>
                    </tbody>
                </table>
            <p>The mode of declare and initialize map is like this:</p>
            <div className = "example">
                 <h3>Example</h3>
                 
                 <pre className = "code">
                 <Code>{obj4}</Code>
                 </pre>
                
            </div>
            <p>In the above example, for each pair, key is a string, value is s boolean.<br/>The example of map:
            </p>
            <div className = "example">
                 <h3>Example</h3>
                 
                 <pre className = "code">
                 <Code>{obj5}</Code>
                 </pre>
                
            </div>
            </div>

            <div className="widgets">
                
                <h3>Exercise:</h3>
                <div className = "exercise-div">
                <p className = "exercise-title">1.Create an ArrayList [1,2,3], output its length.</p>
                <textarea id = "input1" >

                    
                </textarea>
                <button onClick = {(e) => {submit1(e)}} id = "question1401" className="testbutton" >Submit</button>

                <p className = "exercise-title">2.Create a HashSet with an element in it, then test if it contains this element, output the result.</p>
                <textarea id = "input2" >

                    
                </textarea>
                <button onClick = {(e) => {noRightAnswerSubmit(e)}} id = "question1402" className="testbutton" >Submit</button>  

                <p className = "exercise-title">3.Create an queue :[1,2,3], then output the head of the queue. Then insert poll() method in your codes, and try again</p>
                <textarea id = "input3" >

                    
                </textarea>
                <button onClick = {(e) => {submit3(e)}} id = "question1403" className="testbutton" >Submit</button> 

                <p className = "exercise-title">4.Create a Map SecondHandCars:[“Ford”: 10000, “Jeep”: 20000, “Benz”:50000],then output only prices of the cars.</p>
                <textarea id = "input4" >

                    
                </textarea>
                <button onClick = {(e) => {submit4(e)}} id = "question1404" className="testbutton" >Submit</button>               
               </div>       
            </div>
        </>   

  )
  
}


export default Collection