import React from "react";
import "./hoverCard.css";

const HoverCard = ({ title, subtitle, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="info">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default HoverCard;
