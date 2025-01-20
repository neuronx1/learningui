import React from "react";

interface TitleProps {
  title: string;
  icon: string;
}

const Title: React.FC<TitleProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center pt-4 pl-4 pr-4">
      <img src={icon} alt="Icon" className="w-8 h-8 mr-2" />
      <h1 className="text-2xl font-bold text-mediumslateblue">{title}</h1>
    </div>
  );
};

export default Title;
