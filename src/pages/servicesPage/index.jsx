import React from "react";
import Footer from "../../components/Footer";
import ProvidedServices from "./ProvidedServices";
import ServicesIntro from "./ServicesIntro";
import ServicesHero from "./ServicesHero";
import Approach from "./Approach";

const ServicesPage = () => {
  return (
    <div className="w-full">
      <ServicesHero />
      <ServicesIntro />
      <Approach />
      <ProvidedServices />
      <Footer />
    </div>
  );
};

export default ServicesPage;
