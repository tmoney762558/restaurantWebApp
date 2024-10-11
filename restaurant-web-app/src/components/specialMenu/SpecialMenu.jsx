import React from "react";
import "./specialMenu.css";
import spoonImg from "../../assets/spoon.png";
import menuImg from "../../assets/menu.png";

const SpecialMenu = () => {
  const wineAndBeer = [
    { name: "Chapel Hill Shiraz", price: 56, details: "AU | Bottle" },
    { name: "Hamburger", price: 10, details: "AU | Bottle" },
    { name: "Hamburger", price: 10, details: "AU | Bottle" },
  ];

  const cocktails = [
    { name: "Aperol Spritz", price: 20, details: "AU | Bottle" },
    { name: "Aperol Spritz", price: 20, details: "AU | Bottle" },
  ];

  return (
    <div className="app__specialMenu section__padding">
      <div className="app__specialMenu-header">
        <p>Menu That Fits Your Pallette</p>
        <img src={spoonImg}></img>
        <h1>Today&apos;s Special</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu-winebeer">
          <h1>Wine & Beer</h1>
          {wineAndBeer.map((item, index) => (
            <>
              <div className="app__specialMenu-menu-item" key={index}>
                <p>{item.name}</p>
                <span className="menu-bar"></span>
                <p>${item.price}</p>
              </div>
              <p className="app__special-menu-details">{item.details}</p>
            </>
          ))}
        </div>
        <div className="app__specialMenu-image">
          <img src={menuImg}></img>
        </div>
        <div className="app__specialMenu-menu-cocktails">
          <h1>Cocktails</h1>
          {cocktails.map((item, index) => (
            <>
              <div className="app__specialMenu-menu-item" key={index}>
                <p>{item.name}</p>
                <div></div>
                <span className="menu-bar"></span>
                <p>${item.price}</p>
              </div>
              <p className="app__special-menu-details">{item.details}</p>
            </>
          ))}
        </div>
      </div>
      <div className="app__specialMenu-learnMore">
        <button>View More</button>
      </div>
    </div>
  );
};

export default SpecialMenu;
