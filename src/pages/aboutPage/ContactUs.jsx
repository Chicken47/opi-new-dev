import React from "react";

const ContactUs = () => {
  return (
    <div className="flex items-center w-full px-40 my-[200px]">
      <div
        id="left"
        className="flex flex-col items-start justify-center w-1/2 p-10"
      >
        <span className={` font-extrabold`}>Contact Us</span>
        <span className={``}>
          Need to get in touch with us? Either fill out the form with yoour
          enquiry or send an email to contact@openimpact.global
        </span>
      </div>
      <div id="right" className="flex flex-col justify-center w-1/2">
        <div className="flex flex-col items-center w-full space-y-2">
          <input
            placeholder="Full Name"
            className="w-4/5 px-2 py-2 border border-black rounded"
          />
          <input
            placeholder="Email"
            className="w-4/5 px-2 py-2 border border-black rounded"
          />
          <input
            placeholder="What can we help you with?"
            className="w-4/5 px-2 py-2 border border-black rounded"
          />
          <button className="px-4 py-2 font-bold text-white transition-all border-2 rounded bg-violet-600 hover:bg-white hover:text-violet-600 border-violet-600">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
