import Image from "next/image";
import HeaderHomepage from "@/sections/header-homepage/header-homepage";
import HeroHomepage from "@/sections/hero-homepage/hero-homepage";
import FooterSection from "@/sections/footer-section/footer-section";

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
        <FooterSection background="bg-[#efb53e]" text="text-fuchsia-900" />
      </div>
    </main>
  );
}
