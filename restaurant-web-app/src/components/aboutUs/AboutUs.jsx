import React from "react";
import spoonImg from "../../assets/spoon.svg";
import knifeImg from "../../assets/knife.png";
import gImg from "../../assets/G.png";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div className="app__aboutus section__padding">
      <div className="app__aboutus-overlay">
        <img src={gImg}></img>
      </div>

      <div className="app__aboutus-containers">
        <div className="app__aboutus-containers-content align-right">
          <h2>About Us</h2>
          <img src={spoonImg}></img>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button>Know More</button>
        </div>
        <div className="app__aboutus-containers-image">
          <img src={knifeImg}></img>
        </div>
        <div className="app__aboutus-containers-content right">
          <h2>Our History</h2>
          <img src={spoonImg}></img>
          <p>
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button>Know More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
