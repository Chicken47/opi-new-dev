import React from "react";

const ShortText = () => {
  return (
    <div className="flex flex-col items-start py-40 pl-40 bg-gray-200">
      <span className={` text-[18px] w-2/3`}>
        Partnering with passionate leaders and visionary entrepreneurs, we apply
        creativity, strategy, design and data to re-invent businesses, drive
        growth and orchestrate customer centric transformation.
      </span>
      <span className={` text-[18px] w-2/3 mt-2`}>
        Together we strive to shape a regenerative future that is both
        sustainable and inclusive for businesses, people and planet.
      </span>
      <div className="px-8 py-2 mt-10 font-bold text-[#CE2273] uppercase transition-all bg-gray-200 border-2 border-[#CE2273] rounded cursor-pointer hover:border-gray-300 hover:bg-[#CE2273] hover:text-white hover:font-bold hover:border-2 hover:rounded-lg">
        Check out more
      </div>
    </div>
  );
};

export default ShortText;
