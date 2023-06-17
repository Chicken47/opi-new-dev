import React, { useEffect, useRef } from "react";
import HoverCardOne from "../../components/HoverCardOne";
import { gsap, Power3 } from "gsap";
import { useNavigate } from "react-router-dom";
import TextHover from "../../components/TextHover";

const ContactHero = () => {
  const ease = Power3.easeInOut();
  let introRef = useRef(null);
  let logoRef = useRef(null);
  let header_item_one = useRef(null);
  let header_item_two = useRef(null);
  let header_item_three = useRef(null);
  let header_item_four = useRef(null);
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
        [hoverOne, hoverTwo, hoverThree],
        0.8,
        {
          y: -1200,
          skewX: 50,
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
      <div className="w-full h-screen max-w-[1366px] hidden md:flex justify-center bg-black">
        <div className="w-full h-screen max-w-[1366px] flex flex-col relative overflow-hidden main-hero-wrapper">
          <div className="w-full flex justify-between py-5 px-10">
            <div
              ref={(el) => (logoRef = el)}
              onClick={() => navigate("/")}
              className="cursor-pointer"
            >
              <img src="/images/png/Union.png" className="h-[50px]" />
            </div>
            <div className="flex items-center space-x-2">
              <div ref={(el) => (header_item_one = el)}>
                <TextHover text={"Who We Are"} path={"/about"} />
              </div>
              <div ref={(el) => (header_item_two = el)}>
                <TextHover text={"What We Do"} path={"/services"} />
              </div>
              <div ref={(el) => (header_item_three = el)}>
                <TextHover text={"Insights"} path={"/insights"} />
              </div>
              <div ref={(el) => (header_item_four = el)}>
                <TextHover text={"Connect With Us"} path={"/contact"} />
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full h-full py-5">
            <div className="w-2/5 flex flex-col items-start justify-center ml-20 overflow-hidden">
              <span
                ref={(el) => (lineOneRef = el)}
                className="font-extrabold text-[20px] font-inter md:text-[45px] text-left text-ipink"
              >
                Connect With Us
              </span>
              <p
                ref={(el) => (paraRef = el)}
                className="text-white max-w-[600px] font-jose text-[14px] md:text-[18px]  text-left mt-10"
              >
                We believe in sharing knowledge and empowering our readers with
                valuable information. Feel free to browse through our Insights
                page, read our articles, and engage in discussions through the
                comments section.
                <br />
                <br />
                Connect with us to warp to success.
              </p>
              {/* <button className="px-6 py-1 mt-[2vh] rounded hover:shadow-2xl hover:shadow-slate-800 transition-all border border-white bg-black text-white font-bold uppercase text-[14px]">
            About Us
          </button> */}
            </div>
            <div className="w-3/5 flex flex-col space-y-5 items-center justify-center">
              <div className="flex items-center justify-center">
                <div ref={(el) => (hoverOne = el)} className="h-auto">
                  <HoverCardOne
                    title={"Research Papers"}
                    subtitles={
                      "Our research papers offer comprehensive analyses, data-driven insights, and expert perspectives on various subjects. They provide valuable contributions to industry knowledge and guide informed decision-making."
                    }
                    width={300}
                    height={400}
                    marginLeft={-280}
                    marginTop={-220}
                    imageUrl={
                      "https://media3.giphy.com/media/sRHX9qwNKQaQB48RAM/giphy.gif?cid=ecf05e47cdh2wlc34qki4v9ofmz407hmx1q1sa1taomm5fy6&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                    }
                  />
                </div>
                <div ref={(el) => (hoverTwo = el)}>
                  <HoverCardOne
                    title={"Case Studies"}
                    subtitles={
                      "Our case studies showcase successful projects, highlighting challenges, strategies, and measurable outcomes. They offer practical insights and lessons learned for effective problem-solving."
                    }
                    width={280}
                    height={290}
                    marginTop={-330}
                    marginLeft={50}
                    imageUrl={
                      "https://media.giphy.com/media/xUA7aPctmikpUjqUmI/giphy.gif"
                    }
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div ref={(el) => (hoverThree = el)}>
                  <HoverCardOne
                    title={"Facts & Numbers"}
                    subtitles={
                      "Our facts and numbers section provides key statistics and trends relevant to different sectors. It offers accurate and up-to-date information for data-driven decision-making."
                    }
                    width={320}
                    height={290}
                    marginLeft={60}
                    marginTop={-30}
                    imageUrl={
                      "https://images.unsplash.com/photo-1630673470267-417e4d361129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
                    }
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

export default ContactHero;
