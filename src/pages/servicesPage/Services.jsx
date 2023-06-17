import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export const Services = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const elements = [
      { selector: ".left-one", x: -100 },
      { selector: ".left-two", x: -100 },
      { selector: ".left-three", x: -100 },
      { selector: ".left-four", x: -100 },
      { selector: ".left-five", x: -100 },
      { selector: ".left-six", x: -100 },
      { selector: ".right-one", x: 100 },
      { selector: ".right-two", x: 130 },
      { selector: ".right-three", x: 100 },
      { selector: ".right-four", x: 100 },
      { selector: ".right-five", x: 100 },
      { selector: ".right-six", x: 100 },
    ];

    elements.forEach(({ selector, x }) => {
      gsap.fromTo(
        selector,
        {
          x,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: selector,
            start: "top 80%",
            end: "center center",
            scrub: true,
          },
        }
      );
    });

    const lines = [".line-1", ".line-2"];

    lines.forEach((selector) => {
      gsap.fromTo(
        selector,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          transformOrigin: "left center",
          ease: "none",
          scrollTrigger: {
            trigger: selector,
            scrub: true,
            start: "top bottom",
            end: "top top",
          },
        }
      );
    });

    gsap.fromTo(
      ".square",
      {
        y: 0,
      },
      {
        y: 200,
        rotate: 360,
        borderRadius: "5vh",
        ease: "none",
        scrollTrigger: {
          trigger: ".square",
          scrub: true,
          start: "top 80%",
          end: "top 20%",
        },
      }
    );

    gsap.fromTo(
      ".image",
      {
        border: "0rem solid",
      },
      {
        border: "1rem solid #07e4f0",
        ease: "none",
        scrollTrigger: {
          trigger: ".image",
          scrub: true,
          start: "top bottom",
          end: "top top",
        },
      }
    );

    gsap.fromTo(
      ".circle",
      {
        x: 0,
        y: 0,
      },
      {
        x: -400,
        y: 250,
        ease: "none",
        scrollTrigger: {
          trigger: ".circle",
          scrub: true,
          start: "top bottom",
          end: "top top",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col w-full items-center mb-[300px] space-y-20 px-40">
      <div id="imgLeft" className="flex w-full">
        <div
          id="left"
          className="flex flex-col justify-center w-1/2 space-y-10 left-one"
        >
          <div className="w-full line-1 h-[8px] bg-pink-500 relative inline-block" />
          <img
            src="/images/png/services-one.png"
            alt=""
            className="h-[18vw] object-contain"
          />
        </div>
        <div
          id="right"
          className="flex flex-col items-start justify-center w-1/2 p-10 right-one"
        >
          <span className={`font-extrabold text-[26px]`}>
            Public Policy Development and Analysis
          </span>
          <span className={`flex items-center justify-center text-left`}>
            - Policy research and analysis: Rigorous research to analyze policy
            landscapes, identify emerging trends, and develop evidence-based
            recommendations. <br />
            - Policy advocacy and engagement: Collaborative approaches to
            influence policy outcomes, foster partnerships, and facilitate
            inclusive decision-making processes.
            <br />- Policy impact assessment: Evaluation of policy effectiveness
            and impact, measuring alignment with organizational objectives and
            societal needs.
          </span>
        </div>
      </div>
      <div id="imgRight" className="flex w-full">
        <div
          id="left"
          className="flex flex-col items-end justify-center w-1/2 p-10 left-two"
        >
          <span className={`font-extrabold text-[26px]`}>
            Partnerships and Stakeholder Engagement
          </span>
          <span className={`flex items-center justify-center text-right`}>
            - Partnership development and management: Strategic partnerships
            with diverse stakeholders, leveraging resources and expertise for
            collective impact.
            <br />- Stakeholder mapping and engagement: Comprehensive analyses
            to identify key influencers and develop tailored engagement
            strategies.
            <br />- Coalition building: Facilitating the formation of coalitions
            and networks to address complex challenges and foster collaboration.
          </span>
        </div>
        <div id="right" className="relative flex justify-start w-1/2 space-x-5">
          <div className="h-[10vh] w-[10vh] bg-violet-500 relative z-10 square" />
          <img
            src="/images/png/services-two.png"
            alt=""
            className="h-[20vw] right-two absolute z-20"
          />
        </div>
      </div>
      <div id="imgLeft" className="flex w-full">
        <div id="left" className="flex justify-center w-1/2 left-three">
          <img
            src="/images/png/services-three.png"
            alt=""
            className="h-[20vw] image"
          />
        </div>
        <div
          id="right"
          className="flex flex-col items-start justify-center w-1/2 p-10 right-three"
        >
          <span className={`font-extrabold text-[26px]`}>
            Public-Private Partnerships (PPPs)
          </span>
          <span className={`flex items-center justify-center text-left`}>
            - PPP feasibility studies: Detailed assessments to determine the
            viability of PPPs, identifying risks and opportunities.
            <br />
            - PPP project design and management: Support in developing robust
            PPP frameworks, structuring agreements, and providing oversight.
            <br />- Capacity building for PPPs: Training programs and workshops
            to enhance understanding of PPP concepts, roles, and
            responsibilities.
          </span>
        </div>
      </div>
      <div id="imgRight" className="flex w-full">
        <div
          id="left"
          className="relative flex flex-col items-end justify-center w-1/2 p-10 left-four"
        >
          <div className="relative h-[5vh] w-[5vh] rounded-full bg-lime-500 circle" />
          <span className={`font-extrabold text-[26px]`}>
            Relations and Advocacy
          </span>
          <span className={`flex items-center justify-center text-right`}>
            - Government engagement strategies: Developing comprehensive
            strategies to engage with governmental entities and navigate
            regulatory environments.
            <br />
            - Stakeholder relations: Building effective relationships with
            stakeholders across sectors to enhance collaboration and drive
            impact.
            <br />- Advocacy campaigns: Designing and implementing targeted
            advocacy campaigns to raise awareness and drive policy change.
          </span>
        </div>
        <div id="right" className="flex justify-center w-1/2 right-four">
          <img
            src="/images/png/services-four.png"
            alt=""
            className="h-[20vw]"
          />
        </div>
      </div>
      <div id="imgLeft" className="flex w-full">
        <div id="left" className="flex justify-center w-1/2">
          <img
            src="/images/png/services-five.png"
            alt=""
            className="h-[20vw] left-five"
          />
        </div>
        <div
          id="right"
          className="flex flex-col items-start justify-center w-1/2 p-10 right-five"
        >
          <span className={`font-extrabold text-[26px]`}>
            Monitoring, Evaluation, and Learning
          </span>
          <div className="w-full line-2 h-[10px] bg-amber-500 relative inline-block" />
          <span className={`flex items-center justify-center text-left`}>
            - Performance measurement frameworks: Designing and implementing
            monitoring and evaluation frameworks to assess program effectiveness
            and drive continuous improvement.
            <br />
            - Impact evaluations: Conducting rigorous evaluations to assess
            outcomes and impacts, generating evidence for decision-making.
            <br />- Learning and knowledge management: Facilitating learning
            processes, capturing best practices, and disseminating knowledge.
          </span>
        </div>
      </div>
      <div id="imgRight" className="flex w-full">
        <div
          id="left"
          className="flex flex-col items-end justify-center w-1/2 p-10 left-six"
        >
          <span className={`font-extrabold text-right text-[26px]`}>
            Digital Strategy Development and Adoption Support
          </span>
          <span className={`flex items-center justify-center text-right`}>
            - Digital strategy development: Assisting organizations in
            developing digital strategies aligned with their goals and
            objectives.
            <br />
            - Technology assessment and adoption: Evaluating technology
            solutions and guiding organizations in adopting innovative tools.
            <br />- Data-driven decision-making: Helping organizations leverage
            data to drive informed decision-making and achieve better outcomes.
          </span>
        </div>
        <div id="right" className="flex justify-center w-1/2 right-six">
          <div></div>
          <img
            src="/images/png/services-four.png"
            alt=""
            className="h-[20vw]"
          />
        </div>
      </div>
    </div>
  );
};
