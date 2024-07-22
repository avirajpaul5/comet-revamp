import React from "react";
import "../Styles/Navbar.css";
import logo from "../Assets/navbarImages/logo.png";
import cartIcon from "../Assets/navbarImages/cart.png";
const Navbar = () => {
  return (
    <div className="NavbarContainer">
      <div className="logo">
        <img src={logo} alt="COMET" className="logo" />
      </div>
      <div className="navText">
        <p>Good Shoes will take you to Great Places | </p>
      </div>
      <ul className="nav-links">
        <li><a className='Men'>Men</a></li>
        <li><a className='Women'>Women</a></li>
        <li><a className='Drops'>Drops</a></li>
        <li><a className='About-us'>About-Us</a></li>
      </ul>
      <div className="cartIcon">
        <img src={cartIcon} alt="CART" className="cartIcon" />
      </div>
    </div>
  );
};

export default Navbar;
