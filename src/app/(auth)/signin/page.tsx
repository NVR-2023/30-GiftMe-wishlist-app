import SigninForm from "../../../frontend/sections/signin/ssignin-form";
import BackgroundImage from "@/frontend/sections/hero-homepage/sub-components/background-image";
const SignIn = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden ">
      <div>
        <BackgroundImage />
      </div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <SigninForm />
      </div>
    </div>
  );
};

export default SignIn;
