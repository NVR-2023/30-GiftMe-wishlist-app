import { ReactNode } from "react";

type BasicBoxProps = {
  children: ReactNode;
  background?: string;
  color?: string;
};

const FormBox = ({ children, background = "currentColor" }: BasicBoxProps) => {
  return (
    <div
      className="">
      {children}
    </div>
  );
};

export default FormBox;

