import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";
import UserLoginForm from "../../components/UserLoginForm";
import React from "react";

export default function LoginPage() {
    return (
        <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full justify-center bg-gradient px-14 py-[132px] md:p-5">
        <div className="flex w-[56%] flex-col items-center justify-center gap-6 border border-solid border-coolgray-20 bg-default-white px-14 py-[72px] md:w-full md:p-5">
          <div className="container-xs flex flex-col items-center gap-0.5">
            <div className="flex justify-center self-stretch px-14 md:px-5">
            <Heading
              size="heading_2"
              as="h1"
              className="text-[42px] font-bold text-coolgray-90 md:text-[38px] sm:text-[32px]"
            >
              Welcome Back
            </Heading>
            </div>
            <Text size="body_1" as="p" className="text-[18px] font-normal text-coolgray-90">
              Please log in to continue
            </Text>
          </div>
          <UserLoginForm className="mx-auto w-full max-w-[528px]" />
          <div className="container-xs flex flex-col items-center gap-4 border-t border-solid border-coolgray-20">
            <Text size="body_m" as="p" className="mt-6 text-[16px] font-normal text-coolgray-90">
              Or log in with:
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
          <div className="container-xs h-px bg-coolgray-20 md:px-5" />
          <Text as="p" className="mb-1.5 text-[14px] font-normal text-primary-90">
            No account yet? Sign Up
          </Text>
        </div>
      </div>
      </>
    );
  }