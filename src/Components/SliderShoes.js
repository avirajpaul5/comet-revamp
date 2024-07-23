import React from "react";
import "../Styles/SliderShoes.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import slider1 from "../Assets/sliderImages/slider 1.png";
import slider2 from "../Assets/sliderImages/slider 2.png";
import slider3 from "../Assets/sliderImages/slider 3.png";
import slider4 from "../Assets/sliderImages/slider 4.png";

const SliderShoesSection = () => {
  useGSAP(() => {
    gsap.from(".bgText", {
      opacity: 0,
      // delay: 1,
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
        // pin:true
      },
    });
    gsap.to(".cardsContainer", {
      transform: "translateY(-100%)",
      scrollTrigger: {
        trigger: ".mainSliderContainer",
        scroller: "body",
        start: "top top",
        end: "top -180%",
        scrub: true,
        pin: true,
      },
    });
  });

  return (
    <div className="mainSliderContainer">
      <div id="parallax-bg-3" className="cardsContainer">
        <div id="bg-3-1" className="sliderCards">
          <img src={slider1}></img>
        </div>
        <div id="bg-3-2" className="sliderCards">
          <img src={slider2}></img>
        </div>
        <div id="bg-3-3" className="sliderCards">
          <img src={slider3}></img>
        </div>
        <div id="bg-3-4" className="sliderCards">
          <img src={slider4}></img>
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
