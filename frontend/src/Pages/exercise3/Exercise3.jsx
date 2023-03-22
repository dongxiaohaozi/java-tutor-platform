import './home.scss';
import { useNavigate } from 'react-router-dom';
const Exercise3 = () => {

  const navigate = useNavigate();

  const transfer = (res) => {
    if (res.includes(":)")) {
      alert("You would go to the Chapter 9 to enhance your knowledge!")
      setTimeout(() => navigate('/chapter9'), 500);

    }
  }
  const submit = (e) => {
    e.preventDefault();

    const code = document.getElementById("input").value;
    const data = { code: code };


    fetch('/api/home/codehome3', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.text())
      .then(res => alert(res))

    fetch('/api/home/codehome3', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => { transfer(res) })

  }

  return (
    <div className='home'>

      <div className="homecontainer">
        <div className="widgets">
        <div className = "exercise-div">
          <h3 >Exercise 3: </h3>
<p>Write the interface Shape, which contains the symbolic constant PI = 3.14 and the abstract method getArea(). Define two ordinary classes Rectangle and Circle, both of which require the declaration of the Shape interface. Override the getArea() method in the Rectangle class to obtain and output the area of the rectangle, and overwrite the getArea() method in the Circle class to obtain and output the area of the circle. Instances of two classes are defined, the side length of the rectangle is input 4 and 6, the input radius value of the circle is 3, and the respective areas are calculated and output (don’t need to write the main method and class to run the codes, just run it directly). </p>       

          <form onSubmit={(e) => { submit(e) }}>
            <textarea
              class="input shadow"
              name="name"
              rows="15"
              cols="100"
              placeholder="please enter your Java code here:"
              style={{ marginTop: "10px", width: "800px", height: "400px" }} type="text" id="input" ></textarea>
            <button className="btn btn-primary" style={{ marginLeft: "10px" }} id="button" type="submit">submit</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Exercise3