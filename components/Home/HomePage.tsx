import React from "react";
import Navigation from "../Shared/Navigations/Navigation";
import Footer from "../Shared/Navigations/Footer";
import HeroSection from "./HeroSection";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Navigation />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default HomePage;
