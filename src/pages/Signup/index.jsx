import { Helmet } from "react-helmet";
import { Text, Button, Input, Heading } from "../../components";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, sendEmailVerification, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import { AuthContext } from '../../context/authContext';

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
  const [isSigningIn, setIsSigningIn] = React.useState(false);
  
  const navigate = useNavigate();

  const {dispatch} = React.useContext(AuthContext)

  React.useEffect(() => {
    if (isSigningIn) {
      setFirstNameError("")
      setEmailError("")
      setPasswordError("")
      setConfirmPasswordError("")
      // TODO: Add loading spinner
    }
  }, [isSigningIn])

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsSigningIn(true)
    setPasswordError("")
    setConfirmPasswordError("")
    setEmailError("")
    setFirstNameError("")
    if (password !== confirmPassword) {
      setPasswordError("Passwords don't match!")
      setConfirmPasswordError("Passwords don't match!")
      setIsSigningIn(false)
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      // create user in the backend
      const createUser = async () => {
        try {
          console.log("Creating user in the database...");
          console.log(firstName, lastName, email);
          const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/api/createUser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              firstName: firstName,
              lastName: lastName,
              profileCompleted: false,
            }),
          });
          if (!response.ok) {
            throw new Error("Error creating user in the database.");
          }
          const data = await response.json();
          console.log("User created in database:", data);
          alert("User created successfully!");
        } catch (error) {
          console.error("Error creating user in the database:", error.message);
        }
      };
      createUser();
      sendEmailVerification(user).then(() => {
        alert("Verification email sent! Check your mailbox!");
        navigate("/login");
      });
    })
    .catch((error) => {
      console.error(error.message);
      setIsSigningIn(false);
      if (error.code === "auth/email-already-in-use") {
        setEmailError("Email address taken. Try a different one.");
      } else if (error.code === "auth/invalid-email") {
        setEmailError("Invalid email address");
      } else if (error.code === "auth/weak-password") {
        setPasswordError("Password should at least be 6 characters");
        setConfirmPasswordError("Password should at least be 6 characters");
      } else {
        setConfirmPasswordError(error.message);
      }
    });
  }
  
  const handleSignInWithGoogle = async (e) => {
    e.preventDefault()
    if (!isSigningIn) {
      setIsSigningIn(true)
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then(async result => {
        try {
          // get user email
          const email = result.user.email;
          // fetch user data from backend
          const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/api/getUser?email=${email}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          // if user is not found, create a new user first
          if (response.status === 404) {
            console.log("User not found, creating user..");
            const user = result.user;
            const firstName = user.displayName.split(" ")[0];
            const lastName = user.displayName.split(" ")[1];
            const newUser = {
              email: user.email,
              firstName: firstName,
              lastName: lastName,
              profileCompleted: false,
            }
            // create new user in backend
            await fetch(`${process.env.REACT_APP_BACKEND_API}/api/createUser`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(newUser),
            })
            .then(async (response) => {
              if (!response.ok) {
                throw new Error("User not created");
              }
              console.log("User created successfully");
              await dispatch({ type: "LOGIN", payload: user });
              
              console.log("Signed in as " + user.displayName);
              alert("Complete your profile!");
              
              // Navigate after state update
              setTimeout(() => {
                navigate("/completeprofile");
              }, 100);
            }).catch((error) => {
                console.error("Error:" + error);
            });
          }
          // if user is found, navigate based on profile completion
          else {
            if (!response.ok) {
              throw new Error("User not found");
            }
            const userData = await response.json();
            console.log("User data:", userData);
            // if profile is not completed, alert user and navigate to complete profile page
            if (userData.profileCompleted === false) {
              alert("Please complete your profile first!")
              navigate("/completeprofile")
              return;
            }
            // if profile is completed, dispatch user data to context and navigate to home page
            const user = result.user;
            console.log(user);
            alert("Logged in successfully!");
            dispatch({type:"LOGIN", payload:user})
            navigate("/home")
            return;
          }
        } catch (error) {
          console.error("Error fetching user:", error.message);
        }
      }).catch((error) => {
          console.error("Error:" + error);
      });
      setIsSigningIn(false);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    navigate("/login")
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
              <Text size="body_1" as="p" className="text-[18px] font-normal text-coolgray-90">
                Create an account
              </Text>
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
                              required
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
                          required
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
                        placeholder="It must be a minimum of 6 characters"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value)
                          setPasswordError("")
                          setConfirmPasswordError("")
                        }}
                        required
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
                        placeholder="It must be a minimum of 6 characters"
                        value={confirmPassword}
                        onChange={(e) => {
                          setConfirmPassword(e.target.value)
                          setPasswordError("")
                          setConfirmPasswordError("")
                        }}
                        required
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
                    onClick={handleSignInWithGoogle}
                  >
                      Google
                  </Button>
                </div>
              </div>
              <div className="h-px w-full self-stretch bg-coolgray-20" />
              <button className="cursor-pointer" onClick={handleLogin}>
                  <Text as="p" className="text-[14px] font-normal text-primary-90">
                      Already have an account? Log In
                  </Text>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}