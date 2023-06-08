import React from "react";

const Newsletter = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <span className="w-1/5 font-sans font-bold transition-all cursor-pointer hover:scale-110 hover:underline">
        Subscribe to our newsletter
      </span>
      {/* <div className="px-8 py-2 font-bold text-[#0743f7] uppercase transition-all bg-gray-200 border-2 border-[#0743f7] rounded cursor-pointer hover:border-gray-300 hover:bg-[#0743f7] hover:text-white hover:font-bold hover:border-2 hover:rounded-lg">
          Subscribe
        </div> */}
    </div>
  );
};

export default Newsletter;
    