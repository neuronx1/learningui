import React from "react";

interface DownloadButtonProps {
  label: string;
  filePath: string;
  icon: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ label, filePath, icon }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split('/').pop() || label;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="bg-blue-500 text-white p-2 flex items-center" style={{ borderRadius: '12px' }}>
      <img src={icon} alt="icon" className="w-6 h-6 mr-2" />
      {label}
    </button>
  );
};

export default DownloadButton;
