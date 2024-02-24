import { ReactNode } from "react";

type BasicButtonProps = {
  variant?: "full" | "outlined";
  children: ReactNode;
};

const BasicButton = ({ variant, children }: BasicButtonProps) => {
  return <div className="rounded p-1 border-2 border-black ">{children}</div>;
};

export default BasicButton;
