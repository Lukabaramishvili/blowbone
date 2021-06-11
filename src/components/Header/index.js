import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <div>
      <header className="header-desktop"></header>
      <header className="header">
        <nav className="nav">
          <span className="flex justify-center mb2 mb4-ns logo-container">
            <NavLink exact to="/">
              <img
                src={require(`../../images/logo.svg`)}
                alt="Blowbone-logo"
                className="logo-svg"
              />
            </NavLink>
          </span>
          <ul className="nav-list flex flex-wrap justify-center bold">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="selected"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className="nav-link"
                activeClassName="selected"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="selected"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="selected"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
