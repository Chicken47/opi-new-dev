import React, { useEffect, useRef } from "react";
import CardHoverTwo from "../../components/CardHoverTwo";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const AboutLayout = () => {
  let aboutLayoutImageRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(aboutLayoutImageRef, {
        scale: 1.5,
        scrollTrigger: {
          trigger: aboutLayoutImageRef,
          scrub: 3,
        },
      });
    });
  }, []);

  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-full max-w-[1366px] flex flex-col md:flex-row justify-between">
        <div
          id="left-about-image-id"
          className="md:w-1/3 overflow-hidden md:shadow-xl shadow-pblue md:rounded m-5 md:m-0"
        >
          <img
            src="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
            className="w-full h-full object-cover"
            ref={(el) => (aboutLayoutImageRef = el)}
          />
        </div>
        <div
          id="right-side-about-id"
          className="md:w-2/3 flex flex-col md:justify-center mt-10 md:mt-0 px-5 md:px-10"
        >
          <span className="font-inter text-[25px] md:text-[40px] text-center md:text-left font-extrabold text-ipink md:ml-[3vw]">
            Driving Collaborative Solutions
          </span>
          <div className="w-full flex flex-col md:flex-row items-center justify-around md:ml-0 mt-10">
            <CardHoverTwo
              title={"Multidisciplinary Research"}
              subtitle={
                "Learn - Harnessing diverse knowledge to create innovative interdisciplinary solutions."
              }
            />
            <CardHoverTwo
              title={"Multi-Sectoral Dialogue"}
              subtitle={
                "Involve - Fostering inclusive conversations to drive holistic solutions across sectors."
              }
            />
          </div>
          <div className="w-full mt-5 flex flex-col md:flex-row items-center md:ml-0 justify-around">
            <CardHoverTwo
              title={"Global Connectivity"}
              subtitle={
                "Connect - Empowering digital inclusion and fostering global collaboration for a connected and inclusive world."
              }
            />
            <CardHoverTwo
              title={"Multi-Stakeholder Continuum"}
              subtitle={
                "Implement - Building strong partnerships and collaborative consortia for sustainable impact."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
