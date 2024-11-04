import { Helmet } from "react-helmet";
import { Heading, Text } from "../../components";
import UserLoginForm from "../../components/UserLoginForm";
import React from "react";

export default function EmailVerificationLinkPage() {
  return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full justify-center bg-gradient px-14 py-[242px] md:p-5">
        <div className="flex w-[56%] flex-col items-center justify-center gap-4 border border-solid border-coolgray-20 bg-default-white px-14 py-[72px] md:w-full md:p-5">
          <div className="container-xs flex flex-col gap-4">
            <div className="flex flex-col gap-0.5">
              <div className="flex justify-center px-11 md:px-5">
                <Heading
                  size="heading_2"
                  as="h1"
                  className="text-[42px] font-bold text-coolgray-90 md:text-[38px] sm:text-[32px]"
                >
                  Email Verification Link
                </Heading>
              </div>
              <Text
                size="body_1"
                as="p"
                className="text-center text-[18px] font-normal leading-[140%] text-coolgray-90"
              >
                Please check your Inbox and Spam folders for the verification link. Once verified, you'll be
                redirected to the website.
                <br />
                <br />
                If you haven't received the verification link, please use the below option to resend the link.
              </Text>
            </div>
            <div className="h-px bg-coolgray-20" />
          </div>
          <UserLoginForm loginButton="Resend Link" className="mx-auto mb-1.5 w-full max-w-[528px]" />
        </div>
      </div>
    </>
  );
}