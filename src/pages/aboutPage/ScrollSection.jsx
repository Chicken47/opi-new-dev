import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
          scrub: true,
          pin: triggerRef.current,
        },
      }
    );
    gsap.fromTo(
      ".img-One",
      {
        opacity: 0
      },
      {
        ease: "none",
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".img-One",
          start: "center right",
          end: "center center",
          scrub: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="p-20 overflow-hidden bg-indigo-800 rounded shadow-xl scroll-section-outer">
      <div ref={triggerRef} className="h-[80vh]">
        <div
          ref={sectionRef}
          className="scroll-section-inner h-[80vh] w-[200vw] flex relative"
        >
          <div className="h-full p-10 mt-10 bg-white rounded-l-xl">
            <span className="font-sans font-extrabold text-[5vh] text-indigo-800 text-right">
              Our Approach
            </span>
          </div>
          <div className="scroll-section h-[80vh] w-[90vw] flex bg-white mt-10 p-20">
            <div className="flex flex-col w-1/2 h-full p-10">
              <img src="/images/png/about-collaboration.png" alt="" className="h-[20vw] object-contain"/>
              <div className="flex flex-col items-start">
                <span className="text-[40px] font-extrabold">
                  Collaboration
                </span>
                <span>
                  We believe in the power of partnerships. By working closely
                  with our clients and stakeholders, we co-create solutions that
                  are sustainable, inclusive, and aligned with their goals.
                </span>
              </div>
            </div>
            <div className="flex flex-col-reverse w-1/2 h-full p-10">
              <img src="/images/png/about-innovation.png" alt="" className="h-[20vw] object-contain"/>
              <div className="flex flex-col items-start">
                <span className="text-[40px] font-extrabold">Innovation</span>
                <span>
                  We embrace innovation to drive social impact. Through
                  cutting-edge technologies, data-driven insights, and creative
                  problem-solving, we strive to revolutionize traditional
                  approaches and unlock new opportunities.
                </span>
              </div>
            </div>
          </div>
          <div className="scroll-section h-[80vh] w-[90vw] flex p-20 bg-white mt-10">
            <div className="flex flex-col-reverse w-1/2 h-full p-10">
              <img src="/images/png/about-evidence.png" alt="" className="h-[20vw] object-contain img-One"/>
              <div className="flex flex-col items-start">
                <span className="text-[40px] font-extrabold">
                  Evidence-Based
                </span>
                <span>
                  We are committed to delivering results. Our rigorous
                  monitoring and evaluation frameworks allow us to track
                  progress, measure impact, and continuously refine our
                  strategies for optimal outcomes.
                </span>
              </div>
            </div>
            <div className="flex flex-col w-1/2 h-full p-10">
              <img src="/images/png/about-gender.png" alt="" className="h-[20vw] object-contain"/>
              <div className="flex flex-col items-start">
                <span className="text-[40px] font-extrabold">Gender Lens</span>
                <span>
                  We recognize the critical role of gender in shaping societal
                  dynamics. Our gender-sensitive approach ensures that our
                  solutions address the unique needs and barriers faced by women
                  and other marginalized groups.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
