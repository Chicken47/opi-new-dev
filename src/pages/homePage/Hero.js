import React from "react";
import HoverCard from "../../components/HoverCard";

const Hero = () => {
  return (
    <div className="w-full h-screen flex bg-gradient-to-br from-sky-600 to-sky-900 overflow-hidden">
      <div className="w-1/2 p-16 flex flex-col items-start justify-center">
        <span className="font-extrabold text-[32px] w-full text-white">
          Navigating Challenges
        </span>
        <span className="font-extrabold text-[32px] w-full text-white">
          Creating Impact
        </span>
        <p className="text-white">
          Driving Positive Change through Innovative Solutions and Strategic
          Partnerships: Empowering Organisations to Navigate Complex Challenges
        </p>
        <button className="px-6 py-1 mt-[2vh] rounded hover:shadow-2xl hover:shadow-slate-800 transition-all border border-white bg-black text-white font-bold uppercase text-[14px]">
          About Us
        </button>
      </div>
      <div className="w-1/2 h-full flex">
        <div className="flex flex-col">
          <HoverCard
            title={"Health"}
            subtitle={
              "We have extensive experience in the healthcare sector, working with government agencies, NGOs, and healthcare providers to address key challenges."
            }
            image={"/images/png/about-focus-one.png"}
          />
          <HoverCard
            title={"FinTech"}
            subtitle={
              "As technology continues to revolutionize the financial landscape, we help organizations navigate the complex world of financial technology."
            }
            image={"/images/png/about-focus-two.png"}
          />
        </div>
        <div className="flex flex-col">
          <HoverCard
            title={"Climate"}
            subtitle={
              "Addressing climate change requires comprehensive strategies and sustainable solutions."
            }
            image={"/images/png/about-focus-three.png"}
          />
          <HoverCard
            title={"Climate"}
            subtitle={
              "Addressing climate change requires comprehensive strategies and sustainable solutions."
            }
            image={"/images/png/about-focus-four.png"}
          />
          <HoverCard
            title={"Climate"}
            subtitle={
              "Addressing climate change requires comprehensive strategies and sustainable solutions."
            }
            image={"/images/png/about-focus-five.png"}
          />
        </div>
        <div className="flex flex-col justify-end ">
          <HoverCard
            title={"Health"}
            subtitle={
              "We have extensive experience in the healthcare sector, working with government agencies, NGOs, and healthcare providers to address key challenges."
            }
            image={"/images/png/about-focus-one.png"}
          />
          <HoverCard
            title={"FinTech"}
            subtitle={
              "As technology continues to revolutionize the financial landscape, we help organizations navigate the complex world of financial technology."
            }
            image={"/images/png/about-focus-two.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
