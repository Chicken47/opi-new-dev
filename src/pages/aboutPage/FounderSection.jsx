import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const FounderSection = () => {
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
    const anim2 = gsap.to(".sireesha-image", {
      scale: 1.3,
      scrollTrigger: {
        trigger: "#sireesha-right",
        scrub: 5,
        start: "top 20%",
        end: "bottom top",
      },
    });
    return () => {
      anim.kill();
      anim2.kill();
    };
  }, []);

  return (
    <div className="w-full flex justify-center bg-oblue">
      <div
        ref={(el) => (triggerRef = el)}
        className="hidden md:flex justify-start w-full max-w-[1366px] trigger overflow-hidden"
      >
        <div
          ref={(el) => (sectionRef = el)}
          id="left"
          className="w-1/2 p-16 flex flex-col items-center overflow-hidden bg-oblue sticky"
        >
          <span className="w-full text-center font-inter font-bold text-black text-[32px]">
            Managing Director
          </span>
          <span className="w-full text-center font-inter font-bold text-white text-[22px]">
            Sireesha Perambathina
          </span>
          <span className="flex justify-center w-2/3 rounded mt-10 overflow-hidden">
            <img
              src="/images/png/sireesha.png"
              className="sireesha-image shadow-lg shadow-black"
            />
          </span>
        </div>
        <div
          id="sireesha-right"
          className={`w-1/2 py-32 px-32 flex flex-col overflow-hidden bg-oblue font-jose text-[20px] text-black`}
        >
          Sireesha is the founder and managing partner of Open for Policy and
          Impact. She is a seasoned global health professional with over two
          decades of experience working with the leadership team of global
          foundations, social organisations, government departments and
          corporates across India, SE Asia, Africa, Latin America, North
          America, and Europe. She is passionate about solving global social
          problems through enabling and building critical partnerships and
          networks.
          <br />
          <br />
          As the managing partner at OPI, she is responsible for the overall
          strategic direction, growth, and impact of the organisation. Sireesha
          leads several collective impact initiatives across domains within
          healthcare and beyond such as to family welfare, sexual & reproductive
          health, maternal, neonatal & child health nutrition, health financing,
          digital transformation, financial inclusion, gender equity, quality,
          patient safety, and engagement.
          <br />
          <br />
          Before founding OPI, Sireesha was a Senior Consultant and Global
          Associate Director, at ACCESS Health International, a not-for-profit
          and think tank organization. She successfully executed strategic plans
          to implement several programs across domains. She demonstrated
          cross-cultural savviness, ability to communicate with diverse
          audiences and managed cross functional teams and partnerships across
          global.
          <br />
          <br />
          Sireesha is a Ford Foundation Fellow, 2005 Cohort from India, a
          postgraduate in healthcare management from Indian Institute of
          Healthcare management and Research, Jaipur, Rajasthan and holds a
          master’s in public health from Boston University, School of Public
          Health, Boston Massachusetts, USA.
        </div>
      </div>
      <div className="flex flex-col items-center md:hidden p-10 bg-oblue py-10">
        <span className="w-full text-center font-inter font-bold text-black text-[28px] md:text-[32px]">
          Managing Director
        </span>
        <span className="w-full text-center font-inter font-bold text-white text-[18px] md:text-[22px]">
          Sireesha Perambathina
        </span>
        <span className="flex justify-center md:w-2/3 rounded mt-10 overflow-hidden">
          <img
            src="/images/png/sireesha.png"
            className="sireesha-image shadow-lg shadow-black"
          />
        </span>
        <div id="sireesha-right" className={`font-jose text-center mt-10`}>
          Sireesha is the founder and managing partner of Open for Policy and
          Impact. She is a seasoned global health professional with over two
          decades of experience working with the leadership team of global
          foundations, social organisations, government departments and
          corporates across India, SE Asia, Africa, Latin America, North
          America, and Europe. She is passionate about solving global social
          problems through enabling and building critical partnerships and
          networks.
          <br />
          <br />
          As the managing partner at OPI, she is responsible for the overall
          strategic direction, growth, and impact of the organisation. Sireesha
          leads several collective impact initiatives across domains within
          healthcare and beyond such as to family welfare, sexual & reproductive
          health, maternal, neonatal & child health nutrition, health financing,
          digital transformation, financial inclusion, gender equity, quality,
          patient safety, and engagement.
          <br />
          <br />
          Before founding OPI, Sireesha was a Senior Consultant and Global
          Associate Director, at ACCESS Health International, a not-for-profit
          and think tank organization. She successfully executed strategic plans
          to implement several programs across domains. She demonstrated
          cross-cultural savviness, ability to communicate with diverse
          audiences and managed cross functional teams and partnerships across
          global.
        </div>
      </div>
    </div>
  );
};

export default FounderSection;
