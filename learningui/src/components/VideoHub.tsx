import React from "react";
import { useViewContext } from "../context/ViewContext";

const VideoHub: React.FC = () => {
  const { videos, currentVideoIndex, setCurrentVideoIndex } = useViewContext();

  return (
    <div className="">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`flex items-center pb-2 pt-2 pl-4 pr-4  ${currentVideoIndex === index + 1 ? "bg-blue-500 text-white" : "text-black"}`}
          onClick={() => setCurrentVideoIndex(index + 1)}
        >
          <div className="text-lg font-bold mr-4">{index + 1}</div>
          <div className="flex items-center">
            <img src={video.videoFramePath} alt="Video frame" className="w-28 rounded-lg mr-4" />
            <h3 className="font-bold text-lg leading-tight">{video.videoTitle}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoHub;
