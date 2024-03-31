import React from "react";
import "../VideoPlayer/VideoPlayer.css";
import video from "../../assets/educational video.mp4";

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closePlayer = () => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <>
      <div
        className={`video ${playState ? "" : "hide"}`}
        ref={player}
        onClick={closePlayer}
      >
        <video src={video} autoPlay muted controls />{" "}
      </div>
    </>
  );
};

export default VideoPlayer;
