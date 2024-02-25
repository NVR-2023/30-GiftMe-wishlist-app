import Link from "next/link";
const CTAButton = () => {
  return (
    <div className="">
      <Link
        href="/register"
        className="py-1.5 px-3 rounded bg-purple-700 text-orange-400 tracking-wide">
        Register
      </Link>
    </div>
  );
};

export default CTAButton;
