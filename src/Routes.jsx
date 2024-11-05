import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Home1 from "./pages/Home1";
import WellnessSessionMain from "./pages/WellnessSessionMain";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import WellnessSessionSession from "./pages/WellnessSessionSession";
import ForgotPassword from "./pages/ForgotPassword";
import EmailVerificationLink from "./pages/EmailVerificationLink";
import ChangePassword from "./pages/ChangePassword";
import CompleteProfile from "./pages/CompleteProfile";
import Settings from "./pages/Settings";
import MealPlannermain from "./pages/MealPlannermain";
import GenerateMealPlan from "./pages/GenerateMealPlan";
import MealLog from "./pages/MealLog";

const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "*", element: <NotFound /> },
        
        {
            path: "landing",
            element: <Landing />,
        },
        {
            path: "login",
            element: <Login />,
        },
        {
            path: "signup",
            element: <Signup />,
        },
        {
            path: "forgotpassword",
            element: <ForgotPassword />,
        },
        {
            path: "emailverificationlink",
            element: <EmailVerificationLink />,
        },
        {
            path: "completeprofile",
            element: <CompleteProfile />,
        },
        {
            path: "home1",
            element: <Home1 />,
        },
        {
            path: "settings",
            element: <Settings />,
        },
        {
            path: "changepassword",
            element: <ChangePassword />,
        },
        {
            path: "mealplanner",
            element: <MealPlannermain />,
        },
        {
            path: "generatemealplan",
            element: <GenerateMealPlan />,
        },
        {
            path: "meallog",
            element: <MealLog />,
        },
        {
            path: "wellnesssessionsession",
            element: <WellnessSessionSession />,
        },
        {
            path: "wellnesssessionmain",
            element: <WellnessSessionMain />,
        },
    ]);
    return element;
};

export default ProjectRoutes;