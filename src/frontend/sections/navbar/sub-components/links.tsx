import React , {FC} from "react"
import Link from "next/link";

const Links:FC = () => {
  return (
    <div className="flex justify-between items-center space-x-4">
      <Link href="/wishlists">Wishlists</Link>
      <Link href="/groups">Groups</Link>
      <Link href="/notifications">Notifications</Link>
    </div>
  )
};

export default Links;
