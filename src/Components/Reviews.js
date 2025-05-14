import React, { useState, useEffect } from "react";
import "../Styles/Reviews.css";
import review1 from "../Assets/reviewImages/review1.png";
import review3 from "../Assets/reviewImages/review3.png";
import review4 from "../Assets/reviewImages/review4.png";
import review5 from "../Assets/reviewImages/review5.png";
import review6 from "../Assets/reviewImages/review6.png";
import pfp1 from "../Assets/reviewImages/pfp1.png";
import pfp3 from "../Assets/reviewImages/pfp3.png";
import pfp4 from "../Assets/reviewImages/pfp4.png";
import pfp5 from "../Assets/reviewImages/pfp5.png";
import pfp6 from "../Assets/reviewImages/pfp6.png";

import rating from "../Assets/reviewImages/5rating.png";

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(3); // Default to slide 3 (index 2)

  // Use effect to update the radio buttons when currentSlide changes
  useEffect(() => {
    // Find the radio button that corresponds to the current slide and check it
    const radioButton = document.getElementById(`slide-${currentSlide}`);
    if (radioButton) {
      radioButton.checked = true;
    }
  }, [currentSlide]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 1 ? 5 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === 5 ? 1 : prev + 1));
  };

  const reviews = [
    {
      img: review1,
      title: "LOVE HOW THIS FITS!",
      subtitle:
        "I love how it fits and has a unique appeal, definitely not gonna feel shy or sorry while buying them again.",
      pfp: pfp1,
      author: "Purnima S.",
      designation: "UI/UX designer",
    },
    {
      img: review6,
      title: "CRAZY STYLE AND COMFORT!",
      subtitle:
        "Great Combination of style and comfort. Trumps a lot of the other brands I've worn. Excited to keep adding Comets to my wardrobe.",
      pfp: pfp6,
      author: "Siddhant A.",
      designation: "Investment Analyst",
    },
    {
      img: review3,
      title: "COLOURFUL, VIBRANT AND COMFY!",
      subtitle:
        "I really liked the Comet X Lows in Lagoon. They're colourful, vibrant, and SO SO comfy-making them an absolutely perfect wear for cool events as well as for all the walking I like to do. Love them!",
      pfp: pfp3,
      author: "Ria Chopra",
      designation: "Writer",
    },
    {
      img: review4,
      title: "THESE LOOK SO COOL",
      subtitle:
        "I wanted a slide that I could wear outside to the malls and with my friends to cafes. Comet has that perfect blend of style and comfort.",
      pfp: pfp4,
      author: "Ayushi B.",
      designation: "Architect",
    },
    {
      img: review5,
      title: "STATEMENT MAKER!",
      subtitle:
        "Really a pair that stands out and how! Loved everything from the packaging of the mango to the actual pair in hand. The comfort is just amazing and the pair is a statement maker.",
      pfp: pfp5,
      author: "Nishant T.",
      designation: "Hospitality Expert",
    },
  ];

  return (
    <section className="section slider">
      <h1 className="reviewsTitle">WHAT THEY'RE SAYING?</h1>
      <div className="section_entry section_entry--center"></div>
      <input
        type="radio"
        name="slider"
        id="slide-1"
        className="slider__radio"
        onChange={() => setCurrentSlide(1)}
      />
      <input
        type="radio"
        name="slider"
        id="slide-2"
        className="slider__radio"
        onChange={() => setCurrentSlide(2)}
      />
      <input
        type="radio"
        name="slider"
        id="slide-3"
        className="slider__radio"
        defaultChecked={currentSlide === 3}
        onChange={() => setCurrentSlide(3)}
      />
      <input
        type="radio"
        name="slider"
        id="slide-4"
        className="slider__radio"
        onChange={() => setCurrentSlide(4)}
      />
      <input
        type="radio"
        name="slider"
        id="slide-5"
        className="slider__radio"
        onChange={() => setCurrentSlide(5)}
      />

      <div className="slider__holder">
        {reviews.map((review, index) => (
          <label
            htmlFor={`slide-${index + 1}`}
            className={`slider__item slider__item--${index + 1} card`}
            key={index}
            onClick={() => setCurrentSlide(index + 1)}
          >
            <div className="slider__item-content">
              <div className="image">
                <img src={review.img} className="img" alt={review.title} />
              </div>
              <div className="reviewContentContainer">
                <div className="reviewContent">
                  <h1>{review.title}</h1>
                  <p>{review.subtitle}</p>
                </div>
                <div className="authorRatingContainer">
                  <div className="authorContainer">
                    <div>
                      <img
                        src={review.pfp}
                        className="pfp"
                        alt={review.author}
                      />
                    </div>
                    <div className="authorDetails">
                      <p>{review.author}</p>
                      <p>{review.designation}</p>
                    </div>
                  </div>
                  <div>
                    <img src={rating} className="rating" alt="5 star rating" />
                  </div>
                </div>
              </div>
            </div>
          </label>
        ))}
      </div>

      <div className="bullets">
        <span
          className="bullets__item bullets__item--1"
          onClick={() => setCurrentSlide(1)}
        ></span>
        <span
          className="bullets__item bullets__item--2"
          onClick={() => setCurrentSlide(2)}
        ></span>
        <span
          className="bullets__item bullets__item--3"
          onClick={() => setCurrentSlide(3)}
        ></span>
        <span
          className="bullets__item bullets__item--4"
          onClick={() => setCurrentSlide(4)}
        ></span>
        <span
          className="bullets__item bullets__item--5"
          onClick={() => setCurrentSlide(5)}
        ></span>
      </div>

      <div className="carousel-buttons">
        <button
          className="carousel-button prev-button"
          onClick={handlePrevious}
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        <button
          className="carousel-button next-button"
          onClick={handleNext}
          aria-label="Next slide"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Reviews;
