import React, { useEffect, useRef } from "react";
import HoverCard from "../../components/HoverCard";
import { gsap, Power3 } from "gsap";
import "./intro.css";

const Hero = () => {
  const tl = gsap.timeline();
  const ease = Power3.easeOut();
  let introRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      tl.to(introRef, 0.5, {
        yPercent: -100,
        delay: 2,
        ease: ease,
      });
    }, 0.6);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col relative overflow-hidden">
      <div
        ref={(el) => (introRef = el)}
        className="bg-black absolute w-full h-full top-0 left-0 z-50 flex items-center justify-center"
      >
        <span className="z-50 text-white intro-title">
          <span className="title-inner">Welcome to opi</span>
        </span>
      </div>
      <div className="w-full flex justify-between px-20">
        <div>
          <img src="/images/png/HeaderLogo.png" className="h-[80px]" />
        </div>
        <div className="flex items-center space-x-8">
          <span>About Us</span>
          <span>Services</span>
          <span>Contact</span>
        </div>
      </div>
      <div className="flex w-full h-full py-5">
        <div className="w-2/5 p-16 flex flex-col items-start justify-center">
          <span className="font-extrabold font-sans text-[22px] md:text-[30px] text-left w-full text-black">
            Navigating Challenges
          </span>
          <span className="font-extrabold text-[20px] font-sans md:text-[30px] text-left text-black">
            Creating Impact
          </span>
          <p className="text-black max-w-[600px] text-[14px] md:text-[18px] text-left">
            Driving Positive Change through Innovative Solutions and Strategic
            Partnerships: Empowering Organisations to Navigate Complex
            Challenges
          </p>
          <button className="px-6 py-1 mt-[2vh] rounded hover:shadow-2xl hover:shadow-slate-800 transition-all border border-white bg-black text-white font-bold uppercase text-[14px]">
            About Us
          </button>
        </div>
        <div className="w-3/5 flex flex-col space-y-5 items-center justify-center">
          <div className="flex space-x-5">
            <div>
              <HoverCard
                title="Health"
                subtitle="We provide expertise in health policy, system strengthening, program evaluation, and innovative interventions."
                image="/images/png/about-focus-one.png"
                marginTop={30}
                width={250}
                height={250}
              />
            </div>
            <div>
              <HoverCard
                title="FinTech"
                subtitle="We guide organizations through financial technology complexities, offering regulatory analysis, market assessments, and inclusive digital solutions."
                image="/images/png/about-focus-two.png"
                width={180}
                height={300}
              />
            </div>
            <div>
              <HoverCard
                title="Gender Equity"
                subtitle="We promote gender equity through mainstreaming, violence prevention, economic empowerment, and responsive evaluation."
                image="/images/png/services-two.png"
                marginTop={100}
                width={250}
                height={220}
              />
            </div>
          </div>
          <div className="flex space-x-5">
            <HoverCard
              title="Climate"
              subtitle="Our services include climate policy, impact assessments, green growth strategies, and climate adaptation/mitigation project design."
              image="/images/png/about-focus-four.png"
              marginLeft={20}
              width={350}
              height={300}
            />
            <HoverCard
              title="Policy Analysis"
              subtitle="Our rigorous analysis covers research, impact assessments, and concise briefs for informed strategies."
              image="/images/png/about-focus-five.png"
              marginTop={30}
              width={350}
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
