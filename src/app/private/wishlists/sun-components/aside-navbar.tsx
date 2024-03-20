import React, { FC } from "react";
import AsideHeading from "./aside-heading";
import AsideControls from "./aside-controls";

const AsideNavbar: FC = () => {
  return (
    <div className="">
      <AsideHeading />
      <AsideControls />
    </div>
  );
};

export default AsideNavbar;
