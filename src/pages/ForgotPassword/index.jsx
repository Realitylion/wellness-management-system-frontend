import { Helmet } from "react-helmet";
import { Text, Heading, Input, Button } from "../../components";
import React from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = React.useState("");
  const [emailerror, setEmailError] = React.useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
    console.log(email);
    alert("Reset link sent to your email");
  };

  return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full h-[100vh] justify-center bg-gradient px-14 md:p-5">
        <div className="flex m-auto w-[56%] h-[50%] flex-col items-center justify-center gap-[22px] border border-solid border-coolgray-20 bg-default-white px-14 md:w-full md:p-5">
          <div className="container-xs">
            <div className="flex justify-center px-1.5">
              <Heading
                size="heading_2"
                as="h1"
                className="text-[42px] text-center font-bold text-coolgray-90 md:text-[38px] sm:text-[32px]"
              >
                Forgotten your password?
              </Heading>
            </div>
            <Text size="body_1" as="p" className="mt-2 text-center text-[18px] font-normal leading-[146%] text-coolgray-90">
              There is nothing to worry about, we'll send you a message to help you reset your password.
            </Text>
          </div>
          <div className="mx-auto w-full max-w-[528px] flex flex-col items-center gap-3.5">
            <form className="w-full" onSubmit={handleFormSubmit}>
              <div className="mt-2 flex flex-col items-start justify-center gap-2 self-stretch">
                  <Text as="p" className="text-[14px] font-normal text-coolgray-90">
                    Enter your email address
                  </Text>
                  <Input
                      shape="square"
                      name="email"
                      placeholder={"Enter your email address"}
                      className="self-stretch border-b border-coolgray-30 px-3.5"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setEmailError("")
                      }}
                  />
              </div>
              <div className="text-red-500 text-sm">{emailerror}</div>
              <Button
                  shape="square"
                  type="submit"
                  className="self-stretch w-full mt-4 border-2 border-solid border-primary-60 px-8 font-medium tracking-[0.50px] sm:px-5"
                  >
                  Send Reset Link
              </Button>
            </form>
            <Button
                shape="square"
                variant="outline"
                className="self-stretch border-2 border-solid border-primary-60 px-8 font-medium tracking-[0.50px] sm:px-5"
                >
                Back to Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}