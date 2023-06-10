import React from "react";
import Footer from "../../components/Footer";
import SetApart from "./SetApart";
import AboutIntro from "./AboutShortText";
import AboutHero from "./AboutHero";
import FounderSection from "./FounderSection";

const AboutPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <AboutHero />
      <AboutIntro />
      <SetApart />
      <FounderSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
