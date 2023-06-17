import React from "react";
import "./cardHoverTwo.css";

const CardHoverTwo = ({ title, subtitle }) => {
  return (
    <div className="hover-card-two-card">
      <div className="hover-card-two-content">
        <p className="heading font-bold font-inter text-oblue md:text-[24px]">
          {title}
        </p>
        <p className="para font-jose text-black text-[14px] md:text-[16px]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default CardHoverTwo;
