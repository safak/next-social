"use client";
import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import Link from "next/link";
import { Input } from "@/components/UI/input";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="md:hidden flex justify-between items-center py-3">
        <div>
          <p className="text-3xl font-bold text-[#F7F7F7]">Rant</p>
        </div>
        <div className="flex space-x-4">
          <AddCircleOutlineRoundedIcon className="text-[#F7F7F7] text-2xl" />
          <SearchOutlinedIcon className="text-[#F7F7F7] text-2xl" />
          <NotificationsNoneOutlinedIcon className="text-[#F7F7F7] text-2xl" />
          <AccountCircleOutlinedIcon className="text-[#F7F7F7] text-2xl" />
          <div onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <CloseOutlinedIcon className="text-[#F7F7F7] text-2xl ease-in-out duration-500" />
            ) : (
              <MenuOutlinedIcon className="text-[#F7F7F7] text-2xl ease-in-out duration-500" />
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute w-full h-screen left-0  bg-[#2E4053] p-4 ease-out duration-700">
          <div className="flex flex-col space-y-4">
            <Link
              href="/home"
              className="flex items-center space-x-2 text-[#F7F7F7]"
            >
              <HomeOutlinedIcon />
              <p>Home</p>
            </Link>
            <Link
              href="/explore"
              className="flex items-center space-x-2 text-[#F7F7F7]"
            >
              <Diversity3OutlinedIcon />
              <p>Explore</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavBar;
