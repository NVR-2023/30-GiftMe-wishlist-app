import Image from "next/image";
import RegisterForm from "@/frontend/sections/register/register-form";

const Register = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <div className="grid grid-cols-2">
        <div className="col-span-1 flex justify-center items-center">
          <div className="relative w-full h-full bg-amber-400">
       
          </div>
        </div>
        <p>Testing</p>
        <div className="col-span-1">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
