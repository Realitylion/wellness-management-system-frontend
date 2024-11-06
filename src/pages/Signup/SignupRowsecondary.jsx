import { Text, Button, Img, Input, Heading } from "../../components";
import React from "react";

export default function SignupRowsecondary() {
  return (
    <div className="flex justify-center px-14 md:px-5">
    <div className="flex w-[56%] flex-col items-center justify-center gap-[26px] border border-solid border-coolgray-20 bg-default-white px-14 py-[76px] md:w-full md:p-5">
      <div className="container-xs flex flex-col items-center">
      <div className="flex justify-center self-stretch px-14 md:px-5">
        <Heading
          size="heading_2"
          as="h1"
          className="text-[42px] font-bold text-coolgray-90 md:text-[38px] sm:text-[32px]"
        >
          Sign Up
        </Heading>
        </div>
        <a href="#" className="mb-5">
          <Text size="body_1" as="p" className="text-[18px] font-normal text-coolgray-90">
            Create an account
          </Text>
        </a>
      </div>
      <div className="container-xs flex flex-col items-center gap-6">
        <div className="self-stretch">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 sm:flex-col">
                <div className="flex w-full flex-col items-start justify-center gap-2 sm:w-full">
                <Text as="p" className="text-[14px] font-normal text-coolgray-90">
                    First Name
                </Text>
                <Input
                    shape="square"
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    className="self-stretch border-b border-coolgray-30 px-3.5"
                />
                </div>
                <div className="flex w-full flex-col items-start justify-center gap-2 sm:w-full">
                <Text as="p" className="text-[14px] font-normal text-coolgray-90">
                    Last Name
                </Text>
                <Input
                    shape="square"
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                    className="self-stretch border-b border-coolgray-30 px-3.5"
                />
                </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
                <Text as="p" className="text-[14px] font-normal text-coolgray-90">
                    Email
                </Text>
                <Input
                    shape="square"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="self-stretch border-b border-coolgray-30 px-3.5"
                />
                </div>
                <div className="mb-2 flex flex-col items-start justify-center gap-2">
                <Text as="p" className="text-[14px] font-normal text-coolgray-90">
                    Password
                </Text>
                <Input
                    size="md"
                    shape="square"
                    type="password"
                    name="password"
                    placeholder="It must be a combination of minimum 8 letters, numbers, and symbols."
                    suffix={
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                    </svg>
                    }
                    className="gap-4 self-stretch border-b border-coolgray-30 px-3"
                />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <Text as="p" className="text-[14px] font-normal text-coolgray-90">
                Confirm Password
            </Text>
            <Input
                size="md"
                shape="square"
                type="password"
                name="confirmpassword"
                placeholder="It must be a combination of minimum 8 letters, numbers, and symbols."
                suffix={
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                </svg>
                }
                className="mb-[26px] gap-4 self-stretch border-b border-coolgray-30 px-3"
            />
            </div>
            <div className="flex flex-col items-center"> 
              <Button
              shape="square"
              className="self-stretch border-2 border-solid border-primary-60 px-8 font-medium tracking-[0.50px] sm:px-5"
              >
              Sign Up
              </Button>
            </div>
            <div className="flex flex-col items-center gap-4 border-t border-solid border-coolgray-20">
            <Text size="body_m" as="p" className="mt-6 text-[16px] font-normal text-coolgray-90">
                Or sign up with:
            </Text>
            <Button
                variant="outline"
                shape="square"
                leftIcon={
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                </svg>
                }
                className="gap-4 self-stretch border-2 px-8 font-medium tracking-[0.50px] sm:px-5"
            >
                Google
            </Button>
          </div>
        </div>
        <div className="h-px w-full self-stretch bg-coolgray-20" />
        <a href="#">
            <Text as="p" className="text-[14px] font-normal text-primary-90">
                Already have an account?
            </Text>
        </a>
      </div>
    </div>
    </div>
  );
}