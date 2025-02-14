import React from "react";
import "./video.css";

const Video = ({ video, videotitle, setSeeVideo }) => {
  return (
    <div className="video_holder ">
      <i
        onClick={() => {
          setSeeVideo(false);
        }}
        className="fas fa-times"
      ></i>
      <iframe
        src={`${video}?autoplay=1`}
        title={videotitle}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        
      ></iframe>
    </div>
  );
};

export default Video;
