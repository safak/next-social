import React from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

const Navbar = () => {
  return (
    <div className="bg-[#2E4053] sticky top-0 z-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <DesktopNavBar />
      <MobileNavBar />
    </div>
  );
};

export default Navbar;
