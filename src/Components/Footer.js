import React from "react";
import "../Styles/Footer.css";
import Comet from "../Assets/footerImages/COMeT.png";
import CardDisplay from "./CardDisplay";
import Scramble from "./Scramble";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="upperFooter">
          <h3> Good Shoes will take you to Great places |</h3>
          {/* <div className='deliveryoptions'>
            <div className="optionone">
              <h1>Free Delivery</h1>
              <p>Free shipping for all orders.</p>
            </div>
            <div className="optiontwo">
              <h1>Free Delivery</h1>
              <p>Free shipping for all orders.</p>
            </div>
            <div className="optionthree">
              <h1>Free Delivery</h1>
              <p>Free shipping for all orders.</p>
            </div>
          </div> */}
          <CardDisplay />
        </div>
        <div className="lowerFooter">
          <div className="upperbar">
            <div className="socialslinks">
              <h2>Our Socials</h2>
              <p className="footerminilink">// Instagram</p>
              <p className="footerminilink">// Linked In</p>
            </div>
            <div className="Aboutus">
              <h2>About-Us</h2>

              <p className="footerminilink">// About Us</p>
              <p className="footerminilink">// Garage</p>
              <p className="footerminilink">// Vault</p>
              <p className="footerminilink">// Craftsmanship</p>
            </div>
            <div className="quickLinks">
              <h2>Quick Links</h2>

              <p className="footerminilink">// Home</p>
              <p className="footerminilink">// Best Sellers</p>
              <p className="footerminilink">// Shoes</p>
              <p className="footerminilink">// Reviews</p>
              <p className="footerminilink">// Contact</p>
            </div>
          </div>
          <div className="lowerbar">
            <img src={Comet} alt="comet" draggable="false"></img>
            {/* <h1 className='cometsig'>COM<span className='onlye'>e</span>T</h1> */}
            <div className="credits">
              <p>
                © 2024, Grails Marketing Private Limited. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
