import React, { useRef } from "react";
import Video from "../assets/video.mp4";
import Dodo from "../assets/dodo.mp4";

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen(); // Standard Fullscreen API
      } else if (videoRef.current.mozRequestFullScreen) {
        videoRef.current.mozRequestFullScreen(); // Firefox
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen(); // Safari
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen(); // Internet Explorer
      }
    }
  };
  return (
    <div className="flex w-[100%] mt-[12px] pb-[40px] relative justify-between">
      <div className="w-[30%] ">
        <div className="absolute top-[100px] left-[10px] pl-[15px]  w-[30%] flex  text-white ">
          <h1 className="text-[15px] text-[verdana] ">#african movies</h1>
        </div>
        <iframe
          src="https://drive.google.com/file/d/131y6U0_vTxvvK9aJDfI6GaMG762jUpn4/preview"
          ref={videoRef}
          controls
          autoPlay
          loop
          onClick={handleFullscreen}
          muted
          playsInline
          className=" rounded-2xl pointer w-[100%] h-[150px] object-cover"
        ></iframe>
      </div>
      <div className="w-[30%] ">
        <div className="absolute pl-[15px]  top-[100px] w-[30%] flex  text-white ">
          <h1 className="text-[15px] text-[verdana] ">#american movies</h1>
        </div>
        <iframe
          src="https://drive.google.com/file/d/131y6U0_vTxvvK9aJDfI6GaMG762jUpn4/preview"
          ref={videoRef}
          controls
          autoPlay
          loop
          onClick={handleFullscreen}
          muted
          playsInline
          className=" rounded-2xl pointer w-[100%] h-[150px] object-cover"
        ></iframe>
      </div>
      <div className="w-[30%] ">
        <div className="absolute top-[100px] left-[72%] pl-[15px]  w-[30%] flex  text-white ">
          <h1 className="text-[15px] text-[verdana] ">#indian movies</h1>
        </div>
        <iframe
          src="https://drive.google.com/file/d/131y6U0_vTxvvK9aJDfI6GaMG762jUpn4/preview"
          ref={videoRef}
          controls
          autoPlay
          loop
          onClick={handleFullscreen}
          muted
          playsInline
          className=" rounded-2xl pointer w-[100%] h-[150px] object-cover"
        ></iframe>
      </div>
    </div>
  );
};

export default BackgroundVideo;
