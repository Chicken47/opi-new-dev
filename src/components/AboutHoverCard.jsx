import React from "react";
import "./aboutHoverCard.css";

const AboutHoverCard = ({ imageUrl, cardColor, textColor, text }) => {
  return (
    <div
      className="about-hover-card-container hover-brightness-50"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="about-hover-card-content h-[300px]">
        <h1
          className={`font-bold font-oswald flex flex-col items-center w-full px-10 py-8 text-[20px] text-center rounded-xl shadow-xl shadow-slate-800 ${cardColor} ${textColor}`}
        >
          {text}
        </h1>
      </div>
    </div>
  );
};

export default AboutHoverCard;
