import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const SetApart = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".blue-underline",
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: {
          trigger: ".blue-underline",
          scrub: true,
          start: "top bottom",
          end: "top top",
        },
      }
    );
  }, []);
  return (
    <div className="flex flex-col w-full px-40 my-20">
      <span className="text-[40px] font-extrabold pl-20">
        What sets us apart.
      </span>
      <div className="h-[15px] bg-pink-800 w-1/3 ml-20 rounded-full blue-underline" />
      <div className="flex w-full p-10 justify-evenly">
        <div className="flex flex-col w-[30%] p-10 shadow-xl rounded-xl shadow-pink-100">
          <span className="font-bold text-[32px]">Local Expertise</span>
          <span>
            With our deep roots in India, we possess a nuanced understanding of
            the country's socio-cultural fabric, regulatory landscape, and
            development challenges. This local knowledge enables us to navigate
            complexities effectively and deliver contextually relevant
            solutions.
          </span>
        </div>
        <div className="flex flex-col w-[30%] p-10 shadow-xl rounded-xl shadow-pink-100">
          <span className="font-bold text-[32px]">Client-Centered</span>
          <span>
            Our clients are at the heart of everything we do. We prioritize
            their needs, goals, and aspirations, and tailor our services to
            ensure maximum value creation and sustainable impact.
          </span>
        </div>
        <div className="flex flex-col w-[30%] p-10 shadow-xl rounded-xl shadow-pink-100">
          <span className="font-bold text-[32px]">Thought Leadership</span>
          <span>
            We stay ahead of the curve by staying abreast of emerging trends,
            policy developments, and innovative practices. Our thought
            leadership enables us to provide strategic advice and shape the
            discourse around critical issues.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SetApart;
