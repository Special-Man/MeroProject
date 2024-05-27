import {useNavigate} from "react-router-dom";
import Virinchipng from "../../assets/Virinchipng.png";

const Header = () =>{
  const navigate = useNavigate();

  const logout = () =>{
  
    alert("logout");
    localStorage.removeItem('isLogin');
    navigate('/')
  }
    return(
      // dfcwefdd
        <div>
          <header> 
        <div class="header1">
        Mero Entertainment
        {/* <div>
          <img className="Logo" src={Virinchipng}/>
        </div> */}
        
      <button class = "logout" id="btn2" onClick={logout}>Log Out</button>
        </div> 
        </header>
        </div>
    )
};
export default Header;