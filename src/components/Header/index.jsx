import { Button, Img } from "./..";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ ...props }) {
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate("/signup");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center py-[18px] border-coolgray-20 border-b border-solid bg-default-white`}
    >
      <div className="container-sm flex items-center justify-between gap-5 md:px-5 sm:flex-col">
        <Img src="images/img_header_logo.png" alt="Headerlogo" className="h-[38px] w-[104px] object-contain" />
        <div className="flex gap-3">
          <Button onClick={navigateToLogin} variant="outline" className="min-w-[102px] border-2 px-[26px] font-medium">Log In</Button>
          <Button onClick={navigateToSignup} className="min-w-[108px] bg-primary-60 text-white px-[26px] font-medium">Sign In</Button>
        </div>
      </div>
    </header>
  );
}