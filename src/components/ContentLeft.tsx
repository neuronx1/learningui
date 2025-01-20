import React from "react";
import Video from "./Video";
import { useViewContext } from "../context/ViewContext";

interface ContentLeftProps {
  className?: string;
}

const ContentLeft: React.FC<ContentLeftProps> = ({ className }) => {
  const { videoTitle } = useViewContext();

  return (
    <div className={`flex flex-col border ${className}`}>
      <Video />
      <h2 className="mt-2 text-left text-2xl font-bold pl-4">{videoTitle}</h2>
    </div>
  );
};

export default ContentLeft;
