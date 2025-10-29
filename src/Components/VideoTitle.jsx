import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/2 py-6 text-md">{overview}</p>
      <div>
        <button className="bg-white font-bold text-black mr-2 py-2 px-6 rounded-lg cursor-pointer text-xl">
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
