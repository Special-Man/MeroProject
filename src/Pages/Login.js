import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ViPassInput from "../components/ViPassInput";
import ViTextInput from "../components/ViTextInput";
import ViMessage from "../components/ViMessage";
import Header from "./Theme/Header";
import {Outlet} from "react-router-dom";


const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    //let errorMsg = document.getElementById("error")
  
    const handleInputChange = (event) => {
      if(event.target.name === 'email') {
        setEmail(event.target.value);
      }
      if(event.target.name === 'password') {
        setPassword(event.target.value);
      }
    }
    const doLogin = (e) => {
      let isLogin = false;
      if(email === "Bishesh" && password === "admin") {
        isLogin = true;
      }
  
      if(isLogin) {
        localStorage.setItem('isLogin','1');
        navigate('/Pages/UserManagement');
      } else {
setErrorMessage("This username or password is incorrect. YOU SHALL NOT PASS!");

      }
    }
useEffect(() => {
    const isLogin = localStorage.getItem('isLogin');
    if(isLogin === '1'){
        navigate('/');
        console.log("Login component Mounted");
    }
},[])
    return(
        <div>
          <header> 
        <div class="header1">
        Mero Entertainment
        {/* <div>
          <img className="Logo" src={Virinchipng}/>
        </div> */}
      
        </div> 
        </header>

          <div class="logbod">        
          <Outlet/>
{/* begin */}

          <div class="box">
            <h1>Login:</h1>

            <form method="post" action="index.html">


{errorMessage && <ViMessage message = {errorMessage}/>}

<ViTextInput 
        title="Username: " 
        name="email" 
        placeholder="Your Username😀"
        class="email"
        handleInputChange={handleInputChange}
        value={email} />


<ViPassInput 
        title="Password:  " 
        name="password" 
        placeholder="Your Password 🤐"

        handleInputChange={handleInputChange}
        class="email"
        value={password} />
{/* <Link to="/pages/UserManagement"> */}
<div class="btn-l" onClick={doLogin}>Sign In</div>
            {/* </Link> */}

  

</form>
</div>
{/* End */}

         </div>
          
            
        </div>
    )
}

export default Login;