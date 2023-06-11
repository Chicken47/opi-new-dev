import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Power3 } from "gsap";

const PinLeftScrollRight = () => {
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
    const anim1 = gsap.to(".plsr-image", {
      scale: 1.4,
      scrollTrigger: {
        trigger: ".plsr-image",
        scrub: 5,
        start: "top bottom",
        end: "bottom bottom",
      },
    });
    const anim2 = gsap.utils.toArray("#slide-text-text").forEach((text) => {
      gsap.to(
        text,
        {
          x: 60,
          ease: Power3.easeOut(),
          scrollTrigger: {
            trigger: text,
            start: "top bottom",
            end: "top center",
            scrub: 5,
            endTrigger: text,
          },
        },
        "=-1"
      );
    });
    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div
      ref={(el) => (triggerRef = el)}
      className="flex justify-start w-full trigger overflow-hidden"
    >
      <div
        ref={(el) => (sectionRef = el)}
        id="left"
        className="w-1/2 p-16 flex flex-col overflow-hidden bg-oblue sticky"
      >
        <span className="text-[50px] w-full text-left font-bold font-oswald text-pblue">
          Learn
        </span>
        <span className="font-garamond w-full text-left text-[20px] text-black">
          We create innovative knowledge products and programs, empowering
          continuous learning and growth through research and evidence-based
          methodologies.
        </span>
        <div className="overflow-hidden m-10 shadow-xl">
          <img
            src="/images/png/about-focus-one.png"
            alt=""
            className="plsr-image"
          />
        </div>
      </div>
      <div
        id="right"
        className={`w-1/2 flex flex-col overflow-hidden bg-oblue`}
      >
        <div className="h-auto py-20 flex flex-col">
          <span
            id="slide-text-text"
            className="text-[32px] font-oswald font-bold text-pblue"
          >
            Knowledge Management
          </span>
          <div className="flex flex-col space-y-5 mt-16">
            <span
              id="slide-text-text"
              className="text-black font-mont font-bold text-[20px]"
            >
              White Papers
            </span>
            <span
              id="slide-text-text"
              className="text-black font-garamond text-[20px] max-w-[450px]"
            >
              In-depth research documents providing valuable insights and
              analysis on specific topics.
            </span>
            <span
              id="slide-text-text"
              className="text-black font-mont font-bold text-[20px]"
            >
              Case Studies and Pilot Designs
            </span>
            <span
              id="slide-text-text"
              className="text-black font-garamond text-[20px] max-w-[450px]"
            >
              Real-world examples and experimental plans showcasing effective
              strategies and approaches.
            </span>
            <span
              id="slide-text-text"
              className="text-black font-mont font-bold text-[20px]"
            >
              Industry and Policy Briefs
            </span>
            <span
              id="slide-text-text"
              className="text-black font-garamond text-[20px] max-w-[450px]"
            >
              Concise summaries highlighting key industry trends and policy
              implications.
            </span>
            <span
              id="slide-text-text"
              className="text-black font-mont font-bold text-[20px]"
            >
              Needs Assessment
            </span>
            <span
              id="slide-text-text"
              className="text-black font-garamond text-[20px] max-w-[450px]"
            >
              Comprehensive evaluations to identify requirements and determine
              optimal solutions.
            </span>
            <span
              id="slide-text-text"
              className="text-black font-mont font-bold text-[20px]"
            >
              Roadmaps
            </span>
            <span
              id="slide-text-text"
              className="text-black font-garamond text-[20px] max-w-[450px]"
            >
              Strategic plans outlining step-by-step directions and milestones
              for achieving desired outcomes.
            </span>
            <span
              id="slide-text-text"
              className="text-black font-mont font-bold text-[20px]"
            >
              Learning Exchange Avenues
            </span>
            <span
              id="slide-text-text"
              className="text-black font-garamond text-[20px] max-w-[450px]"
            >
              Platforms for collaborative knowledge-sharing and fostering
              partnerships among stakeholders.
            </span>
          </div>
        </div>
        <div className="h-auto py-20 flex flex-col">
          <span
            id="slide-text-text"
            className="text-[32px] font-oswald font-bold text-pblue"
          >
            Open Digital Dialogue
          </span>
          <div className="flex flex-col space-y-5 mt-16">
            <span
              id="slide-text-text"
              className="text-black font-mont font-bold text-[20px]"
            >
              Brainstorming and Co-creation Channel
            </span>
            <span
              id="slide-text-text"
              className="text-black font-garamond text-[20px] max-w-[450px]"
            >
              A platform that facilitates open discussions and collaborative
              efforts to generate innovative ideas and jointly develop new
              products or solutions.
            </span>
            <span
              id="slide-text-text"
              className="text-black font-mont font-bold text-[20px]"
            >
              Learning Exchange and Partnerships
            </span>
            <span
              id="slide-text-text"
              className="text-black font-garamond text-[20px] max-w-[450px]"
            >
              Initiatives focused on sharing knowledge, experiences, and best
              practices among individuals or organizations, fostering a
              collaborative environment for building partnerships and enhancing
              collective learning.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinLeftScrollRight;
