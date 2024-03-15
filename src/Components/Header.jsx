import React from 'react';
import '../Styles/Header.scss';
import logo from "../Assests/brand_logo.png";

const Header = () => {
  return (
    <nav>
        <img src={logo} />
        <div>
            <ul>
                <li>MENU</li>
                <li>LOCATION</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </div>
        <button>Login</button>
    </nav>
  )
}

export default Header;