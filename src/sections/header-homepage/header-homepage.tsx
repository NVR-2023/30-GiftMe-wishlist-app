import React, { FC } from "react";
import LogoComponent from "@/components/ui/logo-component/logo-component";
import Link from "next/link";

const HeaderHomepage: FC = () => {
  return (
    <div className="absolute top-0 w-full text-fuchsia-800">
      <div className="flex justify-center">
        <div className="flex w-11/12 justify-between items-center h-120">
          <div>
            <LogoComponent />
          </div>
          <div className="flex space-x-12">
            <div className="space-x-4">
              <Link href="/features" className="link link-hover">
                Features
              </Link>
              <Link href="/testimonials" className="link link-hover">
                Testimonials
              </Link>
              <Link href="/pricing" className="link link-hover">
                Pricing
              </Link>
            </div>
            <div className="space-x-4">
              <Link href="/signin" className="link link-hover">
                Sign in
              </Link>
              <Link href="/register" className="link link-hover font-bold">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHomepage;
