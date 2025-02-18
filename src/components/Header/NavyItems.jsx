import React from "react";
import { NAVBAR_LINKS } from "../../constants/text";
import "../../style/NavybarStyle.css";

const NavyItems = ({ onClick }) => {
  return (

      <nav className="navy__links">
        {NAVBAR_LINKS.map((link) => (
          <a key={link.text} href={link.href} onClick={onClick}>{link.text}</a>
        ))}
      </nav>

  );
};

export default NavyItems;
