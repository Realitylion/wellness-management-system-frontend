import { Helmet } from "react-helmet";
import { Text, Heading } from "../../components";
import UserLoginForm from "../../components/UserLoginForm";
import React from "react";

export default function ForgotPasswordPage() {
  return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full justify-center bg-gradient px-14 py-[286px] md:p-5">
        <div className="flex w-[56%] flex-col items-center justify-center gap-[22px] border border-solid border-coolgray-20 bg-default-white px-14 py-[76px] md:w-full md:p-5">
          <div className="container-xs">
            <div className="flex justify-center px-1.5">
              <Heading
                size="heading_2"
                as="h1"
                className="text-[42px] font-bold text-coolgray-90 md:text-[38px] sm:text-[32px]"
              >
                Forgotten your password?
              </Heading>
            </div>
            <Text size="body_1" as="p" className="text-center text-[18px] font-normal leading-[146%] text-coolgray-90">
              There is nothing to worry about, we'll send you a message to help you reset your password.
            </Text>
          </div>
          <UserLoginForm loginButton="Send Reset Link" className="mx-auto w-full max-w-[528px]" />
        </div>
      </div>
    </>
  );
}