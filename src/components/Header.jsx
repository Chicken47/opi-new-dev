import React from "react";

const Header = () => {
  const cln = `font-extrabold text-white cursor-pointer`;

  return (
    <div className="w-full h-[7vh] absolute flex items-center bg-gray-950 justify-evenly">
      <span
        href="/"
        className={
          "flex items-center justify-center w-1/5 font-mono font-extrabold text-white"
        }
      >
        <img src="/images/png/HeaderLogo.png" className="h-[50px]" alt=""/>
        {/* Logo */}
      </span>
      <div
        id="buttons"
        className="z-50 flex items-center w-3/5 justify-evenly space-x-15"
      >
        <span href="/about" className={cln}>
          ABOUT US
        </span>
        <span href="/services" className={cln}>
          SERVICES
        </span>
        <span className={cln}>CONTACT US</span>
      </div>
      <div id="icobs" className="flex items-center w-1/5 justify-evenly">
        <span className={cln}>Tweet </span>
        <span className={cln}>LinkedIn</span>
      </div>
    </div>
  );
};

export default Header;
