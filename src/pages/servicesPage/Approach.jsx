import React, { useEffect, useRef } from "react";
import CardHoverTwo from "../../components/CardHoverTwo";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const Approach = () => {
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
    <div className="w-full flex justify-center pb-10 md:pb-20 md:pt-32">
      <div className="w-full max-w-[1366px] flex flex-col md:flex-row justify-between">
        <div
          id="left-about-image-id"
          className="md:w-1/3 overflow-hidden hidden md:flex shadow-xl shadow-pblue rounded mx-10 md:mx-0"
        >
          <img
            src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
            className="w-full h-full object-cover"
            ref={(el) => (aboutLayoutImageRef = el)}
          />
        </div>
        <div
          id="right-side-about-id"
          className="md:w-2/3 flex flex-col justify-start items-center px-10"
        >
          <span className="font-inter text-[40px] font-extrabold text-ipink ml-[3vw] mt-10 md:mt-10">
            Our Approach
          </span>
          <div className="w-full flex flex-col md:flex-row items-center justify-around mt-10">
            <CardHoverTwo
              title={"Collaborative"}
              subtitle={
                "We believe in the power of partnerships. By working closely with our clients and stakeholders, we co-create solutions that are sustainable, inclusive, and aligned with their goals."
              }
            />
            <CardHoverTwo
              title={"Innovative"}
              subtitle={
                "We embrace innovation to drive social impact. Through cutting-edge technologies, data-driven insights, and creative problem-solving we innovate to propogate the desired result."
              }
            />
          </div>
          <div className="w-full mt-5 flex flex-col md:flex-row items-center justify-around">
            <CardHoverTwo
              title={"Gender Lens"}
              subtitle={
                "We recognize the critical role of gender in shaping societal dynamics. Our gender-sensitive approach ensures that our solutions address the unique needs and barriers faced by women and other marginalized groups."
              }
            />
            <CardHoverTwo
              title={"Evidence-Based"}
              subtitle={
                "We are committed to delivering results. Our rigorous monitoring and evaluation frameworks allow us to track progress, measure impact, and continuously refine our strategies for optimal outcomes.."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
