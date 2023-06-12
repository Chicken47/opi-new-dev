import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const MapSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  let mapRef = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(mapRef, {
        scale: 1.2,
        scrollTrigger: {
          trigger: mapRef,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });
    return () => ctx.revert();
  });
  return (
    <div className="flex flex-col items-center justify-center w-full bg-black py-32">
      <span className="font-inter font-bold text-[40px] text-ipink">
        Our Exposure and Experience
      </span>
      <span className="text-[22px] font-jose text-white">
        Our team has engaged with partners and worked on projects extending more
        than 35 countries.
      </span>
      <div className="w-full mt-20 max-w-[800px]">
        <img
          src="/images/png/map.png"
          className="object-cover"
          ref={(el) => (mapRef = el)}
        />
      </div>
    </div>
  );
};

export default MapSection;
