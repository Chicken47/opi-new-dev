import React, { useEffect } from "react";
import "./providedServices.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const ProvidedServices = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
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
  }, []);
  return (
    <div>
      <div className="container">
        <h1 className="title">Our Projects</h1>

        <div className="gallery">
          <div className="gallery__col">
            <div className="gallery__item">
              <a href="#" className="gallery__link">
                <picture className="gallery__picture">
                  <img
                    className="gallery__img"
                    src="/images/png/services-one.png"
                    alt=""
                  />
                </picture>
              </a>

              <div className="gallery__description flex flex-col">
                <span className="font-extrabold text-[26px]">
                  Public Policy Development and Analysis
                </span>
                <span className="flex items-center justify-center text-left text-[16px]">
                  - Policy research and analysis: Rigorous research to analyze
                  policy landscapes, identify emerging trends, and develop
                  evidence-based recommendations. <br />
                  - Policy advocacy and engagement: Collaborative approaches to
                  influence policy outcomes, foster partnerships, and facilitate
                  inclusive decision-making processes.
                  <br />- Policy impact assessment: Evaluation of policy
                  effectiveness and impact, measuring alignment with
                  organizational objectives and societal needs.
                </span>
              </div>
            </div>

            <div className="gallery__item">
              <a href="#" className="gallery__link">
                <picture className="gallery__picture">
                  <img
                    className="gallery__img"
                    src="/images/png/services-two.png"
                    alt=""
                  />
                </picture>
              </a>

              <div className="gallery__description flex flex-col">
                <span className="font-extrabold text-[26px]">
                  Public Policy Development and Analysis
                </span>
                <span className="flex items-center justify-center text-left text-[16px]">
                  - Policy research and analysis: Rigorous research to analyze
                  policy landscapes, identify emerging trends, and develop
                  evidence-based recommendations. <br />
                  - Policy advocacy and engagement: Collaborative approaches to
                  influence policy outcomes, foster partnerships, and facilitate
                  inclusive decision-making processes.
                  <br />- Policy impact assessment: Evaluation of policy
                  effectiveness and impact, measuring alignment with
                  organizational objectives and societal needs.
                </span>
              </div>
            </div>

            <div className="gallery__item">
              <a href="#" className="gallery__link">
                <picture className="gallery__picture">
                  <img
                    className="gallery__img"
                    src="/images/png/services-three.png"
                    alt=""
                  />
                </picture>
              </a>

              <div className="gallery__description flex flex-col">
                <span className="font-extrabold text-[26px]">
                  Partnerships and Stakeholder Engagement
                </span>
                <span className="flex items-center justify-center text-left text-[16px]">
                  - Partnership development and management: Strategic
                  partnerships with diverse stakeholders, leveraging resources
                  and expertise for collective impact.
                  <br />- Stakeholder mapping and engagement: Comprehensive
                  analyses to identify key influencers and develop tailored
                  engagement strategies.
                  <br />- Coalition building: Facilitating the formation of
                  coalitions and networks to address complex challenges and
                  foster collaboration.
                </span>
              </div>
                 </div>
                 <div className="gallery__item">
              <a href="#" className="gallery__link">
                <picture className="gallery__picture">
                  <img
                    className="gallery__img"
                    src="/images/png/services-one.png"
                    alt=""
                  />
                </picture>
              </a>

              <div className="gallery__description flex flex-col">
                <span className="font-extrabold text-[26px]">
                  Capacity Building and Training
                </span>
                <span className="flex items-center justify-center text-left text-[16px]">
                  - Skill development programs: Designing and delivering
                  customized training programs to enhance organizational and
                  individual capacities.
                  <br />
                  - Workshops and seminars: Conducting interactive workshops and
                  seminars on various policy and impact-related topics.
                  <br />- Knowledge sharing platforms: Creating platforms for
                  knowledge exchange and learning, fostering communities of
                  practice.
                </span>
              </div>
            </div>
          </div>

          <div className="gallery__col">
            <div className="gallery__item">
              <a href="#" className="gallery__link">
                <picture className="gallery__picture">
                  <img
                    className="gallery__img"
                    src="/images/png/services-four.png"
                    alt=""
                  />
                </picture>
              </a>

              <div className="gallery__description flex flex-col">
                <span className="font-extrabold text-[26px]">
                  Public-Private Partnerships (PPPs)
                </span>
                <span className="flex items-center justify-center text-left text-[16px]">
                  - PPP feasibility studies: Detailed assessments to determine
                  the viability of PPPs, identifying risks and opportunities.
                  <br />
                  - PPP project design and management: Support in developing
                  robust PPP frameworks, structuring agreements, and providing
                  oversight.
                  <br />- Capacity building for PPPs: Training programs and
                  workshops to enhance understanding of PPP concepts, roles, and
                  responsibilities.
                </span>
              </div>
            </div>

            <div className="gallery__item">
              <a href="#" className="gallery__link">
                <picture className="gallery__picture">
                  <img
                    className="gallery__img"
                    src="/images/png/services-five.png"
                    alt=""
                  />
                </picture>
              </a>

              <div className="gallery__description flex flex-col">
                <span className="font-extrabold text-[26px]">
                  Relations and Advocacy
                </span>
                <span className="flex items-center justify-center text-left text-[16px]">
                  - Government engagement strategies: Developing comprehensive
                  strategies to engage with governmental entities and navigate
                  regulatory environments.
                  <br />
                  - Stakeholder relations: Building effective relationships with
                  stakeholders across sectors to enhance collaboration and drive
                  impact.
                  <br />- Advocacy campaigns: Designing and implementing
                  targeted advocacy campaigns to raise awareness and drive
                  policy change.
                </span>
              </div>
            </div>

            <div className="gallery__item">
              <a href="#" className="gallery__link">
                <picture className="gallery__picture">
                  <img
                    className="gallery__img"
                    src="/images/png/services-five.png"
                    alt=""
                  />
                </picture>
              </a>

              <div className="gallery__description flex flex-col">
                <span className="font-extrabold text-[26px]">
                  Monitoring, Evaluation, and Learning
                </span>
                <span className="flex items-center justify-center text-left text-[16px]">
                  - Performance measurement frameworks: Designing and
                  implementing monitoring and evaluation frameworks to assess
                  program effectiveness and drive continuous improvement.
                  <br />
                  - Impact evaluations: Conducting rigorous evaluations to
                  assess outcomes and impacts, generating evidence for
                  decision-making.
                  <br />- Learning and knowledge management: Facilitating
                  learning processes, capturing best practices, and
                  disseminating knowledge.
                </span>
              </div>
            </div>
            <div className="gallery__item">
              <a href="#" className="gallery__link">
                <picture className="gallery__picture">
                  <img
                    className="gallery__img"
                    src="/images/png/services-two.png"
                    alt=""
                  />
                </picture>
              </a>

              <div className="gallery__description flex flex-col">
                <span className="font-extrabold text-[26px]">
                  {" "}
                  Digital Transformation and Innovation
                </span>
                <span className="flex items-center justify-center text-left text-[16px]">
                  - Digital strategy development: Assisting organizations in
                  developing digital strategies aligned with their goals and
                  objectives.
                  <br />
                  - Technology assessment and adoption: Evaluating technology
                  solutions and guiding organizations in adopting innovative
                  tools.
                  <br />- Data-driven decision-making: Helping organizations
                  leverage data to drive informed decision-making and achieve
                  better outcomes.
                </span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvidedServices;
