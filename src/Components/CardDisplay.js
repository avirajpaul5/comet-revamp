import React from "react";
import "../Styles/cardDisplay.css";

const DOM = {
  class: {
    transition: (element, name, duration, delay) => {
      const doTransition = () => {
        if (element.classList.contains(name)) {
          element.classList.remove(name);
        }

        element.classList.add(name);

        setTimeout(() => element.classList.remove(name), duration);
      };

      if (delay) {
        setTimeout(doTransition, delay);
      } else {
        doTransition();
      }
    },
  },
};

const N = {
  clamp: (min, value, max) => Math.min(Math.max(min, value), max),
};

const Transform = {
  rangify: (value, percent) => {
    const numerator = percent >= 0.5 ? percent - 0.5 : (0.5 - percent) * -1;

    const adjustedPercent = numerator / 0.5;

    return value * adjustedPercent;
  },
};

class CardDisplay extends React.Component {
  componentDidMount() {
    const display = document.getElementById("card-display");

    display.onmousemove = (e) => {
      const rect = display.getBoundingClientRect();

      const mouseX = e.clientX - rect.left,
        mouseY = e.clientY - rect.top;

      const xPercent = mouseX / rect.width,
        yPercent = mouseY / rect.height;

      const xDeg = Transform.rangify(10, yPercent),
        yDeg = Transform.rangify(-10, xPercent);

      display.style.transform = `perspective(1200px) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
    };

    display.onmouseleave = (e) => {
      DOM.class.transition(display, "transition", 500);

      display.style.transform = `perspective(1200px) rotateX(0deg) rotateY(0deg)`;
    };

    const releaseCard = (element) => {
      if (
        !element.classList.contains("selected") &&
        !element.classList.contains("chef-reappear")
      ) {
        DOM.class.transition(element, "selected", 1000);

        DOM.class.transition(element, "chef-reappear", 250, 1000);
      }
    };

    for (const card of document.querySelectorAll(".card-wrapper")) {
      card.onmouseup = () => releaseCard(card);
    }
  }

  render() {
    return (
      <div id="card-display">
        <button className="card-wrapper" type="button">
          <div className="card">
            <div className="card-svgs">
              <svg
                className="svg svg-left"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#F2F4F8"
                  d="M28.2,-44.5C36.5,-38.6,43,-30.6,41.6,-22.4C40.1,-14.1,30.6,-5.5,27.8,2.9C24.9,11.4,28.6,19.7,28.5,30.9C28.5,42.1,24.5,56.1,18.3,54.3C12.1,52.4,3.6,34.7,-7.9,29.9C-19.3,25.2,-33.7,33.4,-41.9,31.9C-50,30.4,-51.8,19,-54,7.5C-56.1,-4.1,-58.4,-15.9,-56.9,-28.7C-55.3,-41.5,-49.9,-55.3,-39.7,-60.3C-29.6,-65.4,-14.8,-61.6,-2.4,-57.9C10,-54.1,20,-50.3,28.2,-44.5Z"
                  transform="translate(100 100)"
                />
              </svg>
              <svg
                className="svg svg-right"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#F2F4F8"
                  d="M26.4,-42.2C35.7,-35.1,45.9,-30.3,57.4,-21.4C69,-12.5,82,0.6,83.7,14.4C85.4,28.2,75.8,42.8,63.3,52C50.9,61.3,35.6,65.2,21.7,65.3C7.8,65.4,-4.6,61.7,-12.2,53.9C-19.8,46,-22.7,34.1,-29.7,25.8C-36.7,17.5,-47.9,13,-50,6.4C-52.1,-0.1,-45.2,-8.8,-40.7,-18.6C-36.3,-28.5,-34.4,-39.6,-28.1,-48C-21.7,-56.4,-10.8,-62.2,-1.2,-60.4C8.5,-58.6,17.1,-49.2,26.4,-42.2Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <span class="card-amount roboto-mono">Free Delivery</span>
          </div>
        </button>
        <button className="card-wrapper" type="button">
          <div className="card">
            <div className="card-svgs">
              <svg
                className="svg svg-left"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#F2F4F8"
                  d="M38.4,-55.8C50.9,-51.7,63,-43,61.2,-32.2C59.4,-21.5,43.8,-8.7,41.7,6C39.7,20.8,51.1,37.5,48.4,43.5C45.7,49.6,28.8,45,15.7,44.9C2.6,44.9,-6.6,49.4,-20.9,53.4C-35.2,57.3,-54.5,60.7,-61.1,53C-67.6,45.3,-61.4,26.6,-60.3,10.8C-59.3,-5,-63.4,-17.9,-57.3,-23.9C-51.1,-30,-34.6,-29.1,-23.3,-33.7C-12.1,-38.4,-6,-48.7,3.5,-54.1C12.9,-59.4,25.9,-59.9,38.4,-55.8Z"
                  transform="translate(100 100)"
                />
              </svg>
              {/* <svg className="svg svg-right" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#F2F4F8" d="M26.7,-42.6C39.8,-33.1,59.2,-34.5,70.1,-27.2C81,-19.8,83.4,-3.7,73.2,4.8C63.1,13.3,40.4,14.3,28.2,19.4C16,24.4,14.2,33.5,9.2,37.9C4.2,42.4,-4,42.2,-10.3,38.7C-16.6,35.2,-20.8,28.5,-32.1,23.4C-43.3,18.3,-61.5,14.9,-61.1,9.5C-60.8,4.2,-41.8,-3.1,-31.7,-10C-21.6,-16.9,-20.3,-23.3,-16.5,-37C-12.7,-50.8,-6.4,-72,0.2,-72.3C6.8,-72.6,13.6,-52.2,26.7,-42.6Z" transform="translate(100 100)" />
                            </svg> */}
            </div>
            <span class="card-amount roboto-mono">Cash On Delivery</span>
          </div>
        </button>
        <button className="card-wrapper" type="button">
          <div className="card">
            <div className="card-svgs">
              <svg
                className="svg svg-left"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#F2F4F8"
                  d="M14.8,-26.2C19.7,-19.9,24.6,-16.7,34.9,-11C45.3,-5.3,61.1,2.9,61.1,9.4C61,15.8,45.1,20.5,35.9,31.1C26.7,41.7,24.3,58.2,15.9,66C7.5,73.9,-6.8,73,-18.8,67.8C-30.7,62.5,-40.2,52.8,-45.9,42.1C-51.7,31.4,-53.7,19.7,-48.8,10.9C-44,2.2,-32.3,-3.6,-29.9,-15.5C-27.4,-27.4,-34.1,-45.4,-30.6,-52.4C-27.2,-59.3,-13.6,-55.1,-4.3,-48.4C5,-41.7,9.9,-32.4,14.8,-26.2Z"
                  transform="translate(100 100)"
                />
              </svg>
              <svg
                className="svg svg-right"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#F2F4F8"
                  d="M16.5,-31.8C25.4,-20,39.3,-22.2,53.7,-16.8C68.1,-11.5,83,1.3,79.3,9.8C75.6,18.3,53.2,22.5,39.4,28.9C25.6,35.3,20.5,43.9,12.9,48.1C5.2,52.4,-5,52.2,-19,53.3C-33,54.4,-50.8,56.9,-58.1,49.7C-65.3,42.4,-62.2,25.4,-57.1,12.7C-52,-0.1,-44.9,-8.7,-43,-22.5C-41.1,-36.2,-44.3,-55.1,-38,-68C-31.7,-80.9,-15.9,-87.8,-6,-78.5C3.8,-69.1,7.7,-43.5,16.5,-31.8Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <span class="card-amount roboto-mono">Easy Return</span>
          </div>
        </button>
      </div>
    );
  }
}

export default CardDisplay;
