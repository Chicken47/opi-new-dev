import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-black flex justify-center md:py-20 md:px-20 px-5 py-10">
      <div className="hidden md:flex w-full max-w-[1366px] justify-between items-center">
        <div className="h-full w-2/5 flex flex-col items-start space-y-3">
          <img
            src="/images/png/Union.png"
            className="h-[100px] object-cover w-[200px]"
          />
          <span className="text-white font-bold font-inter text-[24px]">
            Open for Policy & Impact
          </span>
          <span className="text-white font-jose w-[400px] text-left">
            Bridging sectors, disciplines, and stakeholders for a digital and
            inclusive future.
          </span>
        </div>
        <div className="h-full w-2/5 text-white font-bold space-y-3 justify-center cursor-pointer font-inter flex flex-col mx-8 px-10 pl-20">
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={() => navigate("/about")}>Who We Are</span>
          <span onClick={() => navigate("/services")}>What We Do</span>
          <span onClick={() => navigate("/insights")}>Insights</span>
          <span onClick={() => navigate("/contact")}>Connect With Us</span>
        </div>
        <div className="h-full w-2/5 flex flex-col">
          <span className="text-white font-inter text-[14px]">
            Subscribe to our newsletter.
          </span>
          <input
            type="text"
            className="border border-white px-3 text-[14px] py-2 mt-2 text-white bg-black w-[300px]"
            placeholder="Enter Email Address"
          />
          <div className="flex flex-col justify-start mt-4">
            <span className="text-white font-inter text-[14px]">
              Follow Us On
            </span>
            <div className="flex mt-2 space-x-4">
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-256.png"
                className="w-[40px]"
              />
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-256.png"
                className="w-[40px]"
              />
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-256.png"
                className="w-[40px]"
              />
            </div>
          </div>
          <span className="text-white font-oswald text-[10px] mt-5">
            © Open for Policy & Impact 2023
          </span>
        </div>
      </div>
      <div className="w-full flex md:hidden space-x-12">
        <div className="w-1/2 items-end justify-between flex flex-col">
          <img className="h-[60px]" src="/images/png/Union.png" />
          <span className="text-white text-[12px] font-bold font-inter">
            Open for Policy & Impact
          </span>
          <span className="text-white font-oswald text-[10px]">
            © Open for Policy & Impact 2023
          </span>
          <div className="flex flex-col justify-start mt-4">
            <span className="text-white font-inter text-[12px] text-right">
              Follow Us On
            </span>
            <div className="flex mt-2 space-x-4">
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-256.png"
                className="w-[30px]"
              />
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-256.png"
                className="w-[30px]"
              />
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-256.png"
                className="w-[30px]"
              />
            </div>
          </div>
        </div>
        <div className="h-full w-1/2 text-white font-bold space-y-3 justify-center text-[14px]  cursor-pointer font-mont flex flex-col">
          <span onClick={() => navigate("/")}>Home</span>
          <span onClick={() => navigate("/about")}>Who We Are</span>
          <span onClick={() => navigate("/services")}>What We Do</span>
          <span onClick={() => navigate("/insights")}>Insights</span>
          <span onClick={() => navigate("/contact")}>Connect With Us</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
