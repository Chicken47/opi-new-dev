import React, { useEffect } from "react";
import "./textImageSlide.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const TextImageSlide = ({ text, bgColor }) => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(".filled-text, .outline-text", {
      scrollTrigger: {
        trigger: ".filled-text, .outline-text",
        start: "top bottom",
        end: "bottom 30%",
        scrub: 1,
      },
      x: 800,
    });

    gsap.to(".text-image-image", {
      scrollTrigger: {
        trigger: ".image",
        start: "top bottom",
        end: "bottom center",
        scrub: true,
      },
      x: -1000,
    });
  }, []);
  return (
    <div className={`${bgColor} text-image-wrapper h-[80vh]`}>
      <section class="text-image-main mt-20">
        <div class="container">
          <h2 class="filled-text ">{text}</h2>
          <h2 class="outline-text">{text}</h2>
          <img
            className="text-image-image"
            alt=""
            src="/images/png/services-two.png"
          />
        </div>
      </section>
    </div>
  );
};

export default TextImageSlide

