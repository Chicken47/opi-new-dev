import React, { useEffect } from "react";
import "./ourApproach.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const OurApproach = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let targetsHeight = document.querySelectorAll(".approach-height");

      targetsHeight.forEach((target, index) => {
        const pinSpacing = index === targetsHeight.length - 1 ? "true" : false;
        const end =
          index === targetsHeight.length - 1
            ? `+=${target.offsetHeight}px`
            : `+=${targetsHeight[index + 1].offsetHeight}px`;
        const opacityFirst = index === 0 ? 1 : 0;
        const opacitySecond = index === targetsHeight.length - 1 ? 1 : 0;
        gsap.from(".under-approach", {
          scaleX: 0,
        });
        const tl = gsap
          .timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
              trigger: target,
              pin: true,
              scrub: 5,
              start: "center center",
              end,
              toggleActions: "restart none reverse reset",
              pinSpacing,
            },
          })
          .from(target, { opacity: opacityFirst, duration: 0.2 }, 0)
          .to(target, { opacity: opacitySecond, duration: 0.2 }, 0.8);
      });
    });
    return () => ctx.revert();
  });
  return (
    <div>
      <div className="w-full">
        <span className="w-full max-w-[1366px] items-center font-mont flex-col font-extrabold text-[50px] flex justify-center text-center pb-10">
          Our Approach
        </span>
        <div class="approach-card approach-height bg-oblue">
          <div class="card__img-holder w-1/2">
            <img src="/images/png/bgImg1.png" />
          </div>
          <div class="card__text">
            <span className="font-oswald font-extrabold text-[50px]">
              Collaborative
            </span>
            <p className="font-jose text-[20px]">
              We believe in the power of partnerships. By working closely with
              our clients and stakeholders, we co-create solutions that are
              sustainable, inclusive, and aligned with their goals.
            </p>
          </div>
        </div>

        <div class="approach-card approach-height card--reverse bg-pblue">
          <div class="card__img-holder w-1/2">
            <img src="/images/png/bgImg.png" />
          </div>
          <div class="card__text text-white">
            <span className="font-oswald font-extrabold text-[50px]">
              Innovative
            </span>
            <p className="font-jose text-[20px]">
              We embrace innovation to drive social impact. Through cutting-edge
              technologies, data-driven insights, and creative problem-solving,
            </p>
          </div>
        </div>

        <div class="approach-card approach-height bg-ipink">
          <div class="card__img-holder w-1/2">
            <img src="/images/png/services-two.png" />
          </div>
          <div class="card__text">
            <span className="font-oswald font-extrabold text-[50px]">
              Gender Lens
            </span>
            <p className="font-jose text-[20px]">
              We recognize the critical role of gender in shaping societal
              dynamics. Our gender-sensitive approach ensures that our solutions
              address the unique needs and barriers faced by women and other
              marginalized groups.
            </p>
          </div>
        </div>

        <div class="approach-card approach-height card--reverse bg-oblue">
          <div class="card__img-holder w-1/2">
            <img src="/images/png/services-three.png" />
          </div>
          <div class="card__text">
            <span className="font-oswald font-extrabold text-[50px]">
              Evidence-Based
            </span>
            <p className="font-jose text-[20px]">
              We are committed to delivering results. Our rigorous monitoring
              and evaluation frameworks allow us to track progress, measure
              impact, and continuously refine our strategies for optimal
              outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
