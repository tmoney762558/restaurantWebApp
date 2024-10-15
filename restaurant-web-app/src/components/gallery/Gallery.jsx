import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import "./gallery.css";
import spoonImg from "../../assets/spoon.png";

const gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    }
    else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className="app__gallery">
      <div className="app__gallery-content">
        <h3>Instagram</h3>
        <img src={spoonImg}></img>
        <h2>Photo Gallery</h2>
        <p style={{ color: "#AAA", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button>View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images-container" ref={scrollRef}></div>
        <div className="app__gallery-images-arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          ></BsArrowLeftShort>
          <BsArrowRightShort className="gallery__arrow-icon"
            onClick={() => scroll("right")}></BsArrowRightShort>
        </div>
      </div>
    </div>
  );
};

export default gallery;
