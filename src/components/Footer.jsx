import React from "react";

const Footer = () => {
  return (
    // <div className="flex justify-start py-20 bg-gray-950">
    //   <div className="flex flex-col items-center w-1/3 px-20 pt-10 space-y-3 item-start">
    //     <img
    //       src="/images/png/Union.png"
    //       className="h-[10vh] object-contain"
    //       alt=""
    //     />
    //     <span className={`text-white font-bold`}>Open for Policy & Impact</span>
    //   </div>
    //   <div className="flex items-center w-2/3 justify-evenly">
    //     <div className="flex flex-col w-1/2 space-y-3 item-start">
    //       <span className={`text-white font-bold`}>About Us</span>
    //       <span className={`text-white font-bold`}>Services</span>
    //       <span className={`text-white font-bold`}>Contact Us</span>
    //     </div>
    //     <div className="flex flex-col w-1/2 space-y-3 item-start">
    //       <span className={`text-white font-bold`}>
    //         Bridging sectors, disciplines, and stakeholders for a digital and
    //         inclusive future.
    //       </span>
    //     </div>
    //   </div>
    // </div>
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
        <div className="w-full mx-10 h-[2px] bg-white my-5" />
        <div className="w-full flex flex-col md:flex-row  items-center space-y-1 md:space-y-0 justify-evenly md:py-5">
          <span className="text-white font-inter font-bold">Home</span>
          <span className="text-white font-inter font-bold">Who We Are</span>
          <span className="text-white font-inter font-bold">What We Do</span>
          <span className="text-white font-inter font-bold">Insights</span>
          <span className="text-white font-inter font-bold">
            Connect With Us
          </span>
        </div>
        <div className="w-full mx-10 h-[2px] bg-white mt-5" />
        <span className="text-white font-oswald text-[10px] mt-5">
          © Open for Policy & Impact 2023
        </span>
      </div>
    </div>
  );
};

export default Footer;
