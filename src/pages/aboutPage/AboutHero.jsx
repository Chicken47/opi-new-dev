import React, { useEffect, useRef } from "react";
import HoverCardOne from "../../components/HoverCardOne";
import { gsap, Power3 } from "gsap";
import { useNavigate } from "react-router-dom";

const AboutHero = () => {
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
        1.2,
        {
          y: 450,
          opacity: 0,
          skewX: -30,
          stagger: {
            amount: 0.2,
          },
          ease: ease,
        },
        "-=1"
      );
      tl.from(
        [lineTwoRef, paraRef],
        0.5,
        {
          y: 50,
          ease: ease,
          opacity: 0,
          stagger: {
            amount: 0.2,
          },
        },
        "-=0.5"
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-screen flex justify-center bg-black">
      <div className="w-full h-screen max-w-[1366px] flex flex-col relative overflow-hidden main-hero-wrapper">
        <div className="w-full flex justify-between py-5 px-10">
          <div
            ref={(el) => (logoRef = el)}
            onClick={() => navigate("/")}
            className="cursor-pointer"
          >
            <img src="/images/png/Union.png" className="h-[40px]" />
          </div>
          <div className="flex items-center space-x-16">
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
              href="/services"
              ref={(el) => (header_item_two = el)}
              className="text-white font-bold cursor-pointer"
            >
              Insights
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
          <div className="w-2/5 flex flex-col items-start justify-center overflow-hidden pl-20">
            <span
              ref={(el) => (lineTwoRef = el)}
              className="font-extrabold text-[20px] font-inter md:text-[45px] text-left text-ipink"
            >
              About Us
            </span>
            <p
              ref={(el) => (paraRef = el)}
              className="text-white max-w-[600px] font-jose text-[14px] md:text-[18px] text-left mt-10"
            >
              At OPI, we believe that policy and impact go hand in hand. Our
              multidisciplinary team brings together diverse backgrounds,
              ranging from policy analysis and advocacy to project management
              and technology, enabling us to tackle complex societal issues with
              <br />
              <br />a holistic approach. We leverage our deep understanding of
              local contexts and global best practices to design tailored
              strategies that address the most pressing challenges of our time.
            </p>
          </div>
          <div className="w-3/5 flex flex-col space-y-5 items-center justify-center">
            <div className="flex justify-center items-center">
              <div ref={(el) => (hoverOne = el)} className="h-auto">
                <HoverCardOne
                  title={"Improving Access to Information"}
                  subtitles={
                    "Improving access to information enhances knowledge sharing and empowers individuals with the tools to make informed decisions, fostering a more inclusive society."
                  }
                  width={350}
                  height={200}
                  marginLeft={-280}
                  marginTop={-250}
                  imageUrl={
                    "https://media0.giphy.com/media/GtYcMGjx8vy6TiKI3m/giphy.gif?cid=ecf05e47soxs9kqsimh57m34z4q4n0snt2pcozovb8nik9g9&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                  }
                />
              </div>
              <div ref={(el) => (hoverTwo = el)}>
                <HoverCardOne
                  title={"Inspiring Cross-Sectoral Communication"}
                  subtitles={
                    "Encouraging cross-sectoral communication facilitates collaboration between diverse stakeholders, fostering innovation, and addressing complex challenges through the exchange of ideas and expertise."
                  }
                  width={280}
                  height={290}
                  marginTop={-320}
                  marginLeft={120}
                  imageUrl={
                    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  }
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div ref={(el) => (hoverThree = el)}>
                <HoverCardOne
                  title={"Increasing Efficiency and Productivity"}
                  subtitles={
                    "Boosting efficiency and productivity streamlines processes, reduces waste, and optimizes resource allocation, leading to improved outcomes, higher productivity, and enhanced competitiveness in various sectors."
                  }
                  width={230}
                  height={290}
                  marginLeft={-300}
                  marginTop={-10}
                  imageUrl={
                    "https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  }
                />
              </div>
              <div ref={(el) => (hoverFour = el)}>
                <HoverCardOne
                  title={"Ensuring Financial and Digital Inclusion"}
                  subtitles={
                    "Promoting financial and digital inclusion enables equal access to financial services and digital technologies, empowering marginalized communities, fostering economic participation, and reducing inequalities."
                  }
                  width={230}
                  height={290}
                  marginLeft={-60}
                  marginTop={-10}
                  imageUrl={
                    "https://media1.giphy.com/media/l49JMVDvP8D38LHwI/giphy.gif?cid=ecf05e473adsdytqksfnbrzcddsem69memj6maek1ekcavm9&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                  }
                />
              </div>
              <div ref={(el) => (hoverFive = el)}>
                <HoverCardOne
                  title={"Enabling Climate Action"}
                  subtitles={
                    "Enabling climate action involves implementing measures to mitigate climate change, promoting renewable energy, reducing emissions, and adopting sustainable practices to safeguard the environment for future generations."
                  }
                  width={230}
                  height={290}
                  marginLeft={180}
                  marginTop={-10}
                  imageUrl={
                    "https://images.unsplash.com/photo-1570358934836-6802981e481e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
