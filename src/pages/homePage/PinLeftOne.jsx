import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Power3 } from "gsap";

const PinLeftOne = () => {
  let sectionRef = useRef(null);
  let triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const anim = gsap.to(".trigger", {
      scrollTrigger: {
        trigger: triggerRef,
        scrub: 1,
        start: "top top",
        end: "bottom bottom",
        pin: sectionRef,
      },
    });
    const anim1 = gsap.to(".plsro-image", {
      scale: 1.4,
      scrollTrigger: {
        trigger: ".plsro-image",
        scrub: 5,
        start: "top bottom",
        end: "bottom bottom",
      },
    });
    const anim2 = gsap.utils.toArray("#slide-text-two").forEach((text) => {
      gsap.to(text, {
        x: 60,
        ease: Power3.easeOut(),
        scrollTrigger: {
          trigger: text,
          start: "top bottom",
          end: "bottom top",
          scrub: 5,
          endTrigger: text,
        },
      });
    });
    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div className="w-full flex justify-center">
      <div
        ref={(el) => (triggerRef = el)}
        className="flex max-w-[1366px] justify-start w-full trigger overflow-hidden"
      >
        <div
          ref={(el) => (sectionRef = el)}
          id="left"
          className="w-1/2 p-16 flex flex-col overflow-hidden bg-white sticky"
        >
          <span className="text-[50px] w-full text-left font-bold font-inter text-pblue">
            Implement
          </span>
          <span className="font-jose w-full text-left text-[18px] text-black">
            Our mission is to catalyze digital solutions, extending beyond
            traditional approaches, to support development and revenue models.
            We thrive in thematic areas, using cutting-edge technology to drive
            impactful change. Join us in embracing digital transformation and
            exploring new frontiers together.
          </span>
          <div className="overflow-hidden mt-10 shadow-xl">
            <img
              src="/images/png/about-focus-four.png"
              alt=""
              className="plsro-image"
            />
          </div>
        </div>
        <div
          id="right"
          className={`w-1/2 flex flex-col overflow-hidden bg-white`}
        >
          <div className="h-auto py-20 flex flex-col">
            <span
              id="slide-text-two"
              className="text-[32px] font-inter font-bold text-pblue"
            >
              Consortium Building and Partnerships
            </span>
            <div className="flex flex-col space-y-5 mt-16">
              <span
                id="slide-text-two"
                className="text-ipink font-mont font-bold text-[20px]"
              >
                Capacity Building
              </span>
              <span
                id="slide-text-two"
                className="text-black font-jose text-[18px] max-w-[450px]"
              >
                Enhancing skills and knowledge through targeted trainings and
                development programs.
              </span>{" "}
              <span
                id="slide-text-two"
                className="text-ipink font-mont font-bold text-[20px]"
              >
                Technical Assistance
              </span>
              <span
                id="slide-text-two"
                className="text-black font-jose text-[18px] max-w-[450px]"
              >
                Mobilizing resources and providing early-stage support to
                startups for growth and success.
              </span>{" "}
              <span
                id="slide-text-two"
                className="text-ipink font-mont font-bold text-[20px]"
              >
                Catalytic Funding
              </span>
              <span
                id="slide-text-two"
                className="text-black font-jose text-[18px] max-w-[450px]"
              >
                Accessing financing support from accelerators, funders, and
                investors to fuel innovation and accelerate business growth.
              </span>
            </div>
          </div>
          <div className="h-auto py-20 flex flex-col">
            <span
              id="slide-text-two"
              className="text-[32px] font-bold font-inter text-pblue"
            >
              Bridge Initiative Fund
            </span>
            <div className="flex flex-col space-y-5 mt-16">
              <span
                id="slide-text-two"
                className="text-black font-jose text-[18px] max-w-[450px]"
              >
                Mobilize and provide innovative financing to support development
                and scale of:
                <br />
                - Digital Public Goods
                <br />
                - Digital Solutions
                <br />
                - DPI
                <br />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinLeftOne;
