import { Img } from "./..";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header({ ...props }) {
  const navigate = useNavigate();

    const navigateToHome = () => {
      navigate("/home");
    }

    const navigateToMealPlanner = () => {
      navigate("/mealplanner");
    }

    const navigateToWellness = () => {
      navigate("/wellnesssessionmain");
    }

    const navigateTosettings = () => {
      navigate("/settings");
    }

    const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/");
    }

  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center border-coolgray-20 border-b border-solid bg-default-white`}
    >
      <div className="container-sm flex items-center justify-between md:px-5 sm:flex-col">
          <Img src="images/logo.png" alt="Headerlogo" className="h-[88px] w-[88px] object-contain" />
        <div className="flex gap-5">
            <nav>
                <ul className="flex gap-5 mt-1">
                <li>
                    <div className="cursor-pointer" onClick={navigateToHome}>
                        Home
                    </div>
                </li>
                <li>
                    <div className="cursor-pointer" onClick={navigateToMealPlanner}>
                        Meal Planner
                    </div>
                </li>
                <li>
                    <div className="cursor-pointer" onClick={navigateToWellness}>
                        Wellness
                    </div>
                </li>
                <li>
                    <div className="cursor-pointer" onClick={navigateTosettings}>
                        Settings
                    </div>
                </li>
                </ul>
            </nav>
            <Img onClick={handleLogout} src="images/right-from-bracket-solid.svg" alt="UserIcon" className="cursor-pointer h-[24px] w-[24px] object-contain" />
        </div>
      </div>
    </header>
  );
}