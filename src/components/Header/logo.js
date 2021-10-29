import React from "react";
import { NavLink } from "react-router-dom";
import mainLogo from "../../images/logo.svg";

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <div className="logo-img">
        <NavLink exact to="/">
          <img src={mainLogo} alt="Blowbone-logo" className="logo-svg" />
        </NavLink>
      </div>
      <h2 className="logo-text">Blowbon</h2>
    </div>
  );
};

export default Logo;
