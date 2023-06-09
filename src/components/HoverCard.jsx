import React from "react";
import "./hoverCard.css";

const HoverCard = ({
  title,
  subtitle,
  image,
  width,
  height,
  marginTop,
  marginLeft,
}) => {
  const cardStyle = {
    width: `${width}px`,
    height: `${height}px`,
    marginTop: `${marginTop}px`,
    marginLeft: `${marginLeft}px`,
  };

  return (
    <div className="card" style={cardStyle}>
      <img src={image} alt={title} />
      <div className="info">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default HoverCard;
