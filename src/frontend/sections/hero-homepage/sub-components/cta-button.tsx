import Link from "next/link";
const CTAButton = () => {
  return (
    <div className="h-8 w-24 rounded bg-purple-700 text-orange-400 text-sm tracking-wide">
      <Link
        href="/register"
        className="flex h-full items-center justify-center">
        Register
      </Link>
    </div>
  );
};

export default CTAButton;
