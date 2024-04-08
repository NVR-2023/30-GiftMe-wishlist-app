"use client";

import Navbar from "@/frontend/sections/navbar/navbar";
import ContentNavbar from "./sun-components/content-navbar";
import AsideNavbar from "./sun-components/aside-navbar";
import AsideContent from "./sun-components/aside-content.";


const Wishlists = () => {

  return (
    <div className=" w-screen h-screen bg-blue-800">
      <div className=" h-full w-full py-3 px-3 grid grid-cols-12 grid-rows-10 gap-x-1 gap-y-1">
        <header className="bg-red-500 col-span-12 row-span-1">
          <Navbar />
        </header>
        <div className="bg-green-500 col-span-2 row-span-1">
          <AsideNavbar />
        </div>
        <div className="bg-yellow-500 col-span-10 row-span-1">
          <ContentNavbar />
        </div>
        <div className="bg-orange-500 col-span-2 row-span-8 overflow-y-auto ">
          <AsideContent />
        </div>
        <div className="bg-purple-500 col-span-10 row-span-8 overflow-y-auto">
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
          <p>Content</p>
        </div>
      </div>
    </div>
  );
};

export default Wishlists;
