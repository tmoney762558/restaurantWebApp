import React from "react";
import "./header.css";
import welcomeImg from "../../assets/welcome.png";
import spoonImg from "../../assets/spoon.png";

const Header = () => {
  return (
    <div className="app__header section__padding">
      <div className="app__header-main" id="home">
        <div className="app__header-main-content">
          <div className="app__header-sidewaystext">
            <p>#Bar</p>
            <p>#Gericht</p>
          </div>
          <div className="app__header-content">
            <h5>Chase The New Flavour</h5>
            <img src={spoonImg}></img>
            <h1>The Key To Fine Dining</h1>
            <p>
              Sit tellus lobortis sed senectus vivamus molestie. Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
              aliquam amet tellus{" "}
            </p>
            <a href="#specialMenu">Explore Menu</a>
          </div>
          <div className="app__header-image">
            <img src={welcomeImg}></img>
            <div className="app__header-scroll">
              <span></span>
              <p>Scroll</p>
            </div>
          </div>
        </div>
      </div>
      <div className="app__header-nav">
        <p>01</p>
        <span></span>
        <p>02</p>
        <p>03</p>
        <p>04</p>
      </div>
    </div>
  );
};

export default Header;
