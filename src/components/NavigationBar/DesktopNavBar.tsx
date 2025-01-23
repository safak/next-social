"use client";
import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import Link from "next/link";
import { Input } from "@/components/UI/input";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { SignedIn, UserButton } from "@clerk/nextjs";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const DesktopNavBar = () => {
  const notification = true;
  return (
    <div className="hidden md:grid grid-cols-5 py-5">
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
        <div className="relative">
          <div>
            <Input className="pl-8" placeholder="search..." />
          </div>
          <div className="text-white absolute top-1 left-2">
            <SearchOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="col-span-1 flex justify-end gap-4 items-center">
        <SignedIn>
          <Link href="/profile">
            <MessageOutlinedIcon className="text-[#F7F7F7] text-2xl" />
          </Link>
          <Link href="/profile">
            <NotificationsNoneOutlinedIcon className="text-[#F7F7F7] text-2xl relative" />
            {notification && (
              <div className="w-2 h-2 bg-red-500 rounded-full absolute top-6"></div>
            )}
          </Link>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default DesktopNavBar;
