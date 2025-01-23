import React from "react";
import Image from "next/image";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import Link from "next/link";
const Birthdays = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <p className="text-gray-500">Birthdays</p>
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
          <button className="bg-[#2E4053] text-white p-2 rounded-lg text-xs">
            Celebrate
          </button>
        </div>
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
          <button className="bg-[#2E4053] text-white p-2 rounded-lg text-xs">
            Celebrate
          </button>
        </div>
      </div>
      <div className="p-4 bg-[#F7F7F7] rounded-lg flex items-center gap-4">
        <div>
          <CardGiftcardOutlinedIcon />
        </div>
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="font-bold text-gray-700">Upcoming birthdays</span>
          <span className="text-gray-500">
            See other 16 have upcoming birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthdays;
