import './fixedlayout.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navsection from '../../components/navbar/Navsection';
import Login from "../../components/login/Login";
import { Outlet } from "react-router-dom"
const FixedLayout = ({login, register, timerContent,changepage}) => {
  
  return (
    <>
    
    <div className='home'>
        <Sidebar 
changepage= {(e) =>changepage(e)}

/>
        <div className="homecontainer">
            <Navsection  />
            <Login login={(username, password)=> login(username, password)} register = {(username, password)=> register(username, password)} timerContent = {timerContent}/>
            <Outlet />
        </div>        
    </div>
    <div id="covering"></div>
    </>
  )
}

export default FixedLayout
