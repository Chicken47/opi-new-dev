import React from "react";
import Footer from "../../components/Footer";
import TextImageSlide from "../../components/TextImageSlide";
import { ScrollSection } from "./ScrollSection";
import SetApart from "./SetApart";
import { AboutIntro } from "./AboutShortText";
import { FounderSection } from "./FounderSection";

const AboutPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <TextImageSlide text={"About Us"} bgColor={"bg-indigo-900"}/>
      <AboutIntro />
      <FounderSection />
      <ScrollSection />
      <SetApart />
      <Footer />
    </div>
  );
};

export default AboutPage;
