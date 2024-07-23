import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import BestSeller from "./Components/BestSeller";
import SliderShoes from "./Components/SliderShoes";
import Vault from "./Components/Vault";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import CustomCursor from "./Components/CustomEffects/CustomCursor";
import "./Styles/CustomCursor.css";
gsap.registerPlugin(ScrollTrigger);
const App = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#section2",
      start: "top top",
      end: "bottom top",

      onEnter: () =>
        gsap.to("body", { backgroundColor: "#F2F2F2", duration: 1 }),
      onLeave: () =>
        gsap.to("body", { backgroundColor: "#080808", duration: 1 }),
      onLeaveBack: () =>
        gsap.to("body", { backgroundColor: "#080808", duration: 1 }),
      onEnterBack: () =>
        gsap.to("body", { backgroundColor: "#F2F2F2", duration: 1 }),
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const lenis = useLenis(({ scroll }) => {});
  return (
    <>
      <ReactLenis root>
        <CustomCursor />
        <div className="parentContainer">
          <Navbar />
          <Hero />
          <BestSeller />
          <SliderShoes />
          <div id="section2">
            <Vault />
          </div>

          {/* <Reviews /> */}
          <Footer />
        </div>
      </ReactLenis>
    </>
  );
};

export default App;
