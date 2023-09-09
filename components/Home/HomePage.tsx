import React from "react";
import Navigation from "../Shared/Navigations/Navigation";
import Footer from "../Shared/Navigations/Footer";
import HeroSection from "./HeroSection";
import Universities from "./Universities";
import GetInsights from "./GetInsights";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Navigation />
      <HeroSection />
      <Universities />
      <GetInsights />
      <Footer />
    </div>
  );
};

export default HomePage;
