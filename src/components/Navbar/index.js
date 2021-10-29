import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.svg";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <>
      <header className={`header-desktop ${!show ? "visible" : ""}`}>
        <nav className="nav">
          <ul className="nav-list flex flex-wrap justify-center bold">
            <li className="flex justify-center mb3 mb4-ns logo-container">
              <NavLink exact to="/">
                {/* <img
                src={require(`../../images/logo.svg`)}
                alt="Blowbone-logo"
                className="logo-svg"
              /> */}
              </NavLink>
            </li>
            {["Home", "Products", "About", "Contact"].map((section) => (
              <li className="nav-item">
                <NavLink
                  exact
                  to={section === "Home" ? "/" : `/${section}`}
                  className="nav-link"
                  activeClassName="selected"
                  key={section}
                >
                  {section}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <header className="header">
        <nav className="nav">
          <span className="flex justify-center pt2 mb2 mb2-ns logo-container">
            <NavLink exact to="/">
              <img src={Logo} alt="Blowbone-logo" className="logo-svg" />
            </NavLink>
          </span>
          <ul className="nav-list flex flex-wrap justify-center bold">
            {["Home", "Products", "About", "Contact"].map((section) => (
              <li className="nav-item">
                <NavLink
                  exact
                  to={section === "Home" ? "/" : `/${section}`}
                  className="nav-link"
                  activeClassName="selected"
                  key={section}
                >
                  {section}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

{
  /* <div className="middle-section">
<div className="nav-links-container">
  <ul className="links-wrapper">
    {["Home", "Products", "About", "Contact"].map((section) => (
      <li className="link-item">
        <NavLink
          exact
          to={section === "Home" ? "/" : `/${section}`}
          className="link"
          activeClassName="selected"
        >
          {section}
        </NavLink>
      </li>
    ))}
  </ul>
</div>
</div> */
}
