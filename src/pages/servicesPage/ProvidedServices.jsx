import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";

const ProvidedServices = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ease = Power3.easeOut();
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray(".provided-services-image").forEach((image) => {
        gsap.to(image, {
          scale: 1.2,
          scrollTrigger: {
            trigger: image,
            scrub: 5,
            endTrigger: image,
          },
        });
      });
      gsap.utils.toArray(".provided-services-text").forEach((image) => {
        gsap.from(image, {
          xPercent: 100,
          scrollTrigger: {
            trigger: image,
            end: "top 20%",
            scrub: 0.2,
            endTrigger: image,
          },
        });
      });
      gsap.utils.toArray(".provided-services-right-text").forEach((image) => {
        gsap.from(image, {
          xPercent: -100,
          scrollTrigger: {
            trigger: image,
            end: "top 10%",
            scrub: 0.2,
            endTrigger: image,
          },
        });
      });
    });
    return () => ctx.revert();
  });
  return (
    <div className="w-full flex justify-center bg-pblue">
      <div className="w-full max-w-[1366px] flex flex-col">
        <div className="w-full text-right flex items-center">
          <div className="w-1/2 flex flex-col items-center provided-services-text justify-center p-10">
            <span className="w-full font-extrabold font-inter text-[25px] text-ipink">
              Public Policy Development and Analysis
            </span>
            <span className="w-full font-jose mt-5 text-white">
              - Policy research and analysis: Rigorous research to analyze
              policy landscapes, identify emerging trends, and develop
              evidence-based recommendations. <br />
              - Policy advocacy and engagement: Collaborative approaches to
              influence policy outcomes, foster partnerships, and facilitate
              inclusive decision-making processes.
              <br />- Policy impact assessment: Evaluation of policy
              effectiveness and impact, measuring alignment with organizational
              objectives and societal needs.
            </span>
          </div>
          <div className="w-1/2 flex flex-col items-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80"
              className="object-cover provided-services-image"
            />
          </div>
        </div>
        <div className="w-full text-left flex flex-row-reverse items-center">
          <div className="w-1/2 flex flex-col provided-services-right-text items-start p-10">
            <span className="font-inter text-[25px] font-extrabold text-ipink">
              Partnerships and Stakeholder Engagement
            </span>
            <span className="font-jose text-white mt-5">
              - Partnership development and management: Strategic partnerships
              with diverse stakeholders, leveraging resources and expertise for
              collective impact.
              <br />- Stakeholder mapping and engagement: Comprehensive analyses
              to identify key influencers and develop tailored engagement
              strategies.
              <br />- Coalition building: Facilitating the formation of
              coalitions and networks to address complex challenges and foster
              collaboration.
            </span>
          </div>
          <div className="w-1/2 flex flex-col items-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1558522195-e1201b090344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              className="object-cover provided-services-image"
            />
          </div>
        </div>
        <div className="w-full text-right flex items-center">
          <div className="w-1/2 flex flex-col items-center provided-services-text justify-center p-10">
            <span className="w-full font-extrabold font-inter text-[25px] text-ipink">
              Public-Private Partnerships (PPPs):
            </span>
            <span className="w-full font-jose mt-5 text-white">
              - PPP feasibility studies: Detailed assessments to determine the
              viability of PPPs, identifying risks and opportunities.
              <br />
              - PPP project design and management: Support in developing robust
              PPP frameworks, structuring agreements, and providing oversight.
              <br />- Capacity building for PPPs: Training programs and
              workshops to enhance understanding of PPP concepts, roles, and
              responsibilities.
            </span>
          </div>
          <div className="w-1/2 flex flex-col items-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              className="object-cover provided-services-image"
            />
          </div>
        </div>
        <div className="w-full text-left flex flex-row-reverse items-center">
          <div className="w-1/2 flex flex-col provided-services-right-text items-start p-10">
            <span className="font-inter text-[25px] font-extrabold text-ipink">
              Relations and Advocacy
            </span>
            <span className="font-jose text-white mt-5">
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
          <div className="w-1/2 flex flex-col items-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523292562811-8fa7962a78c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              className="object-cover provided-services-image"
            />
          </div>
        </div>
        <div className="w-full text-right flex items-center">
          <div className="w-1/2 flex flex-col items-center provided-services-text justify-center p-10">
            <span className="w-full font-extrabold font-inter text-[25px] text-ipink">
              Monitoring, Evaluation, and Learning
            </span>
            <span className="w-full font-jose mt-5 text-white">
              - Performance measurement frameworks: Designing and implementing
              monitoring and evaluation frameworks to assess program
              effectiveness and drive continuous improvement.
              <br />
              - Impact evaluations: Conducting rigorous evaluations to assess
              outcomes and impacts, generating evidence for decision-making.
              <br />- Learning and knowledge management: Facilitating learning
              processes, capturing best practices, and disseminating knowledge.
            </span>
          </div>
          <div className="w-1/2 flex flex-col items-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              className="object-cover provided-services-image"
            />
          </div>
        </div>
        <div className="w-full text-left flex flex-row-reverse items-center">
          <div className="w-1/2 flex flex-col provided-services-right-text items-start p-10">
            <span className="font-inter text-[25px] font-extrabold text-ipink">
              Digital Transformation and Innovation
            </span>
            <span className="font-jose text-white mt-5">
              - Digital strategy development: Assisting organizations in
              developing digital strategies aligned with their goals and
              objectives.
              <br />
              - Technology assessment and adoption: Evaluating technology
              solutions and guiding organizations in adopting innovative tools.
              <br />- Data-driven decision-making: Helping organizations
              leverage data to drive informed decision-making and achieve better
              outcomes.
            </span>
          </div>
          <div className="w-1/2 flex flex-col items-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
              className="object-cover provided-services-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvidedServices;
