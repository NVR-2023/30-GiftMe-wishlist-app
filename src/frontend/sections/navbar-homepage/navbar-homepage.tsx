import NeoLogoComponent from "@/frontend/components/ui/neo-logo-component";
import Link from "next/link";

const NavbarHomepage = () => {
  return (
    <header className="absolute top-4 w-full text-fuchsia-800">
      <nav className="flex justify-center">
        <div className="flex w-11/12 justify-between items-center h-120">
          <div>
            <NeoLogoComponent />
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
      </nav>
    </header>
  );
};

export default NavbarHomepage;
