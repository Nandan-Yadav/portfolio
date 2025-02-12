import React from "react";
import { NAVBAR_LINKS } from "../../constants/text";
import "../../style/NavybarStyle.css";

const NavyItems = () => {
  return (
    <>
      <nav className="navy__links">
        {NAVBAR_LINKS.map((link) => (
          <a key={link.text} href={link.href}>{link.text}</a>
        ))}
      </nav>
      <div className="vdivider"></div>
    </>
  );
};

export default NavyItems;