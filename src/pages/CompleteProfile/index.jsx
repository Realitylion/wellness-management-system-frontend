import { Helmet } from "react-helmet";
import Sidebar1 from "../../components/Sidebar1";
import CompleteprofileRow1user from "./CompleteprofileRow1user";
import CompleteprofileRowsecondary from "./CompleteprofileRowsecondary";
import React from "react";

export default function CompleteProfilePage() {
  return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full items-start bg-coolgray-10">
        <Sidebar1 />
        <div className="mb-5 flex flex-1 flex-col gap-4 py-1.5">
          <CompleteprofileRowsecondary />
          <CompleteprofileRow1user />
        </div>
      </div>
    </>
  );
}