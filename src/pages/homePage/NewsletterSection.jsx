import React from "react";
import TextSlide from "./TextSlide";
import { TextSlideRightLeft } from "./TextSlideRightLeft";

const NewsletterSection = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col max-w-[1366px]">
        <TextSlide />
        <TextSlideRightLeft />
      </div>
    </div>
  );
};

export default NewsletterSection;
