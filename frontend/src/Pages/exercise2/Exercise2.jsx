import './home.scss';
import { useNavigate } from 'react-router-dom';
const Exercise2 = () => {

  const navigate = useNavigate();

  const transfer = (res) => {
    if (res.includes(":)")) {
      alert("You would go to the Chapter 4 to enhance your knowledge!")
      setTimeout(() => navigate('/chapter4'), 500);

    }
  }
  const submit = (e) => {
    e.preventDefault();

    const code = document.getElementById("input").value;
    const data = { code: code };


    fetch('/api/home/codehome2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.text())
      .then(res => alert(res))

    fetch('/api/home/codehome2', {
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
          <h3 >Exercise 2: </h3>
          <p>Write a class Animal, which contains private properties name, age, and public method void showInfo() outputting the animal information. Add constructors to the Animal class. Create an instance of Animal, defining its name “dog” and age “2” then output its information (don’t need to write the main method and class to run the codes, just run it directly). </p>

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
export default Exercise2