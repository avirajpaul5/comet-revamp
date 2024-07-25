import React, { useState } from "react";
import { gsap } from "gsap";
import "../Styles/Hero.css";
import shoe1 from "../Assets/HeroImages/starbound1.png";
import shoe2 from "../Assets/HeroImages/Crater.png";
import shoe3 from "../Assets/HeroImages/Jugnu.png";
import shoe4 from "../Assets/HeroImages/Ludo.png";
import shoe5 from "../Assets/HeroImages/Mango.png";
import shoe6 from "../Assets/HeroImages/Skribble.png";
import shoe7 from "../Assets/HeroImages/Spacebound.png";
import shoe8 from "../Assets/HeroImages/Tuxedo.png";
import shoe9 from "../Assets/HeroImages/dusk.png";
import shoe10 from "../Assets/HeroImages/luna.png";
import shoe11 from "../Assets/HeroImages/santanu.png";
import Scramble from "./Scramble";

const images = [
  {
    id: 1,
    src: shoe1,
  },
  {
    id: 2,
    src: shoe2,
  },
  {
    id: 3,
    src: shoe3,
  },
  {
    id: 4,
    src: shoe4,
  },
  {
    id: 5,
    src: shoe5,
  },
  {
    id: 6,
    src: shoe6,
  },
  {
    id: 7,
    src: shoe7,
  },
  {
    id: 8,
    src: shoe8,
  },
  {
    id: 9,
    src: shoe9,
  },
  {
    id: 10,
    src: shoe10,
  },
  {
    id: 11,
    src: shoe11,
  },
];
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Hero = () => {
  const shuffledImages = shuffleArray([...images]);

  const [visibleImages, setVisibleImages] = useState(
    shuffledImages.slice(0, 4).map((image) => image.id)
  );

  const handleMouseEnter = (e, id) => {
    if (!visibleImages.includes(id)) {
      setVisibleImages((prevState) => {
        const newVisibleImages = [...prevState.slice(1), id];
        return newVisibleImages;
      });
    }
  };
  return (
    <div className="HeroContainer">
      <div className="heroTop">
        <div className="heroHeading">COMeT</div>

        <p className="heroText">
          {" "}
          Shop for{" "}
          <span>
            {" "}
            Men <p className="womenShop">Women</p>{" "}
          </span>
        </p>

        <div className="heroLine">
          <p>
            “Sneakers <span> on a mission” </span>
          </p>
        </div>
      </div>

      <div className="grid-container">
        {images.map((image) => (
          <div
            key={image.id}
            className="grid-item"
            onMouseEnter={(e) => handleMouseEnter(e, image.id)}
          >
            <img
              src={image.src}
              alt={`Grid ${image.id}`}
              className="grid-image"
              style={{ opacity: visibleImages.includes(image.id) ? 1 : 0 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
