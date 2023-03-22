import './sidebar.scss'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useState } from "react";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
const Sidebar = ({changepage}) => {


    const [toturiallistshow, setToturiallistshow] = useState(true)
    const [exerciselistshow, setExerciselistshow] = useState(true)
    function hidetutorial() {
        console.log(1111)
        if (toturiallistshow) {
            setToturiallistshow(false)
        } else {
            setToturiallistshow(true)
        }

    }

    function hideexercise() {
        if (exerciselistshow) {
            setExerciselistshow(false)
        } else {
            setExerciselistshow(true)
        }

    }


    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">
                    A Java Tutor
                </span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>

                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className='icon' />
                            <span>HomePage</span>
                        </li>
                    </Link>

                    <p className="title" onClick={() => hidetutorial()} >TUTORIAL CONTENT</p>
                    <div id="tutoriallist" onClick = {(e)=> changepage(e)} style={{ display: toturiallistshow ? "block" : "none" }}>
                        <Link to="/introduction" style={{ textDecoration: "none" }}>
                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>Introduction</span>
                            </li>
                        </Link>

                        <Link to="/chapter1" style={{ textDecoration: "none" }}>
                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>1.Variables</span>
                            </li>
                        </Link>

                        <Link to="/chapter2" style={{ textDecoration: "none" }}>
                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>2.Operators and Expressions</span>
                            </li>
                        </Link>
                        <Link to="/chapter3" style={{ textDecoration: "none" }}>

                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>3.Java Methods</span>
                            </li>
                        </Link>
                        <Link to="/chapter4" style={{ textDecoration: "none" }}>

                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>4.Java Classes and Objects</span>
                            </li>
                        </Link>
                        <Link to="/chapter5" style={{ textDecoration: "none" }}>

                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>5.Java Constructors</span>
                            </li>
                        </Link>
                        <Link to="/chapter6" style={{ textDecoration: "none" }}>

                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>6.Java Modifiers</span>
                            </li>
                        </Link>
                        <Link to="/chapter7" style={{ textDecoration: "none" }}>

                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>7.Java Packages</span>
                            </li>
                        </Link>
                        <Link to="/chapter8" style={{ textDecoration: "none" }}>

                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>8.Java Conditional Statement</span>
                            </li>
                        </Link>
                        <Link to="/chapter9" style={{ textDecoration: "none" }}>

                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>9.Java Abstraction</span>
                            </li>
                        </Link>

        
                   
     

                        {/*---------------------------------------------*/}
                        <Link to="/encapsulation" style={{ textDecoration: "none" }}>
                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>10.Encapsulation</span>
                            </li>
                        </Link>
                        <Link to="/inputandoutput" style={{ textDecoration: "none" }}>
                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>11.Input, output and main method</span>
                            </li>
                        </Link>
                        <Link to="/constructor" style={{ textDecoration: "none" }}>
                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>12.More Constructor</span>
                            </li>
                        </Link>
                        <Link to="/arrays" style={{ textDecoration: "none" }}>
                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>13.Arrays</span>
                            </li>
                        </Link>
                        <Link to="/collections" style={{ textDecoration: "none" }}>
                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>14.Collections</span>
                            </li>
                        </Link>
                        <Link to="/overloading" style={{ textDecoration: "none" }}>
                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>15.Overloading</span>
                            </li>
                        </Link>
                        <Link to="/inheritance" style={{ textDecoration: "none" }}>
                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>16.Inheritance</span>
                            </li>
                        </Link>
                        <Link to="/substitutability" style={{ textDecoration: "none" }}>
                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>17.Substitutability</span>
                            </li>
                        </Link>
                        <Link to="/methods" style={{ textDecoration: "none" }}>
                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>18. More Methods</span>
                            </li>
                        </Link>
                        <Link to="/overriding" style={{ textDecoration: "none" }}>
                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>19.Overriding</span>
                            </li>
                        </Link>
                        <Link to="/lateBinding" style={{ textDecoration: "none" }}>
                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>20.Late binding</span>
                            </li>
                        </Link>
                        <Link to="/fileHandling" style={{ textDecoration: "none" }}>
                            <li>
                                <TaskAltOutlinedIcon className='icon' />
                                <span>21.Java file handling</span>
                            </li>
                        </Link>
                    </div>

                    {/*-------------------------------------*/}






                    <p className="title" onClick={() => hideexercise()} >EXERCISE SECTION</p>
                    <div style={{ display: exerciselistshow ? "block" : "none" }}>
                    <Link to="/exercise1" style={{ textDecoration: "none" }}>

                        <li>
                            <QuizOutlinedIcon className='icon' />
                            <span>exercise 1</span>
                        </li>
                    </Link>
                    <Link to="/exercise2" style={{ textDecoration: "none" }}>

                        <li>
                            <QuizOutlinedIcon className='icon' />
                            <span>exercise 2</span>
                        </li>
                        </Link>
                        <Link to="/exercise3" style={{ textDecoration: "none" }}>


                        <li>
                            <QuizOutlinedIcon className='icon' />
                            <span>exercise 3</span>
                        </li>
                        </Link>
                        <Link to="/exercise4" style={{ textDecoration: "none" }}>

                        <li>
                            <QuizOutlinedIcon className='icon' />
                            <span>exercise 4</span>
                        </li>
                        </Link>
                        <Link to="/exercise5" style={{ textDecoration: "none" }}>

                        <li>
                            <QuizOutlinedIcon className='icon' />
                            <span>exercise 5</span>
                        </li>
                        </Link>
                    </div>



                    {/* <p className="title">USER</p>
                    <li>
                        <AccountCircleIcon className='icon' />
                        <span>Users</span>
                    </li>

                    <li>
                        <PersonAddIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className='icon' />
                        <span>Logout</span>
                    </li> */}


                </ul>
            </div>

        </div>

    )
}

export default Sidebar