import { Power3, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutIntro = () => {
  const ease = Power3.easeOut();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".aaaabout-about-image",
        {
          yPercent: 20,
          scale: 1,
        },
        {
          yPercent: -20,
          scale: 2,
          ease: ease,
          scrollTrigger: {
            trigger: ".aaaabout-about-image",
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
    <div className="w-full flex justify-center">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1366px] w-full">
        <div className="w-full h-[10vh] flex md:hidden items-center justify-between px-5 py-3">
          <img src="/images/png/Union.png" alt="" className="h-[20px]" />
          {showMenu}
          <div
            onClick={() => setShowMenu(!showMenu)}
            className=" cursor-pointer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
              alt=""
              className="h-[20px]"
            />
          </div>
        </div>
        <div
          className={
            showMenu
              ? "h-full bg-white flex md:hidden flex-col space-y-4 items-center justify-center"
              : "hidden"
          }
        >
          <span
            onClick={() => {
              setShowMenu(false);
              navigate("/");
            }}
            className="text-black font-mont text-[22px] font-bold"
          >
            Home
          </span>
          <span
            onClick={() => {
              setShowMenu(false);
              navigate("/about");
            }}
            className="text-black font-mont text-[22px] font-bold"
          >
            Who We Are
          </span>
          <span
            onClick={() => {
              setShowMenu(false);
              navigate("/services");
            }}
            className="text-black font-mont text-[22px] font-bold"
          >
            What We Do
          </span>
          <span
            onClick={() => {
              setShowMenu(false);
              navigate("/insights");
            }}
            className="text-black font-mont text-[22px] font-bold"
          >
            Insights
          </span>
          <span
            onClick={() => {
              setShowMenu(false);
              navigate("/contact");
            }}
            className="text-black font-mont text-[22px] font-bold"
          >
            Contact Us
          </span>
        </div>
        <div className="flex flex-row md:flex-col justify-center items-start md:w-1/2 max-w-[600px] md:pl-20 px-5 md:px-0">
          <span className="w-1/3 text-[22px] flex md:hidden pr-5 text-right font-extrabold font-inter text-ipink">
            {`About Us`}
          </span>
          <div className="flex flex-col md:w-2/3">
            <span className={`text-[18px] font-jose w-full`}>
              We are a dynamic consulting firm committed to driving positive
              change through innovative solutions and strategic partnerships.
              <br />
              <br />
              With our unique blend of expertise and passion, we empower
              organizations and governments to create meaningful impact and
              navigate complex challenges.
            </span>
            <div className="px-8 py-2 mt-10 font-bold text-white uppercase hidden md:flex justify-center transition-all bg-ipink border-2 border-ipink rounded cursor-pointer hover:font-bold hover:border-2 hover:rounded-lg">
              Check out more
            </div>
          </div>
        </div>
        <div className="md:w-1/2 hidden md:flex items-center justify-center mt-10 md:mt-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            className="object-cover w-4/5 my-20 object-center overflow-hidden h-full aaaabout-about-image"
          />
        </div>
        <div className="md:w-1/2 flex md:hidden items-center px-5 justify-center mt-10 md:mt-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            className="object-cover object-center overflow-hidden h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
