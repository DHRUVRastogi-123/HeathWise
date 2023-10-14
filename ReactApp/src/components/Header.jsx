import React from "react";
import { Link } from 'react-router-dom';
import Conditions from "./Conditions";
import Drugs from "./Drugs";

function Header() {
  return (
    <header>
      <div className="nav-left">
      <h1>Health<span>Wise</span></h1>
      <ul>  
        <div>
        <li>
          Conditions
          <Conditions />
        </li>
        </div>
        <div>
        <li>Drugs & Supplements
          <Drugs />
        </li>
        </div>
        <div>
        <li><Link to="/">Health Bot</Link></li>
        </div>
        <div>
        <li>News</li>
        </div>
      </ul> 
      </div> 
      <div className="nav-right">
      <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
        <li>Signin</li>
        <li>Signup</li>
        <li>Contact Us</li>
        <li>About Us</li>
      </ul>
      </div>  
    </header>
  );
}

export default Header;