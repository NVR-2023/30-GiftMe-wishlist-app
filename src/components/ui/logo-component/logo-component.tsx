import React, { FC } from "react";
import Link from "next/link";
import LogoIcon from "@/components/icons/logo-icon";

const LogoComponent: FC = () => {
  return (
    <Link href="/">
      <LogoIcon scale={0.45} color={"#86198f"} />
    </Link>
  );
};

export default LogoComponent;
