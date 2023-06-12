import React from "react";
import Hero from "./Hero";
import TextReveal from "./TextReveal";
import Footer from "../../components/Footer";
import ShortText from "./ShortText";
import PinLeftScrollRight from "./PinLeftScrollRight";
import PinRight from "./PinRight";
import PinLeftOne from "./PinLeftOne";

export const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <TextReveal />
      <ShortText />
      <PinLeftScrollRight />
      <PinRight />
      <PinLeftOne />
      <Footer />
    </div>
  );
};
