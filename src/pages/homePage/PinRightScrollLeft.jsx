import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
        ease: "none"
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
        ease: "none"
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
        ease: "none"
      }
    );

    gsap.fromTo(
      ".learn-image",
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".learn-image",
          start: "top 80%",
          end: "top center",
          scrub: true,
        },
        duration: 0.3,
        delay: 0.1,
      }
    );
    gsap.fromTo(
      ".involve-image",
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".involve-image",
          start: "top 80%",
          end: "top 50",
          scrub: true,
        },
        duration: 0.3,
      }
    );
    gsap.fromTo(
      ".implement-image",
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".implement-image",
          start: "top 80%",
          end: "top 50",
          scrub: true,
        },
        duration: 0.3,
        delay: 0.1,
      }
    );
    
    gsap.fromTo(
      ".learn-back-image",
      { scale:0, opacity: 0.1 },
      {
        scale: 1,
        opacity: 0.6,
        x: 200,
        y:-100,
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
      { scale:0, opacity: 0.1 },
      {
        scale: 1,
        opacity: 0.6,
        x: 100,
        y:0,
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
      { scale:0, opacity: 0.1 },
      {
        scale: 1,
        opacity: 0.6,
        x: 30,
        y:-100,
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
          trigger: ".learn-back-image",
          start: "top bottom",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".involve-header",
      { x:-100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".involve-back-image",
          start: "top bottom",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      ".implement-header",
      { x:-100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        fontSize: 60,
        scrollTrigger: {
          trigger: ".implement-back-image",
          start: "top bottom",
          end: "bottom 50%",
          scrub: true,
        },
      }
    );

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div ref={triggerRef} className="flex justify-start w-full trigger">
      <div
        ref={sectionRef}
        id="left"
        className="w-1/2 px-16 overflow-hidden bg-purple-900"
      >
        <div className="relative z-20 flex flex-col justify-center h-screen p-20 learn">
          <img
            src="/images/png/pillarBg1.png"
            alt=""
            className="absolute object-cover opacity-40 -z-10 top learn-back-image"
          />
          <span
            className={` font-extrabold text-[55px] text-white hover:text-purple-900 cursor-pointer transition-all learn-text`}
          >
            Learn
          </span>
          <div>
            <span className={` text-white learn-desc font-bold`}>
              Unlocking the power of knowledge and innovation, we craft
              cutting-edge knowledge products and tailor program designs for our
              valued clients and program partners. Through rigorous research and
              evidence-based methodologies, we empower you to embark on a
              journey of continuous learning and growth.
            </span>
            <img
              src="/images/png/learnImg.png"
              alt=""
              className="w-[300px] mt-20 float-right mr-20 learn-image"
            />
          </div>
        </div>
        <div className="relative z-20 flex flex-col justify-center h-screen p-20 involve">
          <img
            src="/images/png/pillarBg2.png"
            alt=""
            className="absolute object-cover opacity-40 -z-10 top involve-back-image"
          />

          <span
            className={` font-extrabold text-[55px] text-white hover:text-[#CE2273] cursor-pointer transition-all involve-text`}
          >
            Involve
          </span>
          <div>
            <span className={` text-white involve-desc font-bold`}>
              We believe in the strength of strategic collaboration and aim to
              foster meaningful partnerships across the ecosystem. Our approach
              is focused on setting clear objectives and forging connections
              that align with our clients goals. Through our targeted
              partnership building efforts, we bring together like-minded
              organizations and individuals, amplifying our collective impact.
            </span>
            <img
              src="/images/png/bgImg.png"
              alt=""
              className="w-[300px] mt-20 float-right mr-20 involve-image"
            />
          </div>
        </div>
        <div className="relative z-20 flex flex-col justify-center h-screen p-20 implement">
          <img
            src="/images/png/pillarBg3.png"
            alt=""
            className="absolute object-cover opacity-40 -z-10 top implement-back-image"
          />
          <span
            className={` font-extrabold text-[55px] text-white hover:text-[#CE2273] cursor-pointer transition-all implement-text`}
          >
            Implement
          </span>
          <div>
            <span className={` text-white implement-desc font-bold`}>
              At the heart of our mission is catalyzing digital solutions that
              not only support development and revenue models but also extend
              beyond the boundaries of traditional approaches. We thrive in
              thematic areas, leveraging cutting-edge technology to drive
              impactful change. With a forward-thinking mindset and a passion
              for innovation, we are dedicated to propelling your organization
              towards success. Join us in embracing the power of digital
              transformation and exploring new frontiers together, both within
              and beyond DPI.
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
        className={`flex flex-col items-start justify-evenly p-20 w-1/2 h-screen overflow-hidden bg-purple-900 right px-20`}
      >
        <span
          className={` text-[32px] font-extrabold text-white`}
        >
          How We Work
        </span>
        <span className={` text-white mt-3 text-[26px]`}>
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

export default PinRightScrollLeft