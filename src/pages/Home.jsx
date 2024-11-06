import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Homepage</h1>
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/login" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Login
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/home1" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Home1
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/workoutplannermain" style={{ color: "#87CEFA", textDecoration: "none" }}>
            WorkoutPlannermain
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/wellnesssessionmain" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Wellness SessionMain
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/landing" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Landing
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/generateworkoutplan" style={{ color: "#87CEFA", textDecoration: "none" }}>
            GenerateWorkoutPlan
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
            <Link to="/signup" style={{ color: "#87CEFA", textDecoration: "none" }}>
                Signup
            </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
            <Link to="/wellnesssessionsession" style={{ color: "#87CEFA", textDecoration: "none" }}>
                WellnessSessionSession
            </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
            <Link to="/forgotpassword" style={{ color: "#87CEFA", textDecoration: "none" }}>
                ForgotPassword
            </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
            <Link to="/exercisetracker" style={{ color: "#87CEFA", textDecoration: "none" }}>
                ExerciseTracker
            </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
            <Link to="/emailverificationlink" style={{ color: "#87CEFA", textDecoration: "none" }}>
                EmailVerificationLink
            </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
            <Link to="/changepassword" style={{ color: "#87CEFA", textDecoration: "none" }}>
                ChangePassword
            </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
            <Link to="/pagenotfound" style={{ color: "#87CEFA", textDecoration: "none" }}>
                PageNotFound
            </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
            <Link to="/completeprofile" style={{ color: "#87CEFA", textDecoration: "none" }}>
                CompleteProfile
            </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
            <Link to="/settings" style={{ color: "#87CEFA", textDecoration: "none" }}>
                Settings
            </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;