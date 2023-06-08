import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { CSSPlugin } from "gsap/CSSPlugin";

gsap.registerPlugin(ScrollTrigger, CSSPlugin);

export const FounderSection = () => {
  useEffect(() => {
    gsap.to(".left-photo.left-pin-section", {
      scrollTrigger: {
        trigger: ".trigger-div",
        pin: ".left-photo.left-pin-section",
        start: "top top",
        end: "bottom top",
      },
    });
  }, []);

  return (
    <div className="flex w-full p-20 trigger-div">
      <div className="flex flex-col w-1/3 left-photo left-pin-section">
        <span className="font-extrabold text-[40px] text-center p-10 text-indigo-800 font-sans">
          Note from the Managing Partner
        </span>
        <img
          src="/images/png/sireesha.png"
          alt=""
          className="h-[20vw] object-contain"
        />
      </div>
      <div className="flex flex-col w-2/3 p-20 px-40 space-y-10 font-sans text-2xl left-photo">
        <span>
          Sireesha is the founder and managing partner of Open for Policy and
          Impact. She is a seasoned global health professional with over two
          decades of experience working with the leadership team of global
          foundations, social organisations, government departments and
          corporates across India, SE Asia, Africa, Latin America, North
          America, and Europe. She is passionate about solving global social
          problems through enabling and building critical partnerships and
          networks.
        </span>
        <span>
          As the managing partner at OPI, she is responsible for the overall
          strategic direction, growth, and impact of the organisation. Sireesha
          leads several collective impact initiatives across domains within
          healthcare and beyond such as to family welfare, sexual & reproductive
          health, maternal, neonatal & child health nutrition, health financing,
          digital transformation, financial inclusion, gender equity, quality,
          patient safety, and engagement.
        </span>
        <span>
          Before founding OPI, Sireesha was a Senior Consultant and Global
          Associate Director, at ACCESS Health International, a not-for-profit
          and think tank organization. She successfully executed strategic plans
          to implement several programs across domains. She demonstrated
          cross-cultural savviness, ability to communicate with diverse
          audiences and managed cross functional teams and partnerships across
          global.
        </span>
        <span>
          Sireesha is a Ford Foundation Fellow, 2005 Cohort from India, a
          postgraduate in healthcare management from Indian Institute of
          Healthcare management and Research, Jaipur, Rajasthan and holds a
          master’s in public health from Boston University, School of Public
          Health, Boston Massachusetts, USA.
        </span>
      </div>
    </div>
  );
};
