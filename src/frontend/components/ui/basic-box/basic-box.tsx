import { ReactNode } from "react";

type BasicBoxProps = {
    children: ReactNode;
  background?: string;
};

const BasicBox = ({ children , background="currentColor" }: BasicBoxProps) => {
  return (
    <div className={`${background} p-4 rounded-md border-2 border-black shadow-[0px_4px_0px_0px_rgba(0,0,0)] inline-block`}>
      {children}
    </div>
  );
};

export default BasicBox;
