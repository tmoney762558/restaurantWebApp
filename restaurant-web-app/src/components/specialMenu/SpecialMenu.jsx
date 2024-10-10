import React from "react";
import "./specialMenu.css";
import spoonImg from "../../assets/spoon.png"

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu">
      <div className="app__specialMenu-header">
        <p>Menu That Fits Your Pallette</p>
        <img src={spoonImg}></img>
        <h1>Today&apos;s Special</h1>
      </div>
      <div className="app__specialMenu">
        
      </div>
    </div>
  );
};

export default SpecialMenu;
