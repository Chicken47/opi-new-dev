import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AboutHoverCard from "../../components/AboutHoverCard";

export const ScrollSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 1,
          pin: triggerRef.current,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden h-full rounded scroll-section-outer">
      <div ref={triggerRef} className="h-full">
        <div
          ref={sectionRef}
          className="scroll-section-inner h-full w-[200vw] flex relative"
        >
          <div className="scroll-section h-screen w-[100vw] flex flex-col justify-evenly  bg-pblue p-20">
            <span className="font-mont font-bold text-[50px] text-ipink">
              Our Mission
            </span>
            <div className="flex justify-between w-full">
              <AboutHoverCard
                imageUrl={"/images/png/about-focus-one.png"}
                cardColor={"bg-oblue"}
                text={"Improving access to information"}
                textColor={"text-black"}
              />
              <AboutHoverCard
                imageUrl={"/images/png/about-focus-two.png"}
                cardColor={"bg-pblue"}
                text={"Inspiring cross-sectoral communication"}
                textColor={"text-white"}
              />
              <AboutHoverCard
                imageUrl={"/images/png/about-focus-three.png"}
                cardColor={"bg-ipink"}
                text={"Increasing efficiency and productivity"}
                textColor={"text-black"}
              />
            </div>
          </div>
          <div className="scroll-section h-screen w-[100vw] flex flex-col justify-evenly bg-pblue p-20">
            <span className="font-mont font-bold text-[50px] w-full text-left text-ipink">
              & Goals
            </span>
            <div className="flex justify-evenly w-[100vw]">
              <AboutHoverCard
                imageUrl={"/images/png/services-one.png"}
                cardColor={"bg-oblue"}
                text={"Creating resilient and PPR-enabled health systems."}
                textColor={"text-black"}
              />
              <AboutHoverCard
                imageUrl={"/images/png/services-two.png"}
                cardColor={"bg-pblue"}
                text={"Ensuring financial and digital inclusion"}
                textColor={"text-white"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
