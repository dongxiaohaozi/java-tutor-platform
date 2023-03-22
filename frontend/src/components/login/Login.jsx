import "./login.scss"

const Login = ({login,register,timerContent}) =>{
    const [showSlider, setShowSlider] = useState(false)

    const resultClick = (e)=>{
        if (e==0) {
        console.log('成功');
        login(document.getElementsByClassName("username").value, document.getElementsByClassName("password").value)
        setTimeout(() => {
         setShowSlider(false)
        }, 600);
          
        }else if(e==1){
         console.log('失败');
        }
     }
   return(
    <div id = "login-page">
        <div onClick = {() => {document.getElementById("login-page").style.display = "none";document.getElementById("covering").style.display = "none"}}
             className = "close-btn">
            <a ><i className="fa fa-times-circle" aria-hidden="true"></i></a>
        </div>
        <div className = "login-title">
            Log in
        
        </div>


        <div className = "login-form">
            
                <div className = "login-input">
                {/* <label>User Name:</label> */}
                <input id = "name" className ="username" type = "text"  placeholder="username"/>
                
                </div>
                

                <div className = "login-input">
                {/* <label>Password: </label> */}
                <input id = "passport" className = "password" type = "password"  placeholder="password"/>
               
                </div>
                <div id = "reminder">{timerContent}</div>
                <div className="login-btn-div">
                <button className = "login-btn" id = "login" 
                       onClick={()=> setShowSlider(true)}>
                    Log in
                </button>
                <button className = "register" id = "register"
                        onClick={()=> register(document.getElementsByClassName("username").value, document.getElementsByClassName("password").value)}>
                    register
                </button>
                <Slider showSlider={showSlider} resultClick={resultClick}></Slider>
                </div>
           
        </div>

    </div>

   ) 
}

export default Login


