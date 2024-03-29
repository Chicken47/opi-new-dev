import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ShortText = () => {
  const ease = Power3.easeOut();
  const navigate = useNavigate();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-about-image",
        {
          yPercent: 20,
          scale: 1,
        },
        {
          yPercent: -20,
          scale: 2,
          ease: ease,
          scrollTrigger: {
            trigger: ".about-about-image",
            scrub: true,
            start: "top bottom",
            end: "bottom top",
          },
        }
      );
    });
    return () => ctx.revert();
  });

  return (
    <div className="w-full flex justify-center">
      <div className="hidden md:flex flex-col md:flex-row justify-between items-center md:py-20 max-w-[1366px] w-full">
        <div className="flex flex-col justify-center items-start w-full md:w-1/2 md:pl-20 px-10 md:px-0 md:pr-60">
          <span className={`md:text-[18px] text-[14px] font-jose w-full`}>
            We are a dynamic consulting firm committed to driving positive
            change through innovative solutions and strategic partnerships.
            <br />
            <br />
            With our unique blend of expertise and passion, we empower
            organizations and governments to create meaningful impact and
            navigate complex challenges.
          </span>
          <div
            onClick={() => navigate("/contact")}
            className="cursor-pointer hidden md:flex justify-center mt-10 border border-white duration-500 transition-all hover:text-ipink hover:bg-white font-bold font-inter hover:border hover:border-ipink px-4 py-2 uppercase text-white bg-ipink"
          >
            Connect With Us
          </div>
        </div>
        <div className="md:w-1/2 items-center justify-center overflow-hidden mt-5 md:mt-0 mb-10 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
            className="object-cover w-4/5 object-center overflow-hidden h-full about-about-image"
          />
        </div>
      </div>
      <div className="h-[80vh] justify-evenly flex md:hidden flex-col my-[10vh] px-5">
        <div className="h-1/2 w-full">
          <img
            className="object-cover w-full h-full overflow-hidden"
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          />
        </div>
        <div className="text-[16px] px-5 font-jose mt-10">
          We are a dynamic consulting firm committed to driving positive change
          through innovative solutions and strategic partnerships.
          <br />
          With our unique blend of expertise and passion, we empower
          organizations and governments to create meaningful impact and navigate
          complex challenges.
        </div>
      </div>
    </div>
  );
};

export default ShortText;
