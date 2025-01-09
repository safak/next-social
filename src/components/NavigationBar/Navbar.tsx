import React from "react";
import DesktopNavBar from "./DesktopNavBar";
import MobileNavBar from "./MobileNavBar";

const Navbar = () => {
  return (
    <div>
      <DesktopNavBar />
      <MobileNavBar />
    </div>
  );
};

export default Navbar;
