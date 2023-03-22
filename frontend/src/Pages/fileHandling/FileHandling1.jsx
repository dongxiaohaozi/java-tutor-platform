import React from 'react'
import './fileHandling.scss';
import  SyntaxHighlighter  from 'react-syntax-highlighter';
import {far} from 'react-syntax-highlighter/dist/esm/styles/hljs';
const FileHandling = ({submit}) => {
   
    const obj1 = 
  `  import java.io.File;
  import java.io.IOException;// handle creating and writing errors
  import java.io.FileNotFoundException; // handle reading errors
  import java.util.Scanner;
  
  public class File {
      public static void main(String[] args) {

  /////////////////////// create new file ///////////////////////

      try {
          File fileOperator = new File("name.txt");
          if (fileOperator.createNewFile()) { 
            System.out.println("File created: ");
          } else {
            System.out.println("File already exists.");
          }
      } catch (IOException e) {
          System.out.println("An error occurred.");
          e.printStackTrace();
        }

  /////////////////////// write to file ///////////////////////

      try {
          FileWriter fileWriter = new FileWriter("name.txt");
          fileWriter.write("");
          fileWriter.close(); // don't forget to use close() method, it's mandatory.
          System.out.println("Successfully wrote to the file.");
      } catch (IOException e) {
          System.out.println("An error occurred.");
          e.printStackTrace();
        }
      
      
  /////////////////////// read file /////////////////////////// 
      
      try {
          File fileOperator = new File("filename.txt");
          Scanner reader = new Scanner(fileOperator);
          while (reader.hasNextLine()) {
            String text = reader.nextLine();
            System.out.println(text);
          }
          reader.close();
      } catch (FileNotFoundException e) {
          System.out.println("An error occurred.");
          e.printStackTrace();
        }
      
  /////////////////////// delete file ///////////////////////////

        File fileOperator = new File("filename.txt"); 
        if (myObj.delete()) { 
          System.out.println("Deleted the file successfully ");
        } else {
          System.out.println("Failed to delete the file.");
        } 
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
                    
                        
                        <h1>Java file handling</h1>
                        
                        <p>
                        Use File class to create the file, with its method createNewFile(). 
                        </p>
                        <p>
                        Use FileWriter class to write to the file, with its methods write() and close().
                        </p>
                        <p>
                        Use Scanner class to read the file, together with some methods, aiming for different type of file, we use different methods, for text file, we use hasNextLine(), nextLine() and close(), for other files storing other types of data, just replace "Line" with the data type, such as hasNextDouble() and nextDouble(). Please go to “input” section to see specifics.
                        </p>
                        <p>
                        Use delete() method to delete the file.
                        </p>
                        <p>
                        Here is the example:
                        </p>
                        <div className = "example">
                          <h3>Example</h3>
                           <pre className = "code" >
                              <Code>{obj1}</Code>
                           </pre>
                        </div>
                    
                 </div>

            
           </> 
        
  )
}

export default FileHandling