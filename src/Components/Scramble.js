import React, { useRef, cloneElement } from "react";

const letters = "IJKLMNOPQRSTUVWXYZ";

const Scramble = ({ children, textLength = "auto", scrambleSpeed = 40 }) => {
  const intervals = useRef(new Map());

  const applyScrambleEffect = (element, value, length) => {
    let iterations = 0;
    const originalWidth = element.offsetWidth;
    let currentText = element.innerText;

    const scramble = () => {
      currentText = Array.from({ length })
        .map((_, index) => {
          if (index < iterations) {
            return value[index] || "";
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      element.innerText = currentText;

      if (iterations < length) {
        iterations += 1;
        setTimeout(scramble, scrambleSpeed);
      }
    };

    element.style.minWidth = `${originalWidth}px`;
    element.style.whiteSpace = "nowrap";
    element.style.overflow = "hidden";

    setTimeout(scramble, scrambleSpeed);
    intervals.current.set(element, scramble);
  };

  const handleMouseEnter = (event) => {
    const element = event.target;
    const value = element.dataset.value;
    const length = textLength === "auto" ? value.length : textLength;
    applyScrambleEffect(element, value, length);
  };

  const handleMouseLeave = (event) => {
    const element = event.target;
    const scramble = intervals.current.get(element);
    if (scramble) {
      intervals.current.delete(element);
      element.innerText = element.dataset.value;
      element.style.minWidth = "";
    }
  };

  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const value = child.props.children;
      return cloneElement(child, {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        "data-value": value,
        style: {
          cursor: "pointer",
          display: "inline-block",
          minWidth: "0",
        },
      });
    }
    return child;
  });

  return <>{enhancedChildren}</>;
};

export default Scramble;
