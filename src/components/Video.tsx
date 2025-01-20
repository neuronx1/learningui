import React from "react";
import { useViewContext } from "../context/ViewContext";

const Video: React.FC = () => {
  const { toggleView } = useViewContext();

  return (
    <div className="w-full flex-grow flex items-center">
      <div className="w-full h-auto text-left text-[16px] text-darkgray font-inter relative">
        <img className="w-full h-auto object-cover" alt="" src="Frame.png" />
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center p-4">
          <button onClick={toggleView} className="bg-blue-500 text-white p-2 rounded">
            Expand
          </button>
          <span className="font-extrabold">4:01 / 6:24</span>
        </div>
      </div>
    </div>
  );
};

export default Video;
