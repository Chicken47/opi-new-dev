import React, { useEffect, useRef } from "react";
import HoverCardOne from "../../components/HoverCardOne";
import { gsap, Power3 } from "gsap";
import { useNavigate } from "react-router-dom";
import TextHover from "../../components/TextHover";

const ContactHero = () => {
  const ease = Power3.easeInOut();
  let introRefOne = useRef(null);
  let introRefTwo = useRef(null);
  let introRefThree = useRef(null);
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
      tl.to([introRefThree, introRefTwo, introRefOne], 0.5, {
        xPercent: 100,
        duration: 1,
        stagger: {
          amount: 0.2,
        },
      });
      tl.from(logoRef, 0.2, {
        y: -100,
        ease: ease,
      });
      tl.from(
        [header_item_one, header_item_two, header_item_three, header_item_four],
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
    <div className="w-full flex justify-center overflow-hidden bg-black">
      <div
        ref={(el) => (introRefOne = el)}
        className="absolute w-full hidden md:flex h-full top-0 left-0 bg-oblue"
      />
      <div
        ref={(el) => (introRefTwo = el)}
        className="absolute w-full hidden md:flex h-full top-0 left-0 bg-pblue"
      />
      <div
        ref={(el) => (introRefThree = el)}
        className="absolute w-full hidden md:flex h-full top-0 left-0 bg-ipink"
      />
      <div className="w-full h-screen max-w-[1366px] hidden md:flex justify-center bg-black">
        <div className="w-full h-screen max-w-[1366px] flex flex-col relative overflow-hidden main-hero-wrapper">
          <div className="w-full flex justify-between py-5 px-10">
            <div
              ref={(el) => (logoRef = el)}
              onClick={() => navigate("/")}
              className="cursor-pointer"
            >
              <img src="/images/png/Union.png" className="h-[70px]" />
            </div>
            <div className="flex text-white font-inter font-bold items-center space-x-10">
              <div
                onClick={() => navigate("/about")}
                ref={(el) => (header_item_one = el)}
              >
                <span className="cursor-pointer">Who We Are</span>
              </div>
              <div
                onClick={() => navigate("/services")}
                ref={(el) => (header_item_two = el)}
              >
                <span className="cursor-pointer">What We Do</span>
              </div>
              <div
                onClick={() => navigate("/insights")}
                ref={(el) => (header_item_three = el)}
              >
                <span className="cursor-pointer">Insights</span>
              </div>
              <div
                onClick={() => navigate("/contact")}
                ref={(el) => (header_item_four = el)}
              >
                <span className="cursor-pointer">Connect With Us</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full h-full py-5">
            <div className="w-2/5 flex flex-col items-start justify-center ml-20 overflow-hidden">
              <span
                ref={(el) => (lineOneRef = el)}
                className="font-extrabold text-[20px] font-inter md:text-[45px] text-left text-ipink"
              >
                Be part of our network.
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
                    title={"Partnerships"}
                    subtitles={
                      "Partnerships are collaborative alliances formed between individuals or organizations with shared goals, pooling resources, expertise, and efforts to achieve mutual success. Successful partnerships rely on open communication, trust, and a shared vision, enabling partners to leverage each other's strengths and expand their reach in new markets or ventures. "
                    }
                    width={300}
                    height={400}
                    marginLeft={-280}
                    marginTop={-220}
                    imageUrl={
                      "https://images.unsplash.com/photo-1558522195-e1201b090344?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    }
                  />
                </div>
                <div ref={(el) => (hoverTwo = el)}>
                  <HoverCardOne
                    title={"Knowledge Sharing"}
                    subtitles={
                      "Knowledge sharing involves the exchange of information, insights, and experiences among individuals or organizations, fostering collaboration, learning, and innovation. By sharing knowledge, individuals and organizations tap into a broader pool of ideas and perspectives, enabling better-informed decision-making and creative problem-solving. "
                    }
                    width={280}
                    height={290}
                    marginTop={-330}
                    marginLeft={50}
                    imageUrl={
                      "https://images.unsplash.com/photo-1609619385076-36a873425636?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                    }
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div ref={(el) => (hoverThree = el)}>
                  <HoverCardOne
                    title={"Consulting"}
                    subtitles={
                      "Knowledge sharing involves the exchange of information, insights, and experiences among individuals or organizations, fostering collaboration, learning, and innovation. By sharing knowledge, individuals and organizations tap into a broader pool of ideas and perspectives, enabling better-informed decision-making and creative problem-solving. "
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
