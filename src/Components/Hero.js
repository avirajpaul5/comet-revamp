import React, { useState } from "react";
import { gsap } from "gsap";
import "../Styles/Hero.css";
import heroImg from "../Assets/HeroImages/comet.png";
const images = [
  {
    id: 1,
    src: "https://www.wearcomet.com/cdn/shop/files/sb_1-min_1100x.jpg?v=1716807770",
  },
  {
    id: 2,
    src: "https://www.wearcomet.com/cdn/shop/files/Crater_Desktop-min_f3646250-bf78-4bd7-beb3-0f06de37e2c7_2000x.jpg?v=1716301668",
  },
  {
    id: 3,
    src: "https://www.wearcomet.com/cdn/shop/files/sb_1-min_1100x.jpg?v=1716807770",
  },
  {
    id: 4,
    src: "https://www.wearcomet.com/cdn/shop/files/Mango_Desktop-min_14a104a2-b9f4-4ae9-8f79-da7e79a0c277_2000x.jpg?v=1716301750",
  },
  {
    id: 5,
    src: "https://www.wearcomet.com/cdn/shop/files/Crater_Desktop-min_f3646250-bf78-4bd7-beb3-0f06de37e2c7_2000x.jpg?v=1716301668",
  },
  {
    id: 6,
    src: "https://www.wearcomet.com/cdn/shop/files/sb_1-min_1100x.jpg?v=1716807770",
  },
  {
    id: 7,
    src: "https://www.wearcomet.com/cdn/shop/files/sb4-min_1100x.jpg?v=1716807769",
  },
  {
    id: 8,
    src: "https://www.wearcomet.com/cdn/shop/files/Crater_Desktop-min_f3646250-bf78-4bd7-beb3-0f06de37e2c7_2000x.jpg?v=1716301668",
  },
  {
    id: 9,
    src: "https://www.wearcomet.com/cdn/shop/files/Mango_Desktop-min_14a104a2-b9f4-4ae9-8f79-da7e79a0c277_2000x.jpg?v=1716301750",
  },
  {
    id: 10,
    src: "https://www.wearcomet.com/cdn/shop/files/Crater_Desktop-min_f3646250-bf78-4bd7-beb3-0f06de37e2c7_2000x.jpg?v=1716301668",
  },
  {
    id: 11,
    src: "https://www.wearcomet.com/cdn/shop/files/Mango_Desktop-min_14a104a2-b9f4-4ae9-8f79-da7e79a0c277_2000x.jpg?v=1716301750",
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
        <p className="heroText"> on a mission</p>
        <div className="heroLine" />
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
