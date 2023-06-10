import React from "react";
import Hero from "./Hero";
import TextReveal from "./TextReveal";
import PinRightScrollLeft from "./PinRightScrollLeft";
import Footer from "../../components/Footer";
import ShortText from "./ShortText";
// import OurApproach from "./OurApproach";

export const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <TextReveal />
      <ShortText />
      <PinRightScrollLeft />
      {/* <OurApproach /> */}
      <Footer />
    </div>
  );
};
