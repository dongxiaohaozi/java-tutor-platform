import './navsection.scss'
import FindReplaceOutlinedIcon from '@mui/icons-material/FindReplaceOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

const Navsection = () => {
    function a() {
    document.getElementById("covering").style.display = "block"
    document.getElementById("login-page").style.display = "flex"
  }
  return (
    <div className='navsection'>
      <div className="wrapper">
        <div className="search">
          {/* <FindReplaceOutlinedIcon/> */}
        </div>
        <div className="items">
          <div className="item">
            {/* <PublicOutlinedIcon className='icon'/> */}
          </div>
          <div className="item">
            {/* <DarkModeOutlinedIcon className='icon'/> */}
            
          </div>
        
          <div className="item">
            {/* <CampaignOutlinedIcon className='icon'/> */}
            {/* <div className="counter">1</div> */}
            
          </div>
          <div className="item">
            {/* <ChatBubbleOutlineOutlinedIcon className='icon'/> */}
            {/* <div className="counter">2</div> */}
            
          </div>
         
          <div className="item" onClick={a}>
            <img
            src='https://static.xx.fbcdn.net/assets/?revision=816167972411634&name=desktop-workplace-your-profile-icon&density=1'
            alt='avatar'
            className='avatar'
            />
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navsection