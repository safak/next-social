"use client";
import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import Link from "next/link";
import { Input } from "@/components/UI/input";

const DesktopNavBar = () => {
  return (
    <div className="grid grid-cols-5 py-3">
      <div className="col-span-1">
        <Link href="/">
          <p className="text-3xl font-bold text-[#F7F7F7]">Rant</p>
        </Link>
      </div>
      <div className="col-span-3 flex justify-center items-center space-x-8">
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <HomeOutlinedIcon className="text-[#F7F7F7] text-2xl" />
            <p className="text-[#F7F7F7]">Posts</p>
          </Link>
        </div>
        <div>
          <Link href="/friends" className="flex items-center space-x-2">
            <Diversity3OutlinedIcon className="text-[#F7F7F7] text-2xl" />
            <p className="text-[#F7F7F7]">Friends</p>
          </Link>
        </div>
        <div>
          <Link href="/stories" className="flex items-center space-x-2">
            <AddCircleOutlineRoundedIcon className="text-[#F7F7F7] text-2xl" />
            <p className="text-[#F7F7F7]">Stories</p>
          </Link>
        </div>
        <Input />
      </div>
      <div className="col-span-1">Right</div>
    </div>
  );
};

export default DesktopNavBar;
