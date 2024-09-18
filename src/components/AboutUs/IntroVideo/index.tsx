"use client";
import React, { useRef, useState } from "react";
import { IoPlay } from "react-icons/io5";
import { PiPauseFill } from "react-icons/pi";

const IntroVideo = () => {
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideo = () => {
    setPlayVideo(!playVideo);

    if (playVideo) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  };

  return (
    <div className="w-full h-full relative">
      <video
        controls={false}
        ref={videoRef}
        muted
        loop
        className="w-full h-full object-cover"
      >
        <source src={"/intro.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
        <div
          className="size-[5.5rem] md:size-[7.5rem] bg-white bg-opacity-30 rounded-full p-4 cursor-pointer"
          onClick={handleVideo}
        >
          <div className="w-full h-full bg-[#E3B046] rounded-full flex items-center justify-center">
            {playVideo ? (
                <PiPauseFill className="text-[#ffffff] size-6 md:size-12" />
            ) : (
                <IoPlay className="text-[#ffffff] size-6 md:size-12" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroVideo;
