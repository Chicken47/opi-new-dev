import React from "react";
import "./hoverCardOne.css";

const HoverCardOne = ({
  title,
  height,
  width,
  marginLeft,
  marginTop,
  subtitles,
  imageUrl,
  hoverColor,
}) => {
  const cardStyle = {
    height: height || "270px",
    width: width || "200px",
    marginLeft: marginLeft || "0",
    marginTop: marginTop || "0",
  };

  return (
    <div className="container bg-green-800 absolute">
      <div className="hover-one-box group" style={cardStyle}>
        <div className="hover-one-imgBx">
          <img src={imageUrl} alt="Card Image" />
        </div>
        <div
          className={`hover-one-content bg-[#ffffff00] group-hover:bg-ipink`}
        >
          <span className="flex flex-col justify-center w-full space-y-5 h-full">
            <span className="font-inter px-5 font-bold">{title}</span>
            <span className="font-jose px-5 text-[14px]">
              {subtitles ||
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HoverCardOne;
