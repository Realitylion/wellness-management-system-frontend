import React from "react";
import { useRoutes } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoutes.jsx";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import WellnessSessionMain from "./pages/WellnessSessionMain";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import WellnessSession from "./pages/WellnessSessionSession";
import ForgotPassword from "./pages/ForgotPassword";
import EmailVerificationLink from "./pages/EmailVerificationLink";
import ChangePassword from "./pages/ChangePassword";
import CompleteProfile from "./pages/CompleteProfile";
import Settings from "./pages/Settings";
import MealPlannerMain from "./pages/MealPlannerMain";
import GenerateMealPlan from "./pages/GenerateMealPlan";
import MealLog from "./pages/MealLog";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "*", element: <NotFound /> },
    { path: "login", element: <Login /> },
    { path: "signup", element: <Signup /> },
    { path: "forgotpassword", element: <ForgotPassword /> },
    { path: "emailverificationlink", element: <EmailVerificationLink /> },
    { path: "completeprofile", element: <CompleteProfile /> },

    // Protected Routes
    {
      path: "home",
      element: (
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      ),
    },
    {
      path: "settings",
      element: (
        <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      ),
    },
    {
      path: "changepassword",
      element: (
        <ProtectedRoute>
          <ChangePassword />
        </ProtectedRoute>
      ),
    },
    {
      path: "mealplanner",
      element: (
        <ProtectedRoute>
          <MealPlannerMain />
        </ProtectedRoute>
      ),
    },
    {
      path: "generatemealplan",
      element: (
        <ProtectedRoute>
          <GenerateMealPlan />
        </ProtectedRoute>
      ),
    },
    {
      path: "meallog",
      element: (
        <ProtectedRoute>
          <MealLog />
        </ProtectedRoute>
      ),
    },
    {
      path: "wellnesssession",
      element: (
        <ProtectedRoute>
          <WellnessSession />
        </ProtectedRoute>
      ),
    },
    {
      path: "wellnesssessionmain",
      element: (
        <ProtectedRoute>
          <WellnessSessionMain />
        </ProtectedRoute>
      ),
    },
  ]);
  return element;
};

export default ProjectRoutes;
