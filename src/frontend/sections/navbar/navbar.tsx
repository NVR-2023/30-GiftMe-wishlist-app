import React, { FC } from "react";
import Logo from "./sub-components/logo";
import Links from "./sub-components/links";
import Avatar from "./sub-components/avatar";

const Navbar: FC = () => {
  return (
    <nav className="flex h-full justify-between items-center px-3">
      <div>
        <Logo />
      </div>
      <div>
        <Links />
      </div>
      <div>
        <Avatar />
      </div>
    </nav>
  );
};

export default Navbar;
