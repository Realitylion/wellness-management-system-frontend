import { Button, Text, CheckBox, Input, Img } from "./..";
import React from "react";

export default function UserLoginForm({
  emailLabel = "Email Address",
  passwordLabel = "Password",
  forgotPasswordLink = "Forgot Password?",
  loginButton = "Log In",
  ...props
}) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-center gap-3.5`}>
        <div className="mt-6 flex flex-col items-start justify-center gap-2 self-stretch">
            <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {emailLabel}
            </Text>
            <Input
                shape="square"
                name="email"
                placeholder={"Enter your email address"}
                className="self-stretch border-b border-coolgray-30 px-3.5"
            />
        </div>
        <div className="flex flex-col items-start justify-center gap-2 self-stretch">
            <Text as="p" className="text-[14px] font-normal text-coolgray-90">
                {passwordLabel}
            </Text>
            <Input
                shape="square"
                name="password"
                placeholder={"Enter your password"}
                suffix={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                  </svg>
                }
                className="gap-4 self-stretch border-b border-coolgray-30 px-3"
            />
        </div>
        <div className="flex items-center justify-between gap-5 self-stretch">
            <CheckBox
                name="rememberme"
                label="Remember me"
                id="rememberme"
                className="gap-2 text-[14px] text-coolgray-90"
            />
            <a href="#">
                <Text as="p" className="text-[14px] font-normal text-primary-90">
                {forgotPasswordLink}
                </Text>
            </a>
        </div>
        <Button
            shape="square"
            className="self-stretch border-2 border-solid border-primary-60 px-8 font-medium tracking-[0.50px] sm:px-5"
            >
            {loginButton}
        </Button>
    </div>
  );
}