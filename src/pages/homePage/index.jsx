import React from "react";
import Hero from "./Hero";
import TextReveal from "./TextReveal";
import Footer from "../../components/Footer";
import ShortText from "./ShortText";
import PinLeftScrollRight from "./PinLeftScrollRight";
import PinRight from "./PinRight";
import PinLeftOne from "./PinLeftOne";
import PinSectionsPhone from "./PinSectionsPhone";

export const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <TextReveal />
      <ShortText />
      <div className="flex md:hidden">
        <PinSectionsPhone />
      </div>
      <div className="w-full hidden md:flex flex-col">
        <PinLeftScrollRight />
        <PinRight />
        <PinLeftOne />
      </div>
      {/* <Footer /> */}
    </div>
  );
};
