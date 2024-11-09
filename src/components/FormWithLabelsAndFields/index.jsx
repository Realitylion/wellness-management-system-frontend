import { Button, Text, Input } from "./..";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

export default function CombinedForm({
  labeltext1 = "First Name",
  labeltext2 = "Last Name",
  labeltext3 = "Phone number",
  labeltext4 = "Email ID",
  labeltext5 = "DOB",
  labeltext6 = "Blood Group",
  labeltext7 = "Height",
  labeltext8 = "Any Health Issues / Allergies",
  labeltext9 = "Any Prior Injuries",
  labeltext10 = "Weight",
  editProfileButton = "Submit",
  ...props
}) {
  // State variables to store form data
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [bloodGroup, setBloodGroup] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [healthIssues, setHealthIssues] = React.useState("");
  const [priorInjuries, setPriorInjuries] = React.useState("");

  const navigate = useNavigate();

  const { currentUser } = React.useContext(AuthContext);

  React.useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  React.useEffect(() => {
    if (!currentUser) return;
    const emailVal = currentUser.email;
    
    console.log("Email:", emailVal);
    // Fetch user data from the backend
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_API}/api/getUser?email=${encodeURIComponent(
            emailVal
          )}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("User not found");
        }
        const userData = await response.json();
        console.log("User data:", userData);
        setFirstName(userData.firstName);
        setLastName(userData.lastName);
        setPhoneNumber(userData.phoneNumber);
        setEmail(userData.email);
        setDob(userData.dob.slice(0, 10));
        setBloodGroup(userData.bloodGroup);
        setHeight(userData.height.$numberDecimal);
        setWeight(userData.weight.$numberDecimal);
        setHealthIssues(userData.healthIssuesOrAllergies);
        setPriorInjuries(userData.priorInjuries);
      } catch (error) {
        console.error("Error fetching user:", error.message); 
      }
    };
    fetchUserData();
  }, [currentUser, email]);

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // update user in the backend
    const updateUser = async () => {
      try {
        const body = JSON.stringify({
          firstName,
          lastName,
          phoneNumber,
          profileCompleted: true,
          email,
          dob,
          bloodGroup,
          height,
          weight,
          healthIssuesOrAllergies: healthIssues,
          priorInjuries,
        });
        console.log("Body:", body);
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_API}/api/updateUser`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: body,
          }
        );
        if (!response.ok) {
          throw new Error("Error updating user");
        }
        const data = await response.json();
        console.log(data);
        alert("User updated successfully");
        navigate("/home");
      } catch (error) {
        console.error("Error updating user:", error.message);
      }
    };
    updateUser();
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      {...props}
      className={`${props.className} flex flex-col items-end gap-4`}
    >
      <div className="flex flex-wrap gap-4 w-full">
        {/* First Name */}
        <div className="flex flex-col items-start gap-2 w-full sm:w-1/2">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext1}
          </Text>
          <Input
            shape="square"
            placeholder="Enter Your First Name"
            className="self-stretch border-b border-coolgray-30 px-3.5"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col items-start gap-2 w-full sm:w-1/2">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext2}
          </Text>
          <Input
            shape="square"
            placeholder="Enter Your Last Name"
            className="self-stretch border-b border-coolgray-30 px-3.5"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        {/* Phone Number */}
        <div className="flex flex-col items-start gap-2 w-full">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext3}
          </Text>
          <Input
            shape="square"
            placeholder="Enter Your Mobile Number"
            className="self-stretch border-b border-coolgray-30 px-3.5"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        {/* Email ID */}
        <div className="flex flex-col items-start gap-2 w-full">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext4}
          </Text>
          <Input
            shape="square"
            placeholder="Enter Your Email ID"
            className="self-stretch border-b border-coolgray-30 px-3.5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly
            required
          />
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col items-start gap-2 w-full">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext5}
          </Text>
          <Input
            type="date"
            className="self-stretch border-b border-coolgray-30 px-3.5"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="Enter Your Date Of Birth"
            required
          />
        </div>

        {/* Blood Group */}
        <div className="flex flex-col items-start gap-2 w-full sm:w-1/2">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext6}
          </Text>
          <Input
            shape="square"
            placeholder="Enter Your Blood Group"
            className="self-stretch border-b border-coolgray-30 px-3.5"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
        </div>

        {/* Height */}
        <div className="flex flex-col items-start gap-2 w-full sm:w-1/2">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext7}
          </Text>
          <Input
            shape="square"
            placeholder="Enter Your Height"
            className="self-stretch border-b border-coolgray-30 px-3.5"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>

        {/* Weight */}
        <div className="flex flex-col items-start gap-2 w-full sm:w-1/2">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext10}
          </Text>
          <Input
            shape="square"
            placeholder="Enter Your Weight"
            className="self-stretch border-b border-coolgray-30 px-3.5"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>

        {/* Health Issues */}
        <div className="flex flex-col items-start gap-2 w-full">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext8}
          </Text>
          <Input
            shape="square"
            placeholder="Type NA if none"
            className="self-stretch border-b border-coolgray-30 px-3.5"
            value={healthIssues}
            onChange={(e) => setHealthIssues(e.target.value)}
            required
          />
        </div>

        {/* Prior Injuries */}
        <div className="flex flex-col items-start gap-2 w-full">
          <Text as="p" className="text-[14px] font-normal text-coolgray-90">
            {labeltext9}
          </Text>
          <Input
            shape="square"
            className="self-stretch border-b border-coolgray-30 px-3.5"
            value={priorInjuries}
            placeholder="Type NA if none"
            onChange={(e) => setPriorInjuries(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        shape="square"
        type="submit"
        className="min-w-[140px] border-2 border-solid border-primary-60 px-[26px] font-medium tracking-[0.50px] sm:px-5 mt-4"
      >
        {editProfileButton}
      </Button>
    </form>
  );
}
