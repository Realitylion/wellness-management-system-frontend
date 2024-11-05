import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Home1 from "./pages/Home1";
import WorkoutPlannermain from "./pages/WorkoutPlannermain";
import WellnessSessionMain from "./pages/WellnessSessionMain";
import Landing from "./pages/Landing";
import GenerateWorkoutPlan from "./pages/GenerateWorkoutPlan";
import Signup from "./pages/Signup";
import WellnessSessionSession from "./pages/WellnessSessionSession";
import ForgotPassword from "./pages/ForgotPassword";
import ExerciseTracker from "./pages/ExerciseTracker";
import EmailVerificationLink from "./pages/EmailVerificationLink";
import ChangePassword from "./pages/ChangePassword";
import CompleteProfile from "./pages/CompleteProfile";
import Settings from "./pages/Settings";

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
            path: "workoutplannermain",
            element: <WorkoutPlannermain />,
        },
        {
            path: "generateworkoutplan",
            element: <GenerateWorkoutPlan />,
        },
        {
            path: "wellnesssessionsession",
            element: <WellnessSessionSession />,
        },
        {
            path: "exercisetracker",
            element: <ExerciseTracker />,
        },
        {
            path: "wellnesssessionmain",
            element: <WellnessSessionMain />,
        },
    ]);
    return element;
};

export default ProjectRoutes;