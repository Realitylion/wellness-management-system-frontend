import { Img } from "./..";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export default function Header({ ...props }) {
  const {dispatch} = React.useContext(AuthContext)
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

    const handleLogout = async () => {
      await dispatch({ type: "LOGOUT" });
      navigate("/");
    }

  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center border-coolgray-20 border-b border-solid bg-default-white`}
    >
      <div className="container-sm flex items-center justify-between md:px-5 sm:flex-col">
          <Img src="images/logo.png" alt="Headerlogo" className="h-[88px] w-[88px] object-contain" />
          <div>
  <h1
    className="container flex items-center m-1 justify-between md:px-5 sm:flex-col"
    style={{
      fontFamily: "Arial, sans-serif",
      fontSize: "1.5rem",
      fontWeight: "bold",
      width: "100%",
      height: "3rem",
      margin: "0.5rem 0",
      borderBottom: "2px solid #333",
      textAlign: "center",
      color: "#333",
      padding: "0.5rem 1rem"
    }}
  >
    <b>TRENIFY</b>
  </h1>
</div>

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