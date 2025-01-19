import React from "react";
import Video from "./Video";
import AIAssistant from "./AIAssistant";
import LinkedKnowledge from "./LinkedKnowledge";
import Summary from "./Summary";
import Comments from "./Comments";
import VideoHub from "./VideoHub";

const MacBookPro16MainScreen: React.FC = () => {
  return (
    <div className="w-full relative bg-white h-[1117px] overflow-hidden text-left text-base text-black font-inter">
      <div className="flex">
        <div className="flex-grow">
          <Video />
        </div>
        <div className="flex flex-col w-[503px]">
          <VideoHub />
          <AIAssistant knowledgePage={false} />
        </div>
      </div>
      <div className="flex">
        <LinkedKnowledge />
        <Comments knowledgePage={false} />
        <Summary />
      </div>
    </div>
  );
};

export default MacBookPro16MainScreen;
