import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full justify-center flex flex-col md:py-20">
      <div className="w-full max-w-[1366px] flex items-center flex-col">
        <div className="w-full flex flex-col bg-white">
          <div className="w-full h-[10vh] flex md:hidden items-center justify-between px-5 py-3">
            <img
              onClick={() => navigate("/")}
              src="/images/png/Union.png"
              alt=""
              className="h-[40px]"
            />
            {showMenu}
            <div
              onClick={() => setShowMenu(!showMenu)}
              className=" cursor-pointer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
                alt=""
                className="h-[20px]"
              />
            </div>
          </div>
          <div
            className={
              showMenu
                ? "h-full bg-white flex md:hidden flex-col space-y-4 items-center justify-center"
                : "hidden"
            }
          >
            <span
              onClick={() => {
                setShowMenu(false);
                navigate("/");
              }}
              className="text-black font-mont text-[22px] font-bold"
            >
              Home
            </span>
            <span
              onClick={() => {
                setShowMenu(false);
                navigate("/about");
              }}
              className="text-black font-mont text-[22px] font-bold"
            >
              Who We Are
            </span>
            <span
              onClick={() => {
                setShowMenu(false);
                navigate("/services");
              }}
              className="text-black font-mont text-[22px] font-bold"
            >
              What We Do
            </span>
            <span
              onClick={() => {
                setShowMenu(false);
                navigate("/insights");
              }}
              className="text-black font-mont text-[22px] font-bold"
            >
              Insights
            </span>
            <span
              onClick={() => {
                setShowMenu(false);
                navigate("/contact");
              }}
              className="text-black font-mont text-[22px] font-bold"
            >
              Contact Us
            </span>
          </div>
          <div className="w-full  bg-white px-5 flex md:hidden flex-col py-10">
            <span className="font-extrabold text-ipink font-inter text-center text-[32px]">
              Be a part of our network.
            </span>
            <span className="text-black text-center font-jose text-[14px] px-5 mt-[3vh]">
              We believe in sharing knowledge and empowering our readers with
              valuable information. Feel free to browse through our Insights
              page, read our articles, and engage in discussions through the
              comments section.
              <br />
              Our insights page is regularly updated with new content. Make sure
              to visit frequently to stay informed about the latest insights
              from our experts.
            </span>
          </div>
        </div>
        <div className="p-5 w-4/5 border md:w-2/5 border-ipink flex flex-col mt-10">
          <span className="font-mont text-pblue mt-7">Name</span>
          <input
            type="text"
            className="px-3 py-1 border border-oblue mt-2"
            placeholder=""
          />
          <span className="font-mont text-pblue mt-10">Number</span>
          <input
            type="text"
            className="px-3 py-1 border border-oblue mt-2"
            placeholder=""
          />
          <span className="font-mont text-pblue mt-10">e-Mail</span>
          <input
            type="text"
            className="px-3 py-1 border border-oblue mt-2"
            placeholder=""
          />
          <span className="font-mont text-pblue mt-10">
            Comments on enquiry
          </span>
          <input
            type="text"
            className="px-3 py-1 border border-oblue mt-2"
            placeholder=""
          />
          <div className="px-5 py-2 mt-10 cursor-pointer hover:text-white hover:bg-pblue transition-all duration-500 border border-pblue font-mont text-center md:w-1/5">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
