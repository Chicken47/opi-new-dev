import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full justify-center flex py-20">
      <div className="w-full max-w-[1366px] flex items-center flex-col">
        <span className="text-ipink font-extrabold text-[40px] font-inter">
          Contact Us
        </span>
        <span className="text-black font-extrabold w-1/2 text-center font-jose">
          Thank you for reaching out! We appreciate your interest. Kindly take a
          moment to fill out the form below, providing us with the necessary
          details. We look forward to assisting you further. Thank you!
        </span>
        <div className="p-5 w-4/5 border md:w-2/5 border-black flex flex-col mt-10">
          <span className="font-mont text-black mt-7">Name</span>
          <input
            type="text"
            className="px-3 py-1 border border-black mt-2"
            placeholder=""
          />
          <span className="font-mont text-black mt-10">Number</span>
          <input
            type="text"
            className="px-3 py-1 border border-black mt-2"
            placeholder=""
          />
          <span className="font-mont text-black mt-10">e-Mail</span>
          <input
            type="text"
            className="px-3 py-1 border border-black mt-2"
            placeholder=""
          />
          <span className="font-mont text-black mt-10">
            Comments on enquiry
          </span>
          <input
            type="text"
            className="px-3 py-1 border border-black mt-2"
            placeholder=""
          />
          <div className="px-5 py-2 mt-10 cursor-pointer hover:text-white hover:bg-black transition-all duration-500 border border-black font-mont text-center md:w-1/5">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
