import React from "react";
import { Services } from "./Services";
import ServicesLanding from "./Landing";
import Footer from "../../components/Footer";
import ProvidedServices from "./ProvidedServices";
import ServicesIntro from "./ServicesIntro";
import ServicesHero from "./ServicesHero";

const ServicesPage = () => {
  return (
    <div className="w-full">
      <ServicesHero />
      <ServicesIntro />
      <ProvidedServices />
      <Footer />
    </div>
  );
};

export default ServicesPage;
