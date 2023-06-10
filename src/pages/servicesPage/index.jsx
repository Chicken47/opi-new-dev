import React from "react";
import { Services } from "./Services";
import ServicesLanding from "./Landing";
import Footer from "../../components/Footer";
import ProvidedServices from "./ProvidedServices";

const ServicesPage = () => {
  return (
    <div className="w-full">
      <ProvidedServices />
      <Footer />
    </div>
  );
};

export default ServicesPage;
