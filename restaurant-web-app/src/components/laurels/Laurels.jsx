import React from "react";
import logoImg from "../../assets/logo.png";
import spoonImg from "../../assets/spoon.png";
import award1Img from "../../assets/award01.png";
import award2Img from "../../assets/award02.png";
import award3Img from "../../assets/award03.png";
import award5Img from "../../assets/award05.png";
import laurelsImg from "../../assets/laurels.png";
import "./laurels.css";

const Laurels = () => {
  const awards = [
    {
      awardImg: award2Img,
      awardTitle: "Bib Gourmond",
      desc: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
      awardImg: award1Img,
      awardTitle: "Rising Star",
      desc: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
      awardImg: award5Img,
      awardTitle: "AA Hospitality",
      desc: "Lorem ipsum dolor sit amet, consectetur.",
    },
    {
      awardImg: award3Img,
      awardTitle: "Outstanding Chef",
      desc: "Lorem ipsum dolor sit amet, consectetur.",
    },
  ];
  return (
    <div className="app__laurels">
      <div className="app__laurels-logo">
        <img src={logoImg}></img>
      </div>
      <div className="app__laurels-content">
        <div className="app__laurels-content-text">
          <h5>Awards & Recognition</h5>
          <img src={spoonImg}></img>
          <h2>Our Laurels</h2>
          <div className="app__laurels-content-text-awards">
            {awards.map((award, index) => (
              <div className="app__laurels-content-text-award" key={index}>
                <img src={award.awardImg}></img>
                <div>
                  <h3>{award.awardTitle}</h3>
                  <p>{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="app__laurels-content-image">
          <img src={laurelsImg}></img>
        </div>
      </div>
    </div>
  );
};

export default Laurels;
