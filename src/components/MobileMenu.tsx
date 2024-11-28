"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm transition-transform duration-300 ${
            isOpen ? "rotate-45" : "" 
          } origin-left`}
        ></div>
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm transition-transform duration-300 ${
            isOpen ? "-rotate-45" : ""
          } origin-left`}
        ></div>
      </div>
      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
          <Link href="/">Home</Link>
          <Link href="">Friends</Link>
          <Link href="">Groups</Link>
          <Link href="">Stories</Link>
          <Link href="">Login</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
