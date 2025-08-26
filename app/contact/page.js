import React from "react";
import Navbar from "@/app/components/Navbar";
import ContactHero from "@/app/components/ContactPage/ContactHero";
import ContactForm from "@/app/components/ContactPage/ContactForm";
import DirectContactInfo from "@/app/components/ContactPage/DirectContactInfo";
import SocialMediaLinks from "@/app/components/ContactPage/SocialMediaLinks";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <DirectContactInfo />
      <SocialMediaLinks />
    </main>
  );
};

export default ContactPage;
