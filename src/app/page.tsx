import Image from "next/image";
import NavbarHomepage from "@/frontend/sections/navbar-homepage/navbar-homepage";
import HeroHomepage from "@/frontend/sections/hero-homepage/hero-homepage";

export default function Home() {
  return (
    <main className="block overflow-x-hidden ">
      <div className="relative overflow-hidden">
        <div className="">
          <NavbarHomepage />
        </div>
        <div className="">
          <HeroHomepage />
        </div>
      </div>
    </main>
  );
}
