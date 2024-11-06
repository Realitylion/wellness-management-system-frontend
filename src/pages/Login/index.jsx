import { Helmet } from "react-helmet";
import { Text, Button, Heading, Input, CheckBox } from "../../components";
import React from "react";

export default function LoginPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [emailerror, setEmailError] = React.useState("");
  const [passworderror, setPasswordError] = React.useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
    if (password === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
    console.log(email, password, rememberMe);
  };

  const handleSignInWithGoogle = () => {
    alert("Sign in with Google");
  }

  return (
      <>
    <Helmet>
      <title>Wellness Management System</title>
      <meta name="description" content="Web site created using create-react-app" />
    </Helmet>
    <div className="flex w-full h-[100vh] justify-center bg-gradient px-14 md:p-5">
      <div className="flex m-10 w-[56%] flex-col items-center justify-center gap-6 border border-solid border-coolgray-20 bg-default-white px-14 py-[72px] md:w-full md:p-5">
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
          <form className="w-full" onSubmit={handleFormSubmit}>
            <div className="mx-auto w-full max-w-[528px] flex flex-col items-center gap-3.5">
              <div className="mt-6 flex flex-col items-start justify-center gap-2 self-stretch">
                <Text as="p" className="text-[14px] font-normal text-coolgray-90"></Text>
                <Input
                    type="email"
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
                <div className="text-red-500">{emailerror}</div>
              </div>
              <div className="flex flex-col items-start justify-center gap-2 self-stretch">
                  <Text as="p" className="text-[14px] font-normal text-coolgray-90">
                  </Text>
                  <Input
                      type={`${passwordVisible ? "text" : "password"}`}
                      shape="square"
                      name="password"
                      placeholder={"Enter your password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        setPasswordError("")
                      }}
                      suffix={
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          fill="currentColor" 
                          className="bi bi-eye-fill" 
                          viewBox="0 0 16 16"
                          onClick={() => setPasswordVisible(!passwordVisible)}
                        >
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                        </svg>
                      }
                      className="gap-4 self-stretch border-b border-coolgray-30 px-3"
                  />
                  <div className="text-red-500">{passworderror}</div>
              </div>
              <div className="flex items-center justify-between gap-5 self-stretch">
                  <CheckBox
                      name="rememberme"
                      label="Remember me"
                      id="rememberme"
                      className="gap-2 text-[14px] text-coolgray-90"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <a href="#">
                      <Text as="p" className="text-[14px] font-normal text-primary-90">
                      Forgot Password?
                      </Text>
                  </a>
              </div>
              <Button
                type="submit"
                shape="square"
                className="self-stretch border-2 border-solid border-primary-60 px-8 font-medium tracking-[0.50px] sm:px-5"
              >
                  Log In
              </Button>
            </div>
          </form>
          <div className="container-xs flex flex-col items-center gap-4 border-t border-solid border-coolgray-20">
            <Text size="body_m" as="p" className="mt-6 text-[16px] font-normal text-coolgray-90">
              Or log in with:
            </Text>
            <Button
              variant="outline"
              shape="square"
              leftIcon={
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                </svg>
              }
              className="gap-4 self-stretch border-2 px-8 font-medium tracking-[0.50px] sm:px-5"
              onClick={handleSignInWithGoogle}
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