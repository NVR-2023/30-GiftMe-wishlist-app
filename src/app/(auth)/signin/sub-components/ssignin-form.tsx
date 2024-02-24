"use client"
import { useState } from "react";
import BasicBox from "@/frontend/components/ui/basic-box/basic-box";
import PasswordInvisibleIcon from "@/frontend/components/icons/password-invisible-icon";
import PasswordVisibleIcon from "@/frontend/components/icons/password-visible-icon";

import BasicButton from "@/frontend/components/ui/basic-button/basic-button";

const SigninForm = () => {

  const [ isPasswordVisible , setIsPasswordVisible ] = useState<boolean>(false)

  const handleTogglePasswordVisibility= () => {
    setIsPasswordVisible((current) => !current);
  }

  return (
    <div className="">
      <BasicBox background={"bg-yellow-200"}>
        <div className="flex flex-col space-y-3">
          <div className="font-bold text-xl ">Sign in</div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-semibold">
                Email
              </label>
              <input className="rounded bg-yellow-100" id="email" name="email"></input>
              <div className="invisible">Error Message</div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <label htmlFor="email" className="text-sm font-semibold">
                  Password
                </label>
                <span onClick={handleTogglePasswordVisibility}>
                  { isPasswordVisible ? <PasswordVisibleIcon/> : <PasswordInvisibleIcon/> }
                  </span>
              </div>
              <input className="rounded bg-yellow-100" id="password" name="password"></input>
            </div>
            <div className="invisible">Error message</div>
          </div>
          <div className="flex items-baseline ">
            <div className="text-[0.75rem] font-semibold">Sign in with</div>
            <div className="flex">
              <div className="">G</div>
              <div className="">F</div>
            </div>
          </div>
          <div className="text-[0.75rem] font-semibold">Forget password?</div>
          <div className="flex justify-between">
            <BasicButton>
              <button className="font-semibold">Cancel</button>
            </BasicButton>
            <BasicButton>
              <button className="font-semibold">Sign in</button>
            </BasicButton>
          </div>
        </div>
      </BasicBox>
    </div>
  );
};
export default SigninForm;
