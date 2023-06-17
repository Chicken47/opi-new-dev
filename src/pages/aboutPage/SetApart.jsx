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
    <div className="w-full flex justify-center">
      <div className="flex max-w-[1366px] flex-col w-full my-10 md:my-20">
        <span className="text-[30px] text-center md:text-left md:text-[40px] font-inter font-extrabold px-5 md:pl-20">
          What sets us apart.
        </span>
        <div className="h-[15px] bg-pink-800 w-1/3 ml-16 md:ml-20 rounded-full blue-underline" />
        <div className="flex flex-col md:flex-row w-full p-10 justify-evenly">
          <div className="flex flex-col md:w-[30%] p-5 md:p-10 shadow-xl rounded-xl shadow-sky-100 hover:shadow-xl hover:shadow-oblue transition-all group">
            <span className="font-bold md:text-[32px] font-inter group-hover:text-oblue">
              Local Expertise
            </span>
            <span className="font-jose md:text-[18px] text-[14px] mt-[2vh]">
              With our deep roots in India, we possess a nuanced understanding
              of the country's socio-cultural fabric, regulatory landscape, and
              development challenges. This local knowledge enables us to
              navigate complexities effectively and deliver contextually
              relevant solutions.
            </span>
          </div>
          <div className="flex flex-col md:w-[30%] md:p-10 p-5 shadow-xl rounded-xl shadow-indigo-200 hover:shadow-xl hover:shadow-pblue transition-all group">
            <span className="font-bold md:text-[32px] font-inter group-hover:text-pblue">
              Client-Centered
            </span>
            <span className="font-jose md:text-[18px] text-[14px] mt-[2vh]">
              Our clients are at the heart of everything we do. We prioritize
              their needs, goals, and aspirations, and tailor our services to
              ensure maximum value creation and sustainable impact.
            </span>
          </div>
          <div className="flex flex-col md:w-[30%] md:p-10 p-5 shadow-xl rounded-xl shadow-pink-100 hover:shadow-xl hover:shadow-ipink transition-all group">
            <span className="font-bold md:text-[32px] font-inter group-hover:text-ipink">
              Leadership
            </span>
            <span className="font-jose md:text-[18px] text-[14px] mt-[2vh]">
              We stay ahead of the curve by staying abreast of emerging trends,
              policy developments, and innovative practices. Our thought
              leadership enables us to provide strategic advice and shape the
              discourse around critical issues.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetApart;
