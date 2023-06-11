import React, { useEffect, useRef } from "react";
import HoverCard from "../../components/HoverCard";
import { gsap, Power3 } from "gsap";
import { useNavigate } from "react-router-dom";

const ServicesHero = () => {
  const ease = Power3.easeInOut();
  let introRef = useRef(null);
  let logoRef = useRef(null);
  let header_item_one = useRef(null);
  let header_item_two = useRef(null);
  let header_item_three = useRef(null);
  let hoverOne = useRef(null);
  let hoverTwo = useRef(null);
  let hoverThree = useRef(null);
  let hoverFour = useRef(null);
  let hoverFive = useRef(null);
  let lineOneRef = useRef(null);
  let lineTwoRef = useRef(null);
  let paraRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(logoRef, 0.2, {
        y: -100,
        ease: ease,
      });
      tl.from(
        [header_item_one, header_item_two, header_item_three],
        0.5,
        {
          y: -100,
          ease: ease,
          stagger: {
            amount: 0.2,
          },
        },
        "-=0.3"
      );
      tl.from(
        [hoverOne, hoverTwo, hoverThree, hoverFour, hoverFive],
        0.8,
        {
          y: -1200,
          stagger: {
            amount: 0.2,
          },
          ease: ease,
        },
        "-=1"
      );
      tl.from([lineOneRef, paraRef], 0.5, {
        y: 50,
        ease: ease,
        opacity: 0,
        stagger: {
          amount: 0.2,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full flex justify-center bg-black">
      <div className="w-full h-screen max-w-[1366px] flex justify-center bg-black">
        <div className="w-full h-screen max-w-[1366px] flex flex-col relative overflow-hidden main-hero-wrapper">
          <div className="w-full flex justify-between py-5 px-10">
            <div
              ref={(el) => (logoRef = el)}
              onClick={() => navigate("/")}
              className="cursor-pointer"
            >
              <img src="/images/png/Union.png" className="h-[40px]" />
            </div>
            <div className="flex items-center space-x-8">
              <a
                href="/about"
                ref={(el) => (header_item_one = el)}
                className="text-white font-bold cursor-pointer"
              >
                Who We Are
              </a>
              <a
                href="/services"
                ref={(el) => (header_item_two = el)}
                className="text-white font-bold cursor-pointer"
              >
                What We Do
              </a>
              <a
                href="/about"
                ref={(el) => (header_item_three = el)}
                className="text-white font-bold cursor-pointer"
              >
                Connect With Us
              </a>
            </div>
          </div>
          <div className="flex justify-between w-full h-full py-5">
            <div className="w-2/5 flex flex-col items-start justify-center overflow-hidden">
              <span
                ref={(el) => (lineOneRef = el)}
                className="font-extrabold text-[20px] font-inter md:text-[45px] text-left text-ipink"
              >
                Our Services
              </span>
              <p
                ref={(el) => (paraRef = el)}
                className="text-white max-w-[600px] font-jose text-[14px] md:text-[18px] text-left mt-10"
              >
                We understand that each client and project is unique, and we
                pride ourselves on our ability to tailor our services to
                specific needs and contexts.
                <br />
                <br />
                Get in touch with us today to explore how we can collaborate to
                achieve your organization's goals and create a lasting impact.
              </p>
              {/* <button className="px-6 py-1 mt-[2vh] rounded hover:shadow-2xl hover:shadow-slate-800 transition-all border border-white bg-black text-white font-bold uppercase text-[14px]">
            About Us
          </button> */}
            </div>
            <div className="w-3/5 flex flex-col space-y-5 items-center justify-center">
              <div className="flex space-x-5">
                <div ref={(el) => (hoverOne = el)}>
                  <HoverCard
                    title="Health"
                    subtitle="We provide expertise in health policy, system strengthening, program evaluation, and innovative interventions."
                    image="/images/png/about-focus-one.png"
                    marginTop={30}
                    width={250}
                    height={250}
                  />
                </div>
                <div ref={(el) => (hoverTwo = el)}>
                  <HoverCard
                    title="FinTech"
                    subtitle="We guide organizations through financial technology complexities, offering regulatory analysis, market assessments, and inclusive digital solutions."
                    image="/images/png/about-focus-two.png"
                    width={180}
                    height={300}
                  />
                </div>
                <div ref={(el) => (hoverThree = el)}>
                  <HoverCard
                    title="Gender Equity"
                    subtitle="We promote gender equity through mainstreaming, violence prevention, economic empowerment, and responsive evaluation."
                    image="/images/png/services-two.png"
                    marginTop={50}
                    width={250}
                    height={220}
                  />
                </div>
              </div>
              <div className="flex space-x-5">
                <div ref={(el) => (hoverFour = el)}>
                  <HoverCard
                    title="Climate"
                    subtitle="Our services include climate policy, impact assessments, green growth strategies, and climate adaptation/mitigation project design."
                    image="/images/png/about-focus-four.png"
                    marginLeft={20}
                    width={350}
                    height={300}
                  />
                </div>
                <div ref={(el) => (hoverFive = el)}>
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
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
