import React from "react";

const PinSectionsPhone = () => {
  return (
    <div className="w-full flex flex-col p-10 bg-black">
      <div className="w-full h-auto flex flex-col bg-oblue p-5 rounded-t-xl">
        <span className="md:text-[50px] text-[28px] w-full text-left font-bold font-inter text-black pt-3 md:pt-0">
          Learn
        </span>
        <span className="font-jose w-full text-left text-[14px] md:text-[18px] text-pblue">
          We create innovative knowledge products and programs, empowering
          continuous learning and growth through research and evidence-based
          methodologies.
        </span>
      </div>
      <div className="w-full h-auto flex flex-col bg-pblue p-5">
        <span className="md:text-[50px] text-[28px] w-full text-left font-bold font-inter text-ipink   pt-3 md:pt-0">
          Involve
        </span>
        <span className="font-jose w-full text-left text-[14px] md:text-[18px] text-white">
          We create innovative knowledge products and programs, empowering
          continuous learning and growth through research and evidence-based
          methodologies.
        </span>
      </div>
      <div className="w-full h-auto flex flex-col bg-ipink p-5 rounded-b-xl">
        <span className="md:text-[50px] text-[28px] w-full text-left font-bold font-inter text-white pt-3 md:pt-0">
          Implement
        </span>
        <span className="font-jose w-full text-left text-[14px] md:text-[18px] text-black">
          We create innovative knowledge products and programs, empowering
          continuous learning and growth through research and evidence-based
          methodologies.
        </span>
      </div>
    </div>
  );
};

export default PinSectionsPhone;
