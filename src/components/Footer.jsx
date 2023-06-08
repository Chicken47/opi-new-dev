import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-start py-20 bg-gray-950">
      <div className="flex flex-col items-center w-1/3 px-20 pt-10 space-y-3 item-start">
        <img
          src="/images/png/Union.png"
          className="h-[10vh] object-contain"
          alt=""
        />
        <span className={`text-white font-bold`}>
          Open for Policy & Impact
        </span>
      </div>
      <div className="flex items-center w-2/3 justify-evenly">
        <div className="flex flex-col w-1/2 space-y-3 item-start">
          <span className={`text-white font-bold`}>
            About Us
          </span>
          <span className={`text-white font-bold`}>
            Services
          </span>
          <span className={`text-white font-bold`}>
            Contact Us
          </span>
        </div>
        <div className="flex flex-col w-1/2 space-y-3 item-start">
          <span className={`text-white font-bold`}>
            Bridging sectors, disciplines, and stakeholders for a digital and
            inclusive future.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
