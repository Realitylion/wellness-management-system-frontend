import { Helmet } from "react-helmet";
import { Input, Text, Heading, Button } from "../../components";
import React from "react";

export default function ChangePasswordPage() {
  return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full h-[100vh] justify-center bg-gradient px-14 md:p-5">
        <div className="flex m-auto w-[56%] max-h-[700px] justify-center border border-solid border-coolgray-20 bg-default-white px-14 md:w-full p-14 md:p-5">
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
                Enter your old password
              </Text>
              <Input
                size="md"
                shape="square"
                type="password"
                name="oldpassword"
                placeholder="Enter old password"
                suffix={
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                  </svg>
                }
                className="self-stretch border-b border-coolgray-30 px-3.5"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="mt-6 flex flex-col items-start justify-center gap-2 self-stretch">
                  <Text as="p" className="text-[14px] font-normal text-coolgray-90">
                    Enter your new password
                  </Text>
                  <Input
                      shape="square"
                      name="newpassword"
                      placeholder={"Enter your password"}
                      type="password"
                      suffix={
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                        </svg>
                      }
                      className="self-stretch border-b border-coolgray-30 px-3.5"
                  />
              </div>
              <div className="mt-6 flex flex-col items-start justify-center gap-2 self-stretch">
                  <Text as="p" className="text-[14px] font-normal text-coolgray-90">
                      Confirm your new password
                  </Text>
                  <Input
                      shape="square"
                      name="confirmpassword"
                      placeholder={"Re-enter new password"}
                      suffix={
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                        </svg>
                      }
                      className="gap-4 self-stretch border-b border-coolgray-30 px-3"
                  />
              </div>
              <Button
                shape="square"
                className="mt-4 self-stretch border-2 border-solid border-primary-60 px-8 font-medium tracking-[0.50px] sm:px-5"
              >
                  Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}