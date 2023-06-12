import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Power3 } from "gsap";

const PinRight = () => {
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
    const anim1 = gsap.to(".prsl-image", {
      scale: 1.4,
      scrollTrigger: {
        trigger: ".prsl-image",
        scrub: 5,
        start: "top bottom",
        end: "bottom bottom",
      },
    });
    const anim2 = gsap.utils.toArray("#slide-text-one").forEach((text) => {
      gsap.to(text, {
        y: 20,
        x: 40,
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
      //   anim2.kill();
    };
  }, []);

  return (
    <div className="w-full flex justify-center bg-oblue">
      <div
        ref={(el) => (triggerRef = el)}
        className="flex justify-start max-w-[1366px] w-full trigger overflow-hidden"
      >
        <div
          id="left"
          className={`w-1/2 flex flex-col p-16 overflow-hidden bg-oblue sticky`}
        >
          <div className="h-auto py-20 flex flex-col">
            <span
              id="slide-text-one"
              className="text-[32px] font-bold font-inter text-black"
            >
              Communications, Outreach, and Partnerships
            </span>
            <div className="flex flex-col space-y-5 mt-16">
              <span
                id="slide-text-one"
                className="text-white font-inter font-bold text-[20px]"
              >
                Engagement
              </span>
              <span
                id="slide-text-one"
                className="text-black font-jose text-[18px] max-w-[450px]"
              >
                - Regional knowledge sharing through events, exchange workshops,
                and study visits, and investments.
              </span>
              <span
                id="slide-text-one"
                className="text-white font-inter font-bold text-[20px]"
              >
                Collaborations
              </span>
              <span
                id="slide-text-one"
                className="text-black font-jose text-[18px] max-w-[450px]"
              >
                - Facilitate partnership channels, define the required
                collaborations, the roles of partnering organizations and
                bodies.
              </span>
            </div>
          </div>
          <div className="h-auto py-20 flex flex-col">
            <span
              id="slide-text-one"
              className="text-[32px] font-inter font-bold text-black"
            >
              Multi-Disciplinary | Sectoral | Stakeholder Partnerships
            </span>
            <div className="flex flex-col space-y-5 mt-10">
              <span
                id="slide-text-one"
                className="text-white font-inter font-bold text-[20px]"
              >
                Funding
              </span>
              <span
                id="slide-text-one"
                className="text-black font-jose text-[18px] max-w-[450px]"
              >
                Facilitate partnership channels, define the required
                collaborations, the roles of partnering organizations and
                bodies.
              </span>
              <span
                id="slide-text-one"
                className="text-white font-inter font-bold text-[20px]"
              >
                Implementation
              </span>
              <span
                id="slide-text-one"
                className="text-black font-jose text-[18px] max-w-[450px]"
              >
                Build and scale solutions and products in the thematic areas
              </span>
              <span
                id="slide-text-one"
                className="text-white font-inter font-bold text-[20px]"
              >
                Network
              </span>
              <span
                id="slide-text-one"
                className="text-black font-jose text-[18px] max-w-[450px]"
              >
                Outreach, learning and knowledge exchange
              </span>
              <span
                id="slide-text-one"
                className="text-white font-inter font-bold text-[20px]"
              >
                Ecosystem
              </span>
              <span
                id="slide-text-one"
                className="text-black font-jose text-[18px] max-w-[450px]"
              >
                Enhance and strengthen systems and approaches
              </span>
            </div>
          </div>
        </div>
        <div
          id="right"
          ref={(el) => (sectionRef = el)}
          className="w-1/2 p-16 flex flex-col items-center overflow-hidden bg-oblue "
        >
          <span className="text-[50px] w-full text-left font-bold font-inter text-black">
            Involve
          </span>
          <span className="font-jose w-full text-left text-[18px] text-white">
            We foster strategic collaborations and partnerships, setting clear
            objectives to align with our clients' goals. By bringing together
            like-minded organizations and individuals, we amplify our collective
            impact.
          </span>
          <div className="overflow-hidden mt-10 shadow-xl">
            <img
              src="/images/png/services-four.png"
              alt=""
              className="prsl-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinRight;
