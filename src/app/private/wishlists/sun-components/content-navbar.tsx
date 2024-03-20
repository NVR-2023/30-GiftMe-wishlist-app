import React , {FC} from "react"
import ContentHeading from "./content-heading";
import ContentControls from "./content-controls";

const ContentNavbar:FC = () => {
  return (
    <div className="h-full w-full black ">
        <div className=""><ContentHeading/></div>
        <div className=""><ContentControls/></div>
      
    </div>
  )
};

export default ContentNavbar;
