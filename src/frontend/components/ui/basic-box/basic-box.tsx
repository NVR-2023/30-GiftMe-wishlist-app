import { BasicChildrenProp  } from "@/types/types";

const BasicBox = ({ children }: BasicChildrenProp) => {
  return (
    <div className="p-4 rounded-md border-2 border-black shadow-[0px_4px_0px_0px_rgba(0,0,0)] inline-block">
      {children}
    </div>
  );
};

export default BasicBox;
