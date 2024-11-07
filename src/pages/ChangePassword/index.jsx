import { Helmet } from "react-helmet";
import { Input, Text, Heading, Button } from "../../components";
import React, { useState } from "react";
import { auth } from "../../firebase"; // Import Firebase auth
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function ChangePasswordPage() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handlePasswordChange = async () => {
    setError(null);
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match.");
      return;
    }

    const user = auth.currentUser;
    if (!user) {
      setError("No user is signed in.");
      return;
    }

    try {
      // Re-authenticate the user
      const credential = EmailAuthProvider.credential(user.email, oldPassword);
      await reauthenticateWithCredential(user, credential);

      // Update the password
      await updatePassword(user, newPassword);
      alert("Password changed successfully");
      navigate("/home");
    } catch (err) {
      setError(err.message || "Failed to change password.");
    }
  };

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
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Enter old password"
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
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
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
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter new password"
                  className="gap-4 self-stretch border-b border-coolgray-30 px-3"
                />
              </div>
              {error && <Text as="p" className="text-red-500">{error}</Text>}
              <Button
                shape="square"
                onClick={handlePasswordChange}
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
