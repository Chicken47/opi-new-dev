import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Power3 } from "gsap";

const PinRightScrollLeft = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const anim = gsap.to(".trigger", {
      scrollTrigger: {
        trigger: ".trigger",
        scrub: 1,
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      },
    });

    gsap.fromTo(
      ".learn-text",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".learn-text",
          start: "top bottom",
          end: "top 60%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".involve-text",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".involve-text",
          start: "top bottom",
          end: "top 60%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".implement-text",
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".implement-text",
          start: "top bottom",
          end: "top 60%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".learn-image",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scale: 1.5,
        scrollTrigger: {
          trigger: ".learn-image",
          start: "top bottom",
          end: "top 20%",
          scrub: true,
        },
        ease: Power3.easeOut,
        delay: 0.1,
      }
    );
    gsap.fromTo(
      ".involve-image",
      { x: -100, opacity: 0, scale: 1 },
      {
        x: 0,
        scale: 1.5,
        opacity: 1,
        scrollTrigger: {
          trigger: ".involve-image",
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
        ease: Power3.easeOut,
        duration: 0.3,
      }
    );
    gsap.fromTo(
      ".implement-image",
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scale: 1.5,
        scrollTrigger: {
          trigger: ".implement-image",
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
        ease: Power3.easeOut,
        delay: 0.1,
      }
    );

    gsap.fromTo(
      ".learn-back-image",
      { scale: 0, opacity: 0.1 },
      {
        scale: 1,
        opacity: 0.6,
        x: 200,
        y: -100,
        scrollTrigger: {
          trigger: ".learn-back-image",
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".involve-back-image",
      { scale: 0, opacity: 0.1 },
      {
        scale: 1,
        opacity: 0.6,
        x: 100,
        y: 0,
        scrollTrigger: {
          trigger: ".involve-back-image",
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".implement-back-image",
      { scale: 0, opacity: 0.1 },
      {
        scale: 1,
        opacity: 0.6,
        x: 30,
        y: -100,
        scrollTrigger: {
          trigger: ".implement-back-image",
          start: "top bottom",
          end: "top center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      ".learn-header",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".learn-image",
          start: "top bottom",
          end: "bottom 50%",
        },
      }
    );
    gsap.fromTo(
      ".involve-header",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".involve-image",
          start: "top bottom",
          end: "bottom 50%",
        },
      }
    );
    gsap.fromTo(
      ".implement-header",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        fontSize: 60,
        scrollTrigger: {
          trigger: ".implement-image",
          start: "top bottom",
          end: "bottom 50%",
        },
      }
    );
    gsap.utils.toArray(".gallery__img").forEach((image) => {
      gsap.to(image, {
        y: "-23%",
        scrollTrigger: {
          trigger: image,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          // markers: true,
          endTrigger: image,
        },
      });
    });

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div ref={triggerRef} className="flex justify-start w-full trigger">
      <div
        ref={sectionRef}
        id="left"
        className="w-1/2 px-16 overflow-hidden bg-[#02315E]"
      >
        <div className="relative z-20 flex flex-col justify-center h-screen p-20 learn">
          {/* <img
            src="/images/png/pillarBg1.png"
            alt=""
            className="absolute object-cover opacity-40 -z-10 top learn-back-image"
          /> */}
          <span
            className={` font-extrabold text-[40px] text-white hover:text-purple-900 cursor-pointer transition-all learn-text`}
          >
            Learn
          </span>
          <div>
            <span className={` text-white learn-desc font-bold`}>
              We create innovative knowledge products and programs, empowering
              continuous learning and growth through research and evidence-based
              methodologies.
            </span>
            <img
              src="/images/png/learnImg.png"
              alt=""
              className="w-[300px] mt-20 float-right mr-20 learn-image"
            />
          </div>
        </div>
        <div className="relative z-20 flex flex-col justify-center h-screen p-20 involve">
          {/* <img
            src="/images/png/pillarBg2.png"
            alt=""
            className="absolute object-cover opacity-40 -z-10 top involve-back-image"
          /> */}

          <span
            className={` font-extrabold text-[40px] text-white hover:text-[#CE2273] cursor-pointer transition-all involve-text`}
          >
            Involve
          </span>
          <div>
            <span className={` text-white involve-desc font-bold`}>
              We foster strategic collaborations and partnerships, setting clear
              objectives to align with our clients' goals. By bringing together
              like-minded organizations and individuals, we amplify our
              collective impact.
            </span>
            <img
              src="/images/png/bgImg.png"
              alt=""
              className="w-[300px] mt-20 float-right mr-20 involve-image"
            />
          </div>
        </div>
        <div className="relative z-20 flex flex-col justify-center h-screen p-20 implement">
          {/* <img
            src="/images/png/pillarBg3.png"
            alt=""
            className="absolute object-cover opacity-40 -z-10 top implement-back-image"
          /> */}
          <span
            className={` font-extrabold text-[40px] text-white hover:text-[#CE2273] cursor-pointer transition-all implement-text`}
          >
            Implement
          </span>
          <div>
            <span className={` text-white implement-desc font-bold`}>
              Our mission is to catalyze digital solutions, extending beyond
              traditional approaches, to support development and revenue models.
              We thrive in thematic areas, using cutting-edge technology to
              drive impactful change. Join us in embracing digital
              transformation and exploring new frontiers together.
            </span>
            <img
              src="/images/png/bgImg1.png"
              alt=""
              className="w-[300px] mt-20 float-right mr-20 implement-image"
            />
          </div>
        </div>
      </div>
      <div
        id="right"
        className={`flex flex-col items-start justify-evenly p-20 w-1/2 h-screen overflow-hidden bg-[#02315E] right px-20`}
      >
        <span className={` text-[32px] font-extrabold text-white`}>
          How We Work
        </span>
        <span className={` text-white mt-3 text-[22px]`}>
          We imagine and build experiences, products and businesses that disrupt
          the status quo, win hearts and realize the future. Explore how we
          work.
        </span>
        <div className={` flex flex-col items-start`}>
          <span
            className={` font-extrabold text-[55px] text-white hover:text-[#CE2273] cursor-pointer learn-header transition-all`}
          >
            Learn
          </span>
          <span
            className={` font-extrabold text-[55px] text-white hover:text-[#CE2273] cursor-pointer involve-header transition-all`}
          >
            Involve
          </span>
          <span
            className={` font-extrabold text-[55px] text-white hover:text-[#CE2273] cursor-pointer implement-header transition-all`}
          >
            Implement
          </span>
        </div>
      </div>
    </div>
  );
};

export default PinRightScrollLeft;
