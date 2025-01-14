import React from "react";
import Link from "next/link";
import Image from "next/image";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
const FriendsRequest = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <p className="text-gray-500">Requests</p>
        <Link href="/" className="text-[#2E4053] text-sm">
          <ArrowRightOutlinedIcon />
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image
            src="https://images.pexels.com/photos/2885917/pexels-photo-2885917.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          ></Image>
          <p className="font-semibold truncate max-w-md text-ellipsis overflow-hidden whitespace-nowrap">
            Jacob ugochukwu
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <span className="bg-[#2E4053] text-white p-1 rounded-full cursor-pointer text-sm">
            <CheckOutlinedIcon />
          </span>
          <span className="bg-gray-200 text-gray-500 p-1 rounded-full cursor-pointer text-sm">
            <CloseOutlinedIcon />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image
            src="https://images.pexels.com/photos/7466767/pexels-photo-7466767.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          ></Image>
          <p className="font-semibold truncate max-w-md text-ellipsis overflow-hidden whitespace-nowrap">
            Bob stone
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <span className="bg-[#2E4053] text-white p-1 rounded-full cursor-pointer text-sm">
            <CheckOutlinedIcon />
          </span>
          <span className="bg-gray-200 text-gray-500 p-1 rounded-full cursor-pointer text-sm">
            <CloseOutlinedIcon />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Image
            src="https://images.pexels.com/photos/3220846/pexels-photo-3220846.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          ></Image>
          <p className="font-semibold truncate max-w-md text-ellipsis overflow-hidden whitespace-nowrap">
            Adams smith coker
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <span className="bg-[#2E4053] text-white p-1 rounded-full cursor-pointer text-xs">
            <CheckOutlinedIcon className="text-xs" />
          </span>
          <span className="bg-gray-200 text-gray-500 p-1 rounded-full cursor-pointer text-xs">
            <CloseOutlinedIcon className="text-xs" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FriendsRequest;
