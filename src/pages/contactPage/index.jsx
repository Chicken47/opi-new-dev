import React from "react";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import Footer from "../../components/Footer";

const ContactPage = () => {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
