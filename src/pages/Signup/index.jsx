import { Helmet } from "react-helmet";
import { Text, Button, Input, Heading } from "../../components";
import React from "react";

export default function SignupPage() {
  const [firstName, setFirstName] = React.useState("");
  const [firstNameError, setFirstNameError] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = React.useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (firstName === "") {
      setFirstNameError("First name is required");
    } else {
      setFirstNameError("");
    }

    if (email === "") {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("Password is required");
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    } else {
      setPasswordError("");
    }

    if (confirmPassword === "") {
      setConfirmPasswordError("Confirm password is required");
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }

    if (firstName && email && password && confirmPassword) {
      console.log(firstName, lastName, email, password);
      alert("Form submitted successfully. Check your mail for verification link.");
    }
  }

  return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-gradient py-[68px] md:py-5">
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
                <form onSubmit={handleFormSubmit}>
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
                              value={firstName}
                              onChange={(e) => {
                                setFirstName(e.target.value)
                                setFirstNameError("")
                              }}
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
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                    </div>
                    <div className="text-red-500 w-full">{firstNameError}</div>
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
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value)
                            setEmailError("")
                          }}
                      />
                      <div className="text-red-500">{emailError}</div>
                    </div>
                    <div className="mb-2 flex flex-col items-start justify-center gap-2">
                      <Text as="p" className="text-[14px] font-normal text-coolgray-90">
                          Password
                      </Text>
                      <Input
                        size="md"
                        shape="square"
                        type={`${showPassword ? "text" : "password"}`}
                        name="password"
                        placeholder="It must be a combination of minimum 8 letters, numbers, and symbols."
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value)
                          setPasswordError("")
                        }}
                        suffix={
                          <svg onClick={() => setShowPassword(!showPassword)}
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                          </svg>
                        }
                        className="gap-4 self-stretch border-b border-coolgray-30 px-3"
                      />
                      <div className="text-red-500">{passwordError}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <Text as="p" className="text-[14px] font-normal text-coolgray-90">
                        Confirm Password
                    </Text>
                    <Input
                        size="md"
                        shape="square"
                        type={`${showConfirmPassword ? "text" : "password"}`}
                        name="confirmpassword"
                        placeholder="It must be a combination of minimum 8 letters, numbers, and symbols."
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value)
                          setConfirmPasswordError("")
                        }}
                        suffix={
                          <svg onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                          </svg>
                        }
                        className="gap-4 self-stretch border-b border-coolgray-30 px-3"
                    />
                    <div className="text-red-500">{confirmPasswordError}</div>
                  </div>
                  <div className="mt-5 flex flex-col items-center"> 
                    <Button
                    type="submit"
                    shape="square"
                    className="self-stretch border-2 border-solid border-primary-60 px-8 font-medium tracking-[0.50px] sm:px-5"
                    >
                    Sign Up
                    </Button>
                  </div>
                </form>
                <div className="flex flex-col items-center gap-4 border-t border-solid border-coolgray-20">
                  <Text size="body_m" as="p" className="mt-6 text-[16px] font-normal text-coolgray-90">
                      Or sign up with:
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
      </div>
    </>
  );
}