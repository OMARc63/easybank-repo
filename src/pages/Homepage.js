import react from "react";
import ArticlesSection from "../Components/ArticlesSection";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import WhySection from "../Components/WhySection";
import "./Homepage.css";

export default function Homepage () {
  return (
    <div className="Homepage">
      <Navbar />
      <HeroSection />
      <WhySection />
      <ArticlesSection />
      <Footer />
    </div>
  )
}