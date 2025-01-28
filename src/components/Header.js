import { LOGO_URL } from "../utils/constants";
import {useState,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";



const Header = () => {
  //subscribing to the store using selector
  const items = useSelector((store)=>store.cart.items)
  const [loginbtn,setLoginBtn] = useState("login");
  const {loggedUser} = useContext(UserContext);
  //console.log(userLogin);
    return (
      <div className="header flex justify-between py-2 bg-pink-100">
        <div className="logo-container w-40">
          <img  className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items flex m-4">
          <ul className="flex space-x-4 items-center">
            <li>Online status: {useOnlineStatus()===true?"✅":"⛌"}</li>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/about">About us</Link></li>
            <li><Link to="/cart">Cart({items.length})</Link></li>
            <li> <Link to="/contact">Contact us</Link></li>
            <li><Link to ="/grocery">Grocery</Link></li>
            <button className="login-btn" onClick={()=>{
               loginbtn==="login"? setLoginBtn("logout"):setLoginBtn("login");
            }}>{loginbtn}</button>
            <li>{loggedUser} </li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header; 