import React from "react";
import { useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import mealVid from "../../assets/meal.mp4";
import "./intro.css"

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        src={mealVid}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      ></video>
      <div className="app__video-overlay">
        <div className="app__video-overlay_circle" onClick={handleVideo}>
          {playVideo ? (
            <BsPauseFill color="#fff" font-size={30}></BsPauseFill>
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30}></BsFillPlayFill>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
