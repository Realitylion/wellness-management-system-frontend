import { Helmet } from "react-helmet";
import { Heading, Text, Input, Button } from "../../components";
import React from "react";
import { auth } from '../../firebase';
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

export default function EmailVerificationLinkPage() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailerror, setEmailError] = React.useState("");
  const [passworderror, setPasswordError] = React.useState("");
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      if (user.emailVerified === true) {
        alert("Email already verified! Redirecting to home page.")
        // navigate("/home")
        return;
      }
      sendEmailVerification(user).then(() => {
        alert("Verification email sent! Check your mailbox!")
        navigate("/login")
      })
    })
    .catch((error) => {
      if (error.code === 'auth/invalid-email') {
        setEmailError('Invalid email address!');
      } else if (error.code === 'auth/invalid-credential') {
        setPasswordError('Wrong credentials!');
      } else {
        setPasswordError(error.code);
      }
  })
  }

  return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex w-full h-[100vh] justify-center bg-gradient px-14 md:p-5">
        <div className="flex w-[56%] h-[700px] m-auto flex-col items-center justify-center gap-4 border border-solid border-coolgray-20 bg-default-white px-14 md:w-full md:p-5">
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
                className="text-center text-[17px] font-normal leading-[140%] text-coolgray-90"
              >
                Please check your Inbox and Spam folders for the verification link. Once verified, you can login to your account.
                <br />
                If you haven't received the verification link, please use the below option to resend the link.
              </Text>
            </div>
            <div className="h-px bg-coolgray-20" />
          </div>
          <div className="mx-auto mb-1.5 w-full max-w-[528px] flex flex-col items-center gap-3.5">
            <form className="w-full" onSubmit={handleFormSubmit}>
              <div className="mt-6 flex flex-col items-start justify-center gap-2 self-stretch">
                  <Text as="p" className="text-[14px] font-normal text-coolgray-90">
                    Enter your email address to receive the verification link
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
                      required
                  />
                  <div className="text-red-500">{emailerror}</div>
              </div>
              <div className="mt-4 flex flex-col items-start justify-center gap-2 self-stretch">
                  <Text as="p" className="text-[14px] font-normal text-coolgray-90">
                    Enter your password
                  </Text>
                  <Input
                      shape="square"
                      name="password"
                      placeholder={"Enter your password"}
                      type={`${passwordVisible ? "text" : "password"}`}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        setPasswordError("")
                      }}
                      required
                      suffix={
                        <svg onClick={() => {
                          setPasswordVisible(!passwordVisible)
                          console.log(passwordVisible);
                        }}
                          xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                        </svg>
                      }
                      className="gap-4 self-stretch border-b border-coolgray-30"
                  />
                  <div className="text-red-500">{passworderror}</div>
              </div>
              <Button
                shape="square"
                type="submit"
                className="self-stretch w-full mt-4 border-2 border-solid border-primary-60 px-8 font-medium tracking-[0.50px] sm:px-5"
              >
                Resend Link
              </Button>
            </form>
            <Button
              shape="square"
              variant="outline"
              onClick={() => navigate("/login")}
              className="self-stretch border-2 w-full mt-4 border-solid border-primary-60 px-8 font-medium tracking-[0.50px] sm:px-5"
            >
              Back to Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}