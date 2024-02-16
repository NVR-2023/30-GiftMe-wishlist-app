import React, { FC } from "react";
import Link from "next/link";
import SocialMediaComponent from "@/components/ui/socail-media-component.tsx/social-media-component";

const FooterSection: FC = () => {
  return (
    <div className="bg-zinc-900 text-white text-sm">
      <footer className="footer p-10 ">
        <nav className="">
          <h3 className="footer-title">Social Media</h3>
          <SocialMediaComponent/>
        </nav>
        <nav>
          <h3 className="footer-title">Company</h3>
          <Link href="/aboutus" className="link link-hover">
            About us
          </Link>
          <Link href="/contact" className="link link-hover">
            Contact
          </Link>
          <Link href="/jobs" className="link link-hover">
            Jobs
          </Link>
          <Link href="/presskit" className="link link-hover">
            Press Kit
          </Link>
        </nav>
        <nav>
          <h3 className="footer-title">Legal</h3>
          <Link href="/termsofuse" className="link link-hover">
            Terms of use{" "}
          </Link>
          <Link href="/privacypolicy" className="link link-hover">
            Privacy policy
          </Link>
          <Link href="/cookiepolicy" className="link link-hover">
            Cookie policy
          </Link>
        </nav>
      </footer>
      <div className="text-xs pt-7 ps-10">Copyright © 2024 GifMe. All rights reserved</div>
    </div>
  );
};

export default FooterSection;
