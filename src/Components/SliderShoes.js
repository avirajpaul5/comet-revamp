import React from "react";
import "../Styles/SliderShoes.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import slider1 from "../Assets/sliderImages/slider1.png";
import slider2 from "../Assets/sliderImages/slider2.png";
import slider3 from "../Assets/sliderImages/slider3.png";
import slider4 from "../Assets/sliderImages/slider4.png";
import slider1hover from "../Assets/sliderImages/slider1hover.png";
import slider2hover from "../Assets/sliderImages/slider2hover.png";
import slider3hover from "../Assets/sliderImages/slider3hover.png";
import slider4hover from "../Assets/sliderImages/slider4hover.png";
import Scramble from "./Scramble";

const SliderShoesSection = () => {
  useGSAP(() => {
    gsap.from(".bgText", {
      opacity: 0,
      scrub: 2,
      duration: 7,
      scrollTrigger: {
        trigger: ".bgText",
        scroller: "body",
        start: "top 30%",
        end: "top -140%",
        scrub: true,
      },
    });
    gsap.to(".bgText", {
      y: -190,
      yoyo: true,
      scrollTrigger: {
        trigger: ".bgText",
        scroller: "body",
        start: "top 0%",
        end: "top -140%",
        delay: 1,
        duration: 7,
        scrub: true,
      },
    });
    gsap.to(".cardsContainer", {
      transform: "translateY(-237%)",
      scrollTrigger: {
        trigger: ".mainSliderContainer",
        scroller: "body",
        start: "top top",
        end: "top -180%",
        scrub: 3,
        pin: true,
      },
    });
  });

  return (
    <div className="mainSliderContainer">
      <div id="parallax-bg-3" className="cardsContainer">
        <div id="bg-3-1" className="sliderCards">
          <img src={slider1} className="defaultImg" alt="Slider 1"></img>
          <img
            src={slider1hover}
            className="imgOnHover"
            alt="Slider 1 Hover"
          ></img>
        </div>
        <div id="bg-3-2" className="sliderCards">
          <img src={slider2} className="defaultImg" alt="Slider 2"></img>
          <img
            src={slider2hover}
            className="imgOnHover"
            alt="Slider 2 Hover"
          ></img>
        </div>
        <div id="bg-3-3" className="sliderCards">
          <img src={slider3} className="defaultImg" alt="Slider 3"></img>
          <img
            src={slider3hover}
            className="imgOnHover"
            alt="Slider 3 Hover"
          ></img>
        </div>
        <div id="bg-3-4" className="sliderCards">
          <img src={slider4} className="defaultImg" alt="Slider 4"></img>
          <img
            src={slider4hover}
            className="imgOnHover"
            alt="Slider 4 Hover"
          ></img>
        </div>
      </div>
      <div id="parallax-bg-2" className="bgText">
        <p id="small">Cushy Foamy Goodness</p>
          <p id="big">SLIDE INTO SUMMER</p>
      </div>
    </div>
  );
};

export default SliderShoesSection;
