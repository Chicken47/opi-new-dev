import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef } from "react";

const AboutIntro = () => {
  let shortImageRef = useRef(null);
  let shortImageTwoRef = useRef(null);
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
      gsap.fromTo(
        shortImageTwoRef,
        {
          yPercent: 20,
          scale: 1,
        },
        {
          yPercent: -20,
          scale: 2,
          ease: ease,
          scrollTrigger: {
            trigger: shortImageTwoRef,
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
    <div className="flex flex-col justify-evenly pt-20">
      <div className="flex justify-evenly px-20">
        <div className="flex flex-col items-start py-40 w-1/2 px-20">
          <span className={`text-[18px]`}>
            We are a dynamic consulting firm committed to driving positive
            change through innovative solutions and strategic partnerships. With
            our unique blend of expertise and passion, we empower organizations
            and governments to create meaningful impact and navigate complex
            challenges.
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
      <div className="flex justify-evenly px-20">
        <div className="w-1/2 flex items-center justify-center overflow-hidden">
          <img
            src="/images/png/bgimg.png"
            alt=""
            className="object-cover w-4/5 object-center overflow-hidden h-[300px]"
            ref={(el) => (shortImageTwoRef = el)}
          />
        </div>
        <div className="flex flex-col items-start py-40 w-1/2 px-20">
          <span className={`text-[18px]`}>
            At OPI, we believe that policy and impact go hand in hand. Our
            multidisciplinary team brings together diverse backgrounds, ranging
            from policy analysis and advocacy to project management and
            technology, enabling us to tackle complex societal issues with a
            holistic approach. We leverage our deep understanding of local
            contexts and global best practices to design tailored strategies
            that address the most pressing challenges of our time.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
