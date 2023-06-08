import React from "react";

export const AboutIntro = () => {
  return (
    <div className="flex flex-col items-start py-40 pl-40 bg-gray-200">
      <span className={` text-[22px] w-2/3`}>
        At OPI - Open for Policy and Impact, we offer a wide range of consulting
        services designed to address the complex challenges faced by
        organizations and governments. Our services are tailored to meet the
        unique needs of our clients, enabling them to achieve their goals, drive
        impact, and create sustainable change.
      </span>
      <span className={` text-[22px] w-2/3 mt-2`}>
        <br/>
        Our expertise spans across various sectors, including Health, FinTech,
        Climate, Gender equity, and more. Through our collaborative and
        evidence-based approach, we deliver practical solutions that drive
        positive outcomes and foster long-term growth.
      </span>
      {/* <div className="px-8 py-2 mt-10 font-bold text-indigo-800 uppercase transition-all bg-gray-200 border-2 border-indigo-800 rounded cursor-pointer hover:border-gray-300 hover:bg-indigo-800 hover:text-white hover:font-bold hover:border-2 hover:rounded-lg">
        Check out more
      </div> */}
    </div>
  );
};