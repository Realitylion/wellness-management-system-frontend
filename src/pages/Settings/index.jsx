import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import FormWithLabelsAndFields from "../../components/FormWithLabelsAndFields";
import React from "react";
import NavBar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import { getAuth, deleteUser } from "firebase/auth";


export default function SettingsPage() {
  const navigate = useNavigate();
  const auth = getAuth();

  const navigateToChangePassword = () => {
    navigate("/changepassword");    
  };

  const handleDeleteUser = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete your account? This action cannot be undone.");
    if (!confirmDelete) {
      return;
    }

    const user = auth.currentUser;

    if (user) {
      try {
        await deleteUser(user);
        alert("User account deleted successfully.");
        navigate("/");
      } catch (error) {
        if (error.code === 'auth/requires-recent-login') {
          alert("Please log in again to delete your account.");
          navigate("/login");
        } else {
          alert("Failed to delete the user: " + error.message);
        }
      }
    } else {
      alert("No user is currently signed in.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full items-start bg-coolgray-10">
        <NavBar />
        <div className="flex flex-col gap-3.5 py-5">
          <div className="mx-6 flex items-start md:mx-0 md:flex-col">
            <div className="flex w-[22%] flex-col items-start border border-solid border-coolgray-20 bg-default-white p-2 md:w-full md:px-5">
              <div className="flex self-stretch p-2">
                <Heading as="h2" className="text-[16px] font-medium text-coolgray-90">
                    Settings
                </Heading>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start gap-4 self-center px-6 md:self-stretch md:px-5">
              <div className="flex w-[92%] flex-col justify-center gap-[22px] border border-solid border-coolgray-20 bg-default-white px-4 py-3 md:w-full">
                <div className="flex">
                  <Heading size="heading_6" as="h5" className="text-[18px] font-bold text-coolgray-90">
                    User Details
                  </Heading>
                </div>
                <FormWithLabelsAndFields className="w-[92%] md:w-full input-text" />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <button onClick={navigateToChangePassword} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Change Password
                </button>
                <button onClick={handleDeleteUser} className="bg-red-500 text-white px-4 py-2 rounded-md">
                  Delete User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
