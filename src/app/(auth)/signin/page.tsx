import FooterSection from "@/frontend/sections/footer-section/footer-section";
import SigninForm from "./sub-components/ssignin-form";

const SignIn = () => {
  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center bg-orange-100">
        <SigninForm />
      </div>
      <div>
        <FooterSection background="bg-zinc-800" text="text-white" />
      </div>
    </div>
  );
};

export default SignIn;
