import './home.scss';
import { useNavigate } from 'react-router-dom';
const Exercise1 = () => {

  const navigate = useNavigate();

  const transfer = (res) => {
    if (res.includes(":)")) {
      alert("You would go to the Chapter Array to enhance your knowledge!")
      setTimeout(() => navigate('/arrays'), 500);

    }
  }
  const submit = (e) => {
    e.preventDefault();

    const code = document.getElementById("input").value;
    const data = { code: code };


    fetch('/api/home/codehome1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(res => res.text())
      .then(res => alert(res))

    fetch('/api/home/codehome1', {
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
          <h3 >Exercise 1: </h3>
          <p>There is an array [4,2,1,3,5], please design a function to rank the elements in it in ascending order by Bubble Sort method and output the new array. </p>

          <form onSubmit={(e) => { submit(e) }}>
            <textarea
              class="input shadow"
              name="name"
              rows="15"
              cols="100"
              placeholder="please enter your Java code here:"
              style={{ marginTop: "10px", width: "500px", height: "300px" }} type="text" id="input" ></textarea>
            <button className="btn btn-primary" style={{ marginLeft: "10px" }} id="button" type="submit">submit</button>
          </form>
        </div>
        </div>
      </div>
    </div>
  )
}
export default Exercise1