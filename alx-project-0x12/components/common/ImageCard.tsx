import React from "react";
import { ImageProps } from "@/interfaces";

const ImageCard: React.FC<ImageProps> = ({ imageUrl, prompt, action, width = "w-64", height = "h-64" }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-2 flex flex-col items-center cursor-pointer ${width} ${height}`}
      onClick={action}
      title={prompt}
    >
      <img src={imageUrl} alt={prompt} className="object-cover rounded-md mb-2 w-full h-full" />
      <p className="text-xs text-gray-600 truncate w-full text-center">{prompt}</p>
    </div>
  );
};

export default ImageCard;
