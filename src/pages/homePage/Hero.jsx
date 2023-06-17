import React, { useEffect, useRef, useState } from "react";
import { gsap, Power3 } from "gsap";
import { useNavigate } from "react-router-dom";
import HoverCardOne from "../../components/HoverCardOne";
import TextHover from "../../components/TextHover";

const Hero = () => {
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
  let lineOneRef = useRef(null);
  let lineTwoRef = useRef(null);
  let paraRef = useRef(null);
  let phoneMenuRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(introRef, 0.3, {
        yPercent: -100,
        opacity: 0.5,
        delay: 2,
        ease: ease,
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
        [hoverOne, hoverTwo, hoverThree, hoverFour],
        1.2,
        {
          y: -1200,
          skewX: 30,
          stagger: {
            amount: 0.2,
          },
          ease: ease,
        },
        "-=1"
      );
      tl.from(
        [lineOneRef, lineTwoRef, paraRef],
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
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const timeline = gsap.timeline({
  //       paused: true,
  //       reversed: true,
  //     });
  //     timeline.to(phoneMenuRef, {
  //       scaleY: 1,
  //       duration: 2,
  //     });
  //     if (showMenu) {
  //       timeline.play();
  //     } else {
  //       timeline.reverse();
  //     }
  //   });
  //   return () => ctx.revert();
  // }, [showMenu]);

  return (
    <div className="w-full bg-black">
      <div className="w-full h-screen hidden md:flex justify-center bg-gradient-to-r from-[#f96c9610] to-[#8bb4c720]">
        <div className="w-full h-screen max-w-[1366px] hidden md:flex flex-col relative overflow-hidden main-hero-wrapper">
          <div
            ref={(el) => (introRef = el)}
            className="bg-gradient-to-r from-[#f96c9600] to-[#8bb4c700] absolute w-full h-full top-0 left-0 z-50 flex flex-col items-center justify-center"
          >
            <img src="/images/png/Union.png" className="h-[150px]" />
            <span className="text-center font-inter text-white font-bold text-[20px]">
              Open for Policy & Impact
            </span>
          </div>
          <div className="w-full hidden md:flex justify-between py-5 px-10">
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
            <div className="w-full md:w-2/5 pl-5 md:pl-20 flex flex-col items-start justify-center overflow-hidden">
              <span
                ref={(el) => (lineOneRef = el)}
                className="font-extrabold font-inter text-[32px] md:text-[45px] text-left w-full text-white"
              >
                Open for
              </span>
              <span
                ref={(el) => (lineTwoRef = el)}
                className="font-extrabold text-[32px] font-inter md:text-[45px] text-left text-ipink"
              >
                Policy and Impact
              </span>
              <p
                ref={(el) => (paraRef = el)}
                className="text-white max-w-[600px] font-jose text-[16px] pr-10 md:pr-0 md:text-[18px] text-left mt-10"
              >
                Driving Positive Change through Innovative Solutions and
                Strategic Partnerships: Empowering Organisations to Navigate
                Complex Challenges
              </p>
              {/* <button className="px-6 py-1 mt-[2vh] rounded hover:shadow-2xl hover:shadow-slate-800 transition-all border border-white bg-black text-white font-bold uppercase text-[14px]">
            About Us
          </button> */}
            </div>
            <div className="w-3/5 hidden md:flex flex-col space-y-5 items-center justify-center">
              <div className="flex justify-center items-center">
                <div ref={(el) => (hoverOne = el)} className="h-auto">
                  <HoverCardOne
                    title={"Digital Economy"}
                    subtitles={
                      "Embrace the digital revolution with our transformative strategies and cutting-edge technologies. Unlock new opportunities, optimize operations, and stay ahead in the rapidly evolving digital economy."
                    }
                    width={280}
                    height={290}
                    marginLeft={-250}
                    marginTop={-320}
                    imageUrl={
                      "https://media4.giphy.com/media/1lCG3iiJB9w0NkqpU9/giphy.gif?cid=ecf05e47r2omoylzaz55e773wncamx3kc5fr8dcvtx5ya4ie&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                    }
                  />
                </div>
                <div ref={(el) => (hoverTwo = el)}>
                  <HoverCardOne
                    title={"Health"}
                    subtitles={
                      "Building healthier communities through innovative solutions and strategic partnerships. From policy design to healthcare system optimization, we empower organizations to enhance patient care and improve health outcomes."
                    }
                    width={280}
                    height={290}
                    marginTop={-290}
                    marginLeft={60}
                    imageUrl={
                      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
                    }
                  />
                </div>
              </div>
              <div className="flex justify-center items-center ">
                <div ref={(el) => (hoverThree = el)}>
                  <HoverCardOne
                    title={"Gender Equality"}
                    subtitles={
                      "Championing equality and inclusivity in all spheres of life. We work with organizations to develop gender-responsive policies, foster diverse and inclusive workplaces, and empower individuals to thrive."
                    }
                    width={280}
                    height={290}
                    marginLeft={-250}
                    marginTop={-20}
                    imageUrl={
                      "https://images.unsplash.com/photo-1550332781-aecd27f7434f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    }
                  />
                </div>
                <div ref={(el) => (hoverFour = el)}>
                  <HoverCardOne
                    title={"Climate Change"}
                    subtitles={
                      "Join the global movement towards a sustainable future. Our expertise in climate action helps organizations reduce their environmental footprint, adapt to change, and contribute to a greener, more resilient world."
                    }
                    width={280}
                    height={290}
                    marginLeft={60}
                    marginTop={10}
                    imageUrl={
                      "https://i.giphy.com/media/oj4HL6yoqbLRv7iUqI/giphy.webp"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full flex md:hidden flex-col h-screen bg-black z-50"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1618123069754-cd64c230a169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80)`,
        }}
      >
        {/* <div className="absolute bg-black w-full h-screen"></div> */}
        <div className="w-full h-[10vh] flex items-center justify-between px-5 py-3">
          <img
            onClick={() => navigate("/")}
            src="/images/png/Union.png"
            alt=""
            className="h-[40px]"
          />
          {showMenu}
          <div
            onClick={() => setShowMenu(!showMenu)}
            className=" cursor-pointer"
          >
            <img src="/images/png/MenuIcon.png" alt="" className="h-[20px]" />
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1618123069754-cd64c230a169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80)`,
          }}
          ref={(el) => (phoneMenuRef = el)}
          className={
            showMenu
              ? "h-full bg-black flex flex-col space-y-4 items-center justify-center"
              : "hidden"
          }
        >
          <span
            onClick={() => navigate("/")}
            className="text-white font-mont text-[22px] font-bold"
          >
            Home
          </span>
          <span
            onClick={() => navigate("/about")}
            className="text-white font-mont text-[22px] font-bold"
          >
            Who We Are
          </span>
          <span
            onClick={() => navigate("/services")}
            className="text-white font-mont text-[22px] font-bold"
          >
            What We Do
          </span>
          <span
            onClick={() => navigate("/insights")}
            className="text-white font-mont text-[22px] font-bold"
          >
            Insights
          </span>
          <span
            onClick={() => navigate("/contact")}
            className="text-white font-mont text-[22px] font-bold"
          >
            Contact Us
          </span>
        </div>
        <div
          className={
            showMenu ? "hidden" : "w-full  flex flex-col h-full justify-center"
          }
        >
          <span className="text-white font-inter text-[14px] w-full text-center">
            WELCOME TO OPI
          </span>
          <span className="text-ipink font-inter font-extrabold text-[28px] mt-2 w-full text-center">
            Open for Policy
            <br />& Impact
          </span>
          <span className="text-[12px] font-inter text-white px-16 mt-5 text-center">
            Bridging sectors, disciplines, and stakeholders for a digital and
            inclusive future.
          </span>
        </div>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="w-full text-center text-white font-inter text-[10px] pb-10"
        >
          Explore
        </span>
      </div>
    </div>
  );
};

export default Hero;
