import Link from "next/link";
import LogoIcon from "@/frontend/components/icons/logo-icon";

const LogoComponent = () => {
  return (
    <Link href="/">
      <LogoIcon scale={0.45} color={"#86198f"} />
    </Link>
  );
};

export default LogoComponent;
