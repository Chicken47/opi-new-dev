import React from "react";
import "./cardHoverTwo.css";

const CardHoverTwo = ({ title, subtitle }) => {
  return (
    <div className="hover-card-two-card">
      <div className="hover-card-two-content">
        <p className="heading font-bold font-inter text-oblue text-[24px]">
          {title}
        </p>
        <p className="para font-jose text-black">{subtitle}</p>
      </div>
    </div>
  );
};

export default CardHoverTwo;
