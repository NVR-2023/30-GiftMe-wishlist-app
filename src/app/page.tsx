import Image from "next/image";
import HeaderHomepage from "@/frontend/sections/header-homepage/header-homepage";
import HeroHomepage from "@/frontend/sections/hero-homepage/hero-homepage";
import FooterSection from "@/frontend/sections/footer-section/footer-section";

export default function Home() {
  return (
    <main className="block overflow-x-hidden ">
      <div className="relative overflow-hidden">
        <div className="">
          <HeaderHomepage />
        </div>
        <div className="">
          <HeroHomepage />
        </div>
      </div>
      <div className="">
        <FooterSection background="bg-zinc-800" text="text-white" />
      </div>
    </main>
  );
}
