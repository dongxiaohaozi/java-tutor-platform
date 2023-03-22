import './home.scss';
import { useNavigate } from 'react-router-dom';



const Exercise4 = () => {


  const inputdefault =
    `    
    public class Pencil {
      int length;
    
      public Pencil(int cm) {
        //put your code here//
      }
    }    
  Pencil newPencil = new Pencil(20);     
  System.out.println(newPencil.length);
    `



  const navigate = useNavigate();

  const transfer = (res) => {
    if (res.includes(":)")) {
      alert("You would go to the Chapter 5 to enhance your knowledge!")
      setTimeout(() => navigate('/chapter5'), 500);

    }
  }
  const submit = (e) => {
    e.preventDefault();

    const code = document.getElementById("input").value;
    const data = { code: code };


    fetch('/api/home/codehome4', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.text())
      .then(res => alert(res))




    fetch('/api/home/codehome4', {
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

          <h3 >Exercise 4: </h3>
          <p>1.Create a class called “Pencil” with an integer attribute called“length”.</p>



<p>2.Create a constructor with a parameter called "cm".
</p>
<p>3.Then create an object called “newPencil” with parameter value: “20”.
</p>
<p>4.Then use the main method of this class to output newPencil's length value.</p>

        

          <form onSubmit={(e) => { submit(e) }}>
            <textarea
              class="input shadow"
              name="name"
              rows="15"
              cols="100"
              defaultValue = {inputdefault}


              style={{ marginTop: "10px", width: "800px", height: "400px" }} type="text" id="input" ></textarea>
            <button className="btn btn-primary" style={{ marginLeft: "10px" }} id="button" type="submit">submit</button>
          </form>
        </div>
        </div>
 

      </div>

    </div>
  )
}

export default Exercise4