import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const ServicesIntro = () => {
  let shortImageRef = useRef(null);
  const ease = Power3.easeOut();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.fromTo(
        shortImageRef,
        {
          yPercent: 20,
          scale: 1,
        },
        {
          yPercent: -20,
          scale: 2,
          ease: ease,
          scrollTrigger: {
            trigger: shortImageRef,
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
    <div className="flex justify-evenly px-20 pb-32 pt-40">
      <div className="flex flex-col items-start py-40 w-1/2 px-20">
        <span className={`text-[18px] font-garamond`}>
          At OPI - Open for Policy and Impact, we offer a wide range of
          consulting services designed to address the complex challenges faced
          by organizations and governments. Our services are tailored to meet
          the unique needs of our clients, enabling them to achieve their goals,
          drive impact, and create sustainable change.
          <br />
          <br />
          Our expertise spans across various sectors, including Health, FinTech,
          Climate, Gender equity, and more. Through our collaborative and
          evidence-based approach, we deliver practical solutions that drive
          positive outcomes and foster long-term growth.
        </span>
      </div>
      <div className="w-1/2 flex items-center justify-center overflow-hidden">
        <img
          src="/images/png/bgimg1.png"
          alt=""
          className="object-cover w-4/5 object-center overflow-hidden h-[300px]"
          ref={(el) => (shortImageRef = el)}
        />
      </div>
    </div>
  );
};

export default ServicesIntro;
