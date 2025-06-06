import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import { gsap } from "gsap";
import logo from "../Assets/navbarImages/logo.png";
import cartIcon from "../Assets/navbarImages/cart.png";
import Scramble from "../Components/Scramble";
const Navbar = () => {
  useEffect(() => {
    gsap.from(".NavbarContainer", {
      opacity: 0,
      duration: 0.5,
      y: 30,
    });
  }, []);
  return (
    <div className="NavbarContainer">
      <div className="logo">
        <img src={logo} alt="COMET" className="logo" />
      </div>
      <div className="navText">
        <Scramble textLength={45}>
          <p>Good Shoes will take you to Great Places |</p>
        </Scramble>
      </div>
      <ul className="nav-links">
        <li>
          <a className="Products">Products</a>
        </li>
        <li>
          <a className="Drops">Drops</a>
        </li>
        <li>
          <a className="About-us">About-Us</a>
        </li>
      </ul>
      <div className="cartIcon">
        <img src={cartIcon} alt="CART" className="cartIcon" />
      </div>
    </div>
  );
};

export default Navbar;
