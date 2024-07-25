import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import "../Styles/BestSeller.css";
import shoe1 from "../Assets/ProductImages/ProductImage1.png";
import shoe2 from "../Assets/ProductImages/ProductImage2.png";
import shoe3 from "../Assets/ProductImages/ProductImage3.png";
import shoe4 from "../Assets/ProductImages/ProductImage4.png";
import shoe5 from "../Assets/ProductImages/ProductImage5.png";
import shoe6 from "../Assets/ProductImages/ProductImage6.png";
import shoe7 from "../Assets/ProductImages/ProductImage7.png";
import shoe8 from "../Assets/ProductImages/ProductImage8.png";
import shoe9 from "../Assets/ProductImages/ProductImage9.png";
import shoe10 from "../Assets/ProductImages/ProductImage10.png";

gsap.registerPlugin(Draggable);

const Bestseller = () => {
  useEffect(() => {
    let xPos = 0;
    const images = [
      shoe1,
      shoe2,
      shoe3,
      shoe4,
        shoe5,
        shoe6,
      shoe7,
      shoe8,
      shoe9,
      shoe10,
    ];
    gsap
      .timeline()
      .set("#dragger", { opacity: 0 })
      .set("#ring", { rotationY: 180 })
      .set(".bestsellerimg", {
        rotateY: (i) => i * -36,
        transformOrigin: "50% 50% 500px",
        z: -500,
        backgroundImage: (i) => `url(${images[i]})`,
        backgroundPosition: (i) => getBgPos(i),
        backfaceVisibility: "hidden",
      })
      // .from(".bestsellerimg", {
      //   duration: 1.5,
      //   y: 200,
      //   opacity: 0,
      //   stagger: 0.1,
      //   ease: "expo",
      // })
      .to(".productTitle h1", {
        duration: 0.2,
        transform: "translateX(-100%)",
        scrollTrigger: {
          trigger: ".productTitle h1",
          scroller: "body",
          start: "top 100%",
          scrub: 0.6,
        },
      });

    Draggable.create("#dragger", {
      onDragStart: (e) => {
        if (e.touches) e.clientX = e.touches[0].clientX;
        xPos = Math.round(e.clientX);
      },
      onDrag: (e) => {
        if (e.touches) e.clientX = e.touches[0].clientX;

        gsap.to("#ring", {
          rotationY: "-=" + ((Math.round(e.clientX) - xPos) % 360),
          onUpdate: () => {
            gsap.set(".bestsellerimg", {
              backgroundPosition: (i) => getBgPos(i),
            });
          },
        });

        xPos = Math.round(e.clientX);
      },
      onDragEnd: () => {
        gsap.set("#dragger", { x: 0, y: 0 }); // reset drag layer
      },
    });

    function getBgPos(i) {
      return (
        (-gsap.utils.wrap(
          0,
          360,
          gsap.getProperty("#ring", "rotationY") - 180 - i * 36
        ) /
          360) *
          400 +
        "px 0px"
      );
    }
  }, []);

  return (
    <div className="bestsellerWrapper">
      <div className="productTitle">
        <h1 className="productTitleTransparent">PRODUCTS</h1>
        <h1>PRODUCTS</h1>
        <h1 className="productTitleTransparent">PRODUCTS</h1>
        <h1>PRODUCTS</h1>
        <h1 className="productTitleTransparent">PRODUCTS</h1>
        <h1>PRODUCTS</h1>
      </div>
      <div className="bestSellerCarouselContainer bs">
        <div id="ring" className="bs bestsellerimgWrapper">
          <div className="bestsellerimg bs"></div>
          <div className="bestsellerimg bs"></div>
          <div className="bestsellerimg bs"></div>
          <div className="bestsellerimg bs"></div>
          <div className="bestsellerimg bs"></div>
          <div className="bestsellerimg bs"></div>
          <div className="bestsellerimg bs"></div>
          <div className="bestsellerimg bs"></div>
          <div className="bestsellerimg bs"></div>
          <div className="bestsellerimg bs"></div>
        </div>
        <div className="vignette bs"></div>
        <div id="dragger" className="bs"></div>
      </div>
    </div>
  );
};

export default Bestseller;
