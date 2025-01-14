import React from "react";
import Image from "next/image";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
const Ad = ({ size }: { size: "md" | "sm" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex justify-between items-center text-gray-500 font-medium">
        <span>Sponsored Ad.</span>
        <span className="cursor-pointer">
          <MoreHorizOutlinedIcon />
        </span>
      </div>
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/34639/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            className="w-[100%] h-16 rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/34639/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={24}
            height={24}
            className="w-6 h-6 rounded-full object-cover"
          />
          <p className="text-blue-700 font-medium">Bigchef louge</p>
        </div>
        <p className={`${size === "sm" ? "text-xs" : "text-sm"}`}>
          {size === "sm"
            ? "lorem ipsum dolor sit amet"
            : size === "md"
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in quam et purus sollicitudin tincidunt. Nullam in quam et purus sollicit"
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit "}
        </p>
        <button className="w-full bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;
