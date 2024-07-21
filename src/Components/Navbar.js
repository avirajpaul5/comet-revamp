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
      <div className="navLinks">
        <p>Men</p>
        <p>Women</p>
        <p>Drops</p>
        <p>About Us</p>
      </div>
      <div className="cartIcon">
        <img src={cartIcon} alt="CART" className="logo" />
      </div>
    </div>
  );
};

export default Navbar;
