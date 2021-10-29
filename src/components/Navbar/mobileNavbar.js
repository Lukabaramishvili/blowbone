import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MenuToggle } from "./menuToggle";
import Logo from "../Header/logo";

const MobileNavbar = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    isOpen && (document.body.style.overflow = "hidden");
    !isOpen && (document.body.style.overflow = "");
  }, [isOpen]);

  return (
    <>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      <div
        id="mobile-nav"
        className={`${!isOpen ? "addTransition" : "removeTransition"}`}
      >
        <div className="internal">
          {["Home", "Products", "About", "Contact"].map((section) => (
            <NavLink
              exact
              to={section === "Home" ? "/" : `/${section}`}
              className="link"
              activeClassName="selected"
              key={section}
            >
              {section}
            </NavLink>
          ))}
        </div>
        <div className="external">
          <a
            href="https://www.instagram.com/blowbongeorgia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
