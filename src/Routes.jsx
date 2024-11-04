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
import PageNotFound from "./pages/PageNotFound";
import CompleteProfile from "./pages/CompleteProfile";
import Settings from "./pages/Settings";

const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "*", element: <NotFound /> },
        {
            path: "login",
            element: <Login />,
        },
        {
            path: "home1",
            element: <Home1 />,
        },
        {
            path: "workoutplannermain",
            element: <WorkoutPlannermain />,
        },
        {
            path: "wellnesssessionmain",
            element: <WellnessSessionMain />,
        },
        {
            path: "landing",
            element: <Landing />,
        },
        {
            path: "generateworkoutplan",
            element: <GenerateWorkoutPlan />,
        },
        {
            path: "signup",
            element: <Signup />,
        },
        {
            path: "wellnesssessionsession",
            element: <WellnessSessionSession />,
        },
        {
            path: "forgotpassword",
            element: <ForgotPassword />,
        },
        {
            path: "exercisetracker",
            element: <ExerciseTracker />,
        },
        {
            path: "emailverificationlink",
            element: <EmailVerificationLink />,
        },
        {
            path: "changepassword",
            element: <ChangePassword />,
        },
        {
            path: "pagenotfound",
            element: <PageNotFound />,
        },
        {
            path: "completeprofile",
            element: <CompleteProfile />,
        },
        {
            path: "settings",
            element: <Settings />,
        },
    ]);
    return element;
};

export default ProjectRoutes;