import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-black flex justify-center py-10 px-10">
      <div className="flex w-full max-w-[1366px] flex-col items-center">
        <img src="/images/png/Union.png" className="h-[80px] md:h-[100px]" />
        <span className="font-inter text-ipink text-[24px] font-extrabold w-full text-center mt-5">
          Open for Policy & Impact
        </span>
        <span className="font-inter text-[12px] md:text-[16px] text-center text-white">
          Bridging sectors, disciplines, and stakeholders for a digital and
          inclusive future.
        </span>
        <div className="w-full mx-10 h-[0.5px] bg-white mb-2 mt-10" />
        <div className="w-full flex flex-col md:flex-row  items-center space-y-1 md:space-y-0 justify-evenly md:py-5">
          <span
            onClick={() => navigate("/")}
            className="text-white font-inter cursor-pointer font-bold"
          >
            Home
          </span>
          <span
            onClick={() => navigate("/about")}
            className="text-white font-inter cursor-pointer font-bold"
          >
            Who We Are
          </span>
          <span
            onClick={() => navigate("/services")}
            className="text-white font-inter cursor-pointer font-bold"
          >
            What We Do
          </span>
          <span
            onClick={() => navigate("/insights")}
            className="text-white font-inter cursor-pointer font-bold"
          >
            Insights
          </span>
          <span
            onClick={() => navigate("/contact")}
            className="text-white font-inter cursor-pointer font-bold"
          >
            Connect With Us
          </span>
        </div>
        <div className="w-full mx-10 h-[0.5px] bg-white mt-2" />
        <span className="text-white font-oswald text-[10px] mt-5">
          © Open for Policy & Impact 2023
        </span>
      </div>
    </div>
  );
};

export default Footer;
