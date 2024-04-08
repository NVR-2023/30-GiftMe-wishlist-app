
import React , {FC} from "react"
import AsideMyWishLists from "./aside-my-wish-lists";
import ExternalWishLists from "./aside-external-wishlists";

const AsideContent:FC = () => {
  return (
    <div className="overflow-y-auto">
   <AsideMyWishLists/>
   <ExternalWishLists/>
    </div>
  );
};

export default AsideContent;
