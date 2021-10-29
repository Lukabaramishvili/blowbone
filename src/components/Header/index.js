import React from "react";
import Logo from "./logo";
import Navbar from "../Navbar";
import { DeviceSize } from "../../responsive";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "../Navbar/mobileNavbar";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <>
      {/* <div className="navbar-container"> */}
      {/* <div className="left-section">
          <Logo />
        </div> */}
      {!isMobile ? <Navbar /> : <MobileNavbar />}
      {/* </div> */}
    </>
  );
};

export default Header;
