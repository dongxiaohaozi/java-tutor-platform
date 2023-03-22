import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navsection from '../../components/navbar/Navsection';
import { useNavigate } from 'react-router-dom';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { far } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Exercise5 = () => {


  const obj100 =
    `
1+2=3
    `

  const Code = ({ children }) => (
    <SyntaxHighlighter language="java" style={far}>
      {children}
    </SyntaxHighlighter>
  );

  const navigate = useNavigate();

  const transfer = (res) => {
    if (res.includes(":)")) {
      alert("You would go to the Chapter Introduction to enhance your knowledge!")
      setTimeout(() => navigate('/introduction'), 500);

    }
  }
  const submit = (e) => {
    e.preventDefault();

    const code = document.getElementById("input").value;
    const data = { code: code };


    fetch('/api/home/codehome5', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.text())
      .then(res => alert(res))




    fetch('/api/home/codehome5', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      // .then(ans=>{
      //   document.getElementById("hint").style.display="block"
      //   document.getElementById("hint").innerText=ans.getkey()

      // })
      .then(res => { transfer(res) })

  }

  return (
    <div className='home'>

      <div className="homecontainer">
     
    

        <div className="widgets">
        <div className = "exercise-div">

          <h3 >Exercise5: </h3>
          <p>Please try to output the below putput by using the basic Syntax (System.out.println())</p>
          <pre className="code" >
              <Code>{obj100}</Code>
            </pre>

          <form onSubmit={(e) => { submit(e) }}>
            <textarea
              class="input shadow"
              name="name"
              rows="15"
              cols="100"
              placeholder="please enter your Java code here:"


              style={{ marginTop: "10px", width: "400px", height: "200px" }} type="text" id="input" ></textarea>
            <button className="btn btn-primary" style={{ marginLeft: "10px" }} id="button" type="submit">submit</button>
          </form>
        </div>
        </div>
 

      </div>

    </div>
  )
}

export default Exercise5