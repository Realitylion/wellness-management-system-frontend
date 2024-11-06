// import { Helmet } from "react-helmet";
// import Sidebar1 from "../../components/Sidebar1";
// import CompleteprofileRow1user from "./CompleteprofileRow1user";
// import CompleteprofileRowsecondary from "./CompleteprofileRowsecondary";
// import React from "react";

// export default function CompleteProfilePage() {
//   return (
//     <>
//       <Helmet>
//         <title>Wellness Management System</title>
//         <meta name="description" content="Web site created using create-react-app" />
//       </Helmet>
//       <div className="flex w-full items-start bg-coolgray-10">
//         <Sidebar1 />
//         <div className="mb-5 flex flex-1 flex-col gap-4 py-1.5">
//           <CompleteprofileRowsecondary />
//           <CompleteprofileRow1user />
//         </div>
//       </div>
//     </>
//   );
// }

import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import FormWithLabelsAndFields from "../../components/FormWithLabelsAndFields";
import Sidebar11 from "../../components/Sidebar11";
import SuccessNotification from "../../components/SuccessNotification";
import SettingsRowSecondary from "./CompleteprofileRowsecondary";
import React from "react";

export default function SettingsPage() {
    return (
        <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full items-start bg-coolgray-10">
        <Sidebar11 />
        <div className="flex flex-col gap-3.5 py-5">
          <SettingsRowSecondary />
          <div className="mx-6 flex items-start md:mx-0 md:flex-col">
            <div className="flex w-[22%] flex-col items-start border border-solid border-coolgray-20 bg-default-white p-2 md:w-full md:px-5">
                <div className="flex self-stretch p-2">
                    <Heading as="h2" className="text-[16px] font-medium text-coolgray-90">
                      Profile
                    </Heading>
                </div>
                {/* <div className="flex self-stretch p-2">
                    <Heading as="h3" className="text-[16px] font-medium text-coolgray-90">
                        Change Password
                    </Heading>
                </div>
                <a href="#" className="mt-2 ml-2 md:ml-0">
                    <Heading as="h4" className="text-[16px] font-medium text-coolgray-90">
                    Go To Home
                    </Heading> 
                </a> */}
            </div>
            <div className="flex flex-1 flex-col items-start gap-4 self-center px-6 md:self-stretch md:px-5">
              <div className="flex w-[92%] flex-col justify-center gap-[22px] border border-solid border-coolgray-20 bg-default-white px-4 py-3 md:w-full">
                <div className="flex ">
                    <Heading size="heading_6" as="h5" className="text-[18px] font-bold text-coolgray-90">
                    User Details
                    </Heading>
                </div>
                <FormWithLabelsAndFields className="w-[92%] md:w-full" />
              </div>
              <SuccessNotification />

              {/* Add Buttons Here */}
              {/* <div className="flex gap-4 mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Change Password
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Delete User
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
