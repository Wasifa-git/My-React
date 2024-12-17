import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [loginbtn,setLoginBtn] = useState("login");
    return (
      <div className="header">
        <div className="logo-container">
          <img  className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/about">About us</Link></li>
            <li>Cart</li>
            <li> <Link to="/contact">Contact us</Link></li>
            <button className="login-btn" onClick={()=>{
               loginbtn==="login"? setLoginBtn("logout"):setLoginBtn("login");
            }}>{loginbtn}</button>
          </ul>
        </div>
      </div>
    );
  };
  export default Header; 