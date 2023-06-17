import React from "react";
import Footer from "../../components/Footer";
import SetApart from "./SetApart";
import AboutIntro from "./AboutShortText";
import AboutHero from "./AboutHero";
import FounderSection from "./FounderSection";
import MapSection from "./MapSection";
import AboutLayout from "./AboutLayout";

const AboutPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <AboutHero />
      <AboutIntro />
      <MapSection />
      <AboutLayout />
      <SetApart />
      <FounderSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
