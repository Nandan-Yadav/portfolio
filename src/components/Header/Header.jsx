import React, { useEffect, useState } from "react";
import "../../style/NavybarStyle.css";
import Handels from "./Handels";
import {
  NAVBAR_TITLE,
  NAVBAR_CLOSE_ICON_ALT,
  NAVBAR_MENU_ICON_ALT,
  NAVBAR_LINKS,
} from "../../constants/text.js";

const Header = () => {
  const [enableMenuIcon, setEnableMenuIcon] = useState(
    window.innerWidth <= 768
  );
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setEnableMenuIcon(isMobile);
      if (!isMobile) {
        setShowMenu(false); // Close the mobile menu when resizing to desktop view
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="navy__header">
      <h1>{NAVBAR_TITLE}</h1>
      <div className="navy__items">
        <nav
          className={`navy__links ${
            showMenu && enableMenuIcon ? "menu-active" : ""
          }`}
        >
          {NAVBAR_LINKS.map((link) => (
            <a
              key={link.text}
              href={link.href}
              onClick={() => setShowMenu(false)}
            >
              {link.text}
            </a>
          ))}
        </nav>
        {!enableMenuIcon && <div className="vdivider"></div>}
        <div className="navy__right">
          <Handels />
          {enableMenuIcon && (
            <>
              {!showMenu ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="#9C9C9C"
                  className="navy__icons"
                  onClick={() => setShowMenu(true)}
                >
                  <title>{NAVBAR_MENU_ICON_ALT}</title>
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#9C9C9C"
                  className="navy__icons close-icon"
                  onClick={() => setShowMenu(false)}
                >
                  <title>{NAVBAR_CLOSE_ICON_ALT}</title>
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
