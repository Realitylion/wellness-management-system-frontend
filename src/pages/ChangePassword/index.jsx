import { Helmet } from "react-helmet";
import { Input, Text, Heading } from "../../components";
import UserLoginForm from "../../components/UserLoginForm";
import React from "react";

export default function ChangePasswordPage() {
  return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full justify-center bg-gradient px-14 py-[264px] md:p-5">
        <div className="flex w-[56%] justify-center border border-solid border-coolgray-20 bg-default-white px-14 py-[76px] md:w-full md:p-5">
          <div className="container-xs">
            <div>
              <div className="flex justify-center px-14 md:px-5">
                <Heading
                  size="heading_2"
                  as="h1"
                  className="mb-[72px] text-[42px] font-bold text-coolgray-90 md:text-[38px] sm:text-[32px]"
                >
                  Change Password
                </Heading>
              </div>
              <div className="relative mt-[-14px] flex flex-col items-start justify-center gap-1.5">
                <Text as="p" className="text-[14px] font-normal text-coolgray-90">
                  Enter your new password
                </Text>
                <Input
                  size="md"
                  shape="square"
                  type="password"
                  name="newpassword"
                  placeholder="It must be a combination of minimum 8 letters, numbers, and symbols."
                  className="self-stretch border-b border-coolgray-30 px-3.5"
                />
              </div>
              <UserLoginForm
                emailLabel="Re-Enter your new password"
                loginButton="Confirm"
                className="relative mt-[-18px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}