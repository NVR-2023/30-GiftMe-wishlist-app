import { ReactNode } from "react";

type BasicButtonProps = {
  variant?: "full" | "outlined";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
};

const BasicButton = ({ variant = "outlined", size = "md", children }: BasicButtonProps) => {
  const sizeMap = new Map([
    ["sm", "w-[5rem]"],
    ["md", "w-24"],
    ["lg", "w-32"],
  ]);

  return (
    <div
      className={`${sizeMap.get(size)} h-9 rounded p-1 ${
        variant === "outlined" ? "border-2" : "bg-black text-yellow-200"
      } border-black`}>
      {children}
    </div>
  );
};

export default BasicButton;
