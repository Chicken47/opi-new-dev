import React from "react";
import Footer from "../../components/Footer";
import SetApart from "./SetApart";
import AboutIntro from "./AboutShortText";
import AboutHero from "./AboutHero";
import FounderSection from "./FounderSection";
import MapSection from "./MapSection";

const AboutPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <AboutHero />
      <AboutIntro />
      <SetApart />
      <FounderSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
