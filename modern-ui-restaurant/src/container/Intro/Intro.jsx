import React, { useRef, useState } from "react";
import { BsPause } from "react-icons/bs";
import { BiPlay } from "react-icons/bi";
// BiPlay

import "./Intro.css";
import { meal } from "../../constants";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo(prevPlayVideo => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video src={meal} ref={vidRef} type="video/mp4" loop controls={false} />

      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo
            ? <BsPause color="#DCCA87" fontSize={30} />
            : <BiPlay color="#DCCA87" fontSize={30} />}
        </div>
      </div>
    </div>
  );
};

export default Intro;
