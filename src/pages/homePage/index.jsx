import React from "react";
import Hero from "./Hero";
import TextReveal from "./TextReveal";
import PinRightScrollLeft from "./PinRightScrollLeft";
import Footer from "../../components/Footer";

export const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <TextReveal />
      <PinRightScrollLeft />
      <Footer />
    </div>
  );
};
