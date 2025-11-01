import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] w-screen aspect-video absolute text-white px-10 bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-4/12 py-6 text-md text-[14px]">{overview}</p>
      <div>
        <button className="bg-gray-100 font-bold text-black mr-2 py-2 px-6 rounded-lg cursor-pointer text-xl hover:bg-white/80">
          ▶ Play
        </button>
        <button className="bg-gray-500/50 text-white mr-2 py-2 px-6 rounded-lg cursor-pointer text-xl">
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
