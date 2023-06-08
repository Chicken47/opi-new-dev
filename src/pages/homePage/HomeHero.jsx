import React, {useEffect} from "react";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

export const HomeHero = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".welcome-text",
      { y: 50 },
      {
        y: 0,
        duration: 0.2,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: ".welcome-text",
          start: "top bottom",
          end: "top top",
        },
      }
    );
  }, []);
  return (
    <div id="" className="relative w-screen h-screen">
      <div className="flex w-full h-full bg-black">
        <img
          src="/images/png/services-two.png"
          alt="hero_img"
          className="absolute inset-0 object-cover w-full h-full opacity-50"
        />
        <div className="z-50 flex flex-col items-center justify-center w-full h-full px-20 overflow-hidden ">
          <span className="font-extrabold text-[30px] w-full justify-center flex text-white welcome-text overflow-hidden">
            WELCOME TO OPI
          </span>
          <span className="font-sans font-bold text-[40px] flex w-full justify-center overflow-auto text-gray-200 welcome-text">
            Consulting Services and for a Digital and Inclusive Future
          </span>
        </div>
      </div>
    </div>
  );
};
