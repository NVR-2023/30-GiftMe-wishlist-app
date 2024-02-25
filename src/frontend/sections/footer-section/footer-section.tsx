import Link from "next/link";
import SocialMediaComponent from "@/frontend/components/ui/socail-media-component.tsx/social-media-component";

import { BasicStyleComponentProps } from "@/types/types";

const FooterSection = ({
  background = "bg-white",
  text = "text-black",
}: BasicStyleComponentProps) => {
  return (
    <footer className={`footer ps-20 py-10 text-sm ${background} ${text}`}>
      <nav className="">
        <h3 className="footer-title text-sm">Social Media</h3>
        <SocialMediaComponent />
      </nav>
      <nav>
        <h3 className="footer-title text-sm">Company</h3>
        <Link href="/aboutus" className="link link-hover text-sm">
          About us
        </Link>
        <Link href="/contact" className="link link-hover text-sm">
          Contact
        </Link>
        <Link href="/jobs" className="link link-hover text-sm">
          Jobs
        </Link>
        <Link href="/presskit" className="link link-hover text-sm">
          Press Kit
        </Link>
      </nav>
      <nav>
        <h3 className="footer-title text-sm">Legal</h3>
        <Link href="/termsofuse" className="link link-hover text-sm">
          Terms of use
        </Link>
        <Link href="/privacypolicy" className="link link-hover text-sm">
          Privacy policy
        </Link>
        <Link href="/cookiepolicy" className="link link-hover text-sm">
          Cookie policy
        </Link>
        <br></br>
        <p className="text-[.5rem]">Copyright © 2024 GiftMe. All rights reserved.</p>
      </nav>
    </footer>
  );
};

export default FooterSection;
