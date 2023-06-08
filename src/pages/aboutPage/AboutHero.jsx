import React from "react";

const AboutHero = () => {
  return (
    <div id="page-wrapper" className="relative w-screen h-screen">
      <div className="flex w-full h-full bg-black">
        <img
          src="/images/png/aboutBgImg.png"
          alt="hero_img"
          className="absolute inset-0 object-cover w-full h-full opacity-40"
        />
        <div className="flex flex-col items-center justify-center w-full h-full px-5 overflow-hidden md:px-20 ">
          <span className="font-sans font-bold text-[20px] md:text-[40px] lg:text-[55px]  overflow-auto text-gray-200 welcome-text">
            Orchestrating strategic brilliance to ignite innovation{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
