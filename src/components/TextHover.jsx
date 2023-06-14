import React from "react";
import { useNavigate } from "react-router-dom";
import "./textHover.css";
const TextHover = ({ path, text, ref }) => {
  const navigate = useNavigate();
  return (
    <div ref={(el) => (ref = el)} onClick={() => navigate(path)}>
      <button className="text-hover-button px-5 py-2">
        <span className="circle1"></span>
        <span className="circle2"></span>
        <span className="circle3"></span>
        <span className="circle4"></span>
        <span className="circle5"></span>
        <span className="text font-mont">{text}</span>
      </button>
    </div>
  );
};

export default TextHover;
