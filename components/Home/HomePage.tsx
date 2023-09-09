import React from "react";
import Navigation from "../Shared/Navigations/Navigation";
import Footer from "../Shared/Navigations/Footer";
import HeroSection from "./HeroSection";
import Universities from "./Universities";
import GetInsights from "./GetInsights";
import Reasearch from "./Reasearch";
import Services from "./Services/Services";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Navigation />
      <HeroSection />
      <Universities />
      <GetInsights />
      <Reasearch />
      <Services />
      <Footer />
    </div>
  );
};

export default HomePage;
