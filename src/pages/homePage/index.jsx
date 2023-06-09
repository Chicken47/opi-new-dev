import React from "react";
import Hero from "./Hero";
import TextReveal from "./TextReveal";
import PinRightScrollLeft from "./PinRightScrollLeft";
import Footer from "../../components/Footer";
import ShortText from "./ShortText";

export const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <TextReveal />
      <ShortText />
      <PinRightScrollLeft />
      <Footer />
    </div>
  );
};
