import React from "react";
import "./ArticlesSection.css";
import currency from "../images/image-currency.jpg";
import restaurant from "../images/image-restaurant.jpg";
import plane from "../images/image-plane.jpg";
import confetti from "../images/image-confetti.jpg";

export default function ArticlesSection () {
  return (
    <div className="ArticlesSection">
      <div className="container">
        <h2 className="title">Latest Articles</h2>
        <div className="articles">
          <div className="article">
            <div className="image">
              <img src={currency} />
            </div>
            <div className="info">
              <span className="author">By Claire Robinson</span>
              <h4 className="info-title">
                Receive money in any currency with no fees
              </h4>
              <p className="desc">
                The world is getting smaller and we’re becoming more mobile. So why should you be 
                forced to only receive money in a single …
              </p>
            </div>
          </div>
          <div className="article">
            <div className="image">
              <img src={restaurant} />
            </div>
            <div className="info">
              <span className="author">By Wilson Hutton</span>
              <h4 className="info-title">
                Treat yourself without worrying about money
              </h4>
              <p className="desc">
                Our simple budgeting feature allows you to separate out your spending and set 
                realistic limits each month. That means you …
              </p>
            </div>
          </div>
          <div className="article">
            <div className="image">
              <img src={plane} />
            </div>
            <div className="info">
              <span className="author">By Wilson Hutton</span>
              <h4 className="info-title">
                Take your Easybank card wherever you go
              </h4>
              <p className="desc">
                We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                while you’re abroad. We’ll even show you …
              </p>
            </div>
          </div>
          <div className="article">
            <div className="image">
              <img src={confetti} />
            </div>
            <div className="info">
              <span className="author">By Claire Robinson</span>
              <h4 className="info-title">
                Our invite-only Beta accounts are now live!
              </h4>
              <p className="desc">
                After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                It’s easy to request an invite through the site ...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}