import { Helmet } from "react-helmet";
import SignupRowsecondary from "./SignupRowsecondary";
import React from "react";

export default function SignupPage() {
  return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gradient py-[68px] md:py-5">
        <SignupRowsecondary />
      </div>
    </>
  );
}