import React from "react";
import chefImg from "../../assets/chef.png";
import spoonImg from "../../assets/spoon.png";
import quoteImg from "../../assets/quote.png";
import signatureImg from "../../assets/sign.png";
import "./chef.css";

const Chef = () => {
  return (
    <div>
      <div className="app__chef section__padding">
        <div className="app__chef-image">
          <img src={chefImg}></img>
        </div>
        <div className="app__chef-text">
          <h5>Chef&apos;s Word</h5>
          <img src={spoonImg}></img>
          <h2>What We Believe In</h2>
          <p>
            <img src={quoteImg}></img>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.
            Auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
          <h4>Kevin Luo</h4>
          <h6>Chef & Founder</h6>
          <img className="app__chef-text-signature" src={signatureImg}></img>
        </div>
      </div>
    </div>
  );
};

export default Chef;
