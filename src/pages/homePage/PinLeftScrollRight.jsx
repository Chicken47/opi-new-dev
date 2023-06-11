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
    <div className="bg-black w-full">
      <div className="w-full flex justify-center bg-gradient-to-r from-[#f96c963b] to-[#8bb4c73d]">
        <div
          ref={(el) => (triggerRef = el)}
          className="flex justify-start max-w-[1366px] w-full trigger overflow-hidden bg-black"
        >
          <div
            ref={(el) => (sectionRef = el)}
            id="left"
            className="w-1/2 p-16 flex flex-col overflow-hidden bg-gradient-to-r from-[#f96c963b] to-black [#8bb4c73d] sticky dark:bg-opacity-50"
          >
            <span className="text-[50px] w-full text-left font-bold font-inter text-white">
              Learn
            </span>
            <span className="font-jose w-full text-left text-[20px] text-white">
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
            className={`w-1/2 flex flex-col overflow-hidden bg-gradient-to-r from-black to-[#8bb4c73d]`}
          >
            <div className="h-auto py-20 flex flex-col">
              <span
                id="slide-text-text"
                className="text-[32px] font-inter font-bold text-white"
              >
                Knowledge Management
              </span>
              <div className="flex flex-col space-y-5 mt-16">
                <span
                  id="slide-text-text"
                  className="text-oblue font-inter font-bold text-[20px]"
                >
                  White Papers
                </span>
                <span
                  id="slide-text-text"
                  className="text-white font-jose text-[20px] max-w-[450px]"
                >
                  In-depth research documents providing valuable insights and
                  analysis on specific topics.
                </span>
                <span
                  id="slide-text-text"
                  className="text-oblue font-inter font-bold text-[20px]"
                >
                  Case Studies and Pilot Designs
                </span>
                <span
                  id="slide-text-text"
                  className="text-white font-jose text-[20px] max-w-[450px]"
                >
                  Real-world examples and experimental plans showcasing
                  effective strategies and approaches.
                </span>
                <span
                  id="slide-text-text"
                  className="text-oblue font-inter font-bold text-[20px]"
                >
                  Industry and Policy Briefs
                </span>
                <span
                  id="slide-text-text"
                  className="text-white font-jose text-[20px] max-w-[450px]"
                >
                  Concise summaries highlighting key industry trends and policy
                  implications.
                </span>
                <span
                  id="slide-text-text"
                  className="text-oblue font-inter font-bold text-[20px]"
                >
                  Needs Assessment
                </span>
                <span
                  id="slide-text-text"
                  className="text-white font-jose text-[20px] max-w-[450px]"
                >
                  Comprehensive evaluations to identify requirements and
                  determine optimal solutions.
                </span>
                <span
                  id="slide-text-text"
                  className="text-oblue font-inter font-bold text-[20px]"
                >
                  Roadmaps
                </span>
                <span
                  id="slide-text-text"
                  className="text-white font-jose text-[20px] max-w-[450px]"
                >
                  Strategic plans outlining step-by-step directions and
                  milestones for achieving desired outcomes.
                </span>
                <span
                  id="slide-text-text"
                  className="text-oblue font-inter font-bold text-[20px]"
                >
                  Learning Exchange Avenues
                </span>
                <span
                  id="slide-text-text"
                  className="text-white font-jose text-[20px] max-w-[450px]"
                >
                  Platforms for collaborative knowledge-sharing and fostering
                  partnerships among stakeholders.
                </span>
              </div>
            </div>
            <div className="h-auto py-20 flex flex-col">
              <span
                id="slide-text-text"
                className="text-[32px] font-inter font-bold text-white"
              >
                Open Digital Dialogue
              </span>
              <div className="flex flex-col space-y-5 mt-16">
                <span
                  id="slide-text-text"
                  className="text-oblue font-inter font-bold text-[20px]"
                >
                  Brainstorming and Co-creation Channel
                </span>
                <span
                  id="slide-text-text"
                  className="text-white font-jose text-[20px] max-w-[450px]"
                >
                  A platform that facilitates open discussions and collaborative
                  efforts to generate innovative ideas and jointly develop new
                  products or solutions.
                </span>
                <span
                  id="slide-text-text"
                  className="text-oblue font-inter font-bold text-[20px]"
                >
                  Learning Exchange and Partnerships
                </span>
                <span
                  id="slide-text-text"
                  className="text-white font-jose text-[20px] max-w-[450px]"
                >
                  Initiatives focused on sharing knowledge, experiences, and
                  best practices among individuals or organizations, fostering a
                  collaborative environment for building partnerships and
                  enhancing collective learning.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinLeftScrollRight;
