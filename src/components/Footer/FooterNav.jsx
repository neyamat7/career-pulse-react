import React from "react";
import { Link } from "react-router";

const FooterNav = ({ navs, title }) => { 
  return (
    <div>
      <h1 className="text-xl font-semibold">{title}</h1>
      <ul className="text-gray-400 mt-2 flex flex-col gap-1">
        {navs.map((navLink) => (
          <li key={navLink}>
            <Link>{navLink}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNav;
