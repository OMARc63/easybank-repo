import React from "react";
import "./HeroSection.css";
import mockup from "../images/image-mockups.png";
import desktop from "../images/bg-intro-desktop.svg";
import mobile from "../images/bg-intro-mobile.svg";
import Button from "./Button";

export default function HeroSection () {
  return (
    <div className="HeroSection">
      <div className="container">
        <div className="info">
          <h1 className="title">
            Next generation digital banking
          </h1>
          <p className="desc">
            Take your financial life online. Your Easybank account will be a one-stop-shop 
            for spending, saving, budgeting, investing, and much more.
          </p>
          <Button />
        </div>
        <div className="image">
          <div className="mockup">
            <img src={mockup} />
          </div>
          <div className="desktop"></div>
          <div className="mobile"></div>
        </div>
      </div>
    </div>
  )
}