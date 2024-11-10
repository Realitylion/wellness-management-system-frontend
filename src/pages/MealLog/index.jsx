import React, { useEffect, useState } from "react";
import { Button, Img, SelectBox } from "../../components";
import NavBar from "../../components/NavBar";
import { AuthContext } from "../../context/authContext";

const mealTypeOptions = [
  { label: "Breakfast", value: "Breakfast" },
  { label: "Lunch", value: "Lunch" },
  { label: "Dinner", value: "Dinner" },
  { label: "Snack", value: "Snack" },
];

const MealLog = () => {
  const [mealType, setMealType] = useState("");
  const [foodName, setFoodName] = useState("");
  const [calorieIntake, setCalorieIntake] = useState("");

  const [mealLogs, setMealLogs] = useState([]);

  const fetchMealLogs = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/api/getMealLog?emailID=${currentUser.email}`);
      const data = await response.json();
      
      if (data.message === "No meal logs found for this email ID") 
        return setMealLogs([]);

      // convert date to IST format
      data.forEach((mealLog) => {
        const date = new Date(mealLog.date);
        mealLog.date = date.toLocaleDateString();
      });

      if (response.ok) {
        setMealLogs(data);
      } else {
        alert(`Failed to fetch meal logs: ${data.error}`);
      }
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  };

  React.useEffect(() => {
    fetchMealLogs();
  }, []);

  const handleMealTypeChange = (selectedOption) => {
    setMealType(selectedOption ? selectedOption.value : "");
  };
  const handleFoodNameChange = (e) => setFoodName(e.target.value);
  const handleCalorieIntakeChange = (e) => setCalorieIntake(e.target.value);

  const { currentUser } = React.useContext(AuthContext);

  const handleSaveCalories = async (e) => {
    e.preventDefault();

    // Validate fields are filled out
    if (mealType && foodName && calorieIntake) {
        const email = currentUser.email;
        const date = new Date().toLocaleDateString();

        // Prepare the body for the POST request
        const body = JSON.stringify({
            meal: mealType,
            calories: calorieIntake,
            date,
            emailID: email
        });

        try {
            // Send POST request to the API endpoint
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/api/addMealLog`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: body
            });

            const data = await response.json();

            // Check for successful response
            if (response.ok) {
                alert("Meal log saved successfully!");
                fetchMealLogs();
                // Optionally, reset form fields
                setMealType('');
                setFoodName('');
                setCalorieIntake('');
            } else {
                // Display error message from response
                alert(`Failed to save meal log: ${data.error}`);
            }
        } catch (error) {
            // Handle network or other errors
            alert(`An error occurred: ${error.message}`);
        }
    } else {
        alert("Please fill all the fields");
    }
  };

  const handleDeleteMealLog = (mealLogID) => async () => {
    try {
      console.log(mealLogID);
      const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/api/deleteMealLog`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mealLogID }),
      });
      const data = await response.json();

      if (response.ok) {
        fetchMealLogs();
      } else {
        alert(`Failed to delete meal log: ${data.error}`);
      }
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    }
  };

  return (
    <>
      <div className="w-full h-[100vh]">
        <NavBar />
        <div className="pt-5 flex h-full flex-col items-center gap-4 bg-coolgray-10">
          <h1 className="text-2xl font-bold text-center">TRACK YOUR CALORIES</h1>
          <div className="flex flex-1 p-8 pt-0 bg-gray-100">
            <form onSubmit={handleSaveCalories} className="flex flex-col gap-6 w-1/2 p-4">
              <div className="w-3/4">
                <label className="block font-bold mb-2">Select Meal Type:</label>
                  <SelectBox
                    shape="round"
                    value={mealTypeOptions.find((option) => option.value === mealType)}
                    onChange={handleMealTypeChange}
                    indicator={
                    <Img src="images/down-arrow.png" alt="Arrow Down" className="h-[10px] w-[12px]" />
                    }
                    name="listboxmainone"
                    placeholder="Select Meal Type"
                    options={mealTypeOptions}
                    className="mb-5 m-1 w-[46%] gap-4 rounded-lg border border-solid border-coolgray-20 font-montserrat"
                    required
                  />
              </div>
                <div className="w-3/4">
                  <label className="block font-bold mb-2">Add meal consumed</label>
                  <input
                    type="text"
                    value={foodName}
                    onChange={handleFoodNameChange}
                    placeholder="Enter food name"
                    className="w-full p-2 border rounded"
                    />
                </div>
                <div className="w-3/4">
                  <label className="block font-bold mb-2">Add calorie intake</label>
                  <input
                    type="number"
                    value={calorieIntake}
                    onChange={handleCalorieIntakeChange}
                    placeholder="Kcal."
                    required
                    className="w-full p-2 border rounded"
                  />
                </div>
              <Button type="submit" variant="fill" color="primary_60" className="w-3/4 py-2 font-bold rounded hover:bg-light_blue-a700">SAVE</Button>          
            </form>

            <div className="w-1/2 p-4">
              <h2 className="font-bold mb-2">Meal log</h2>
              <div className="w-full max-h-96 overflow-y-auto">
                
                <table className="w-full text-center border-collapse">
                  <thead>
                    <tr className="bg-[#0f62fe]">
                      <th className="py-2 border">Day/ Date</th>
                      <th className="py-2 border">Meal</th>
                      <th className="py-2 border">Calories</th>
                      <th className="py-2 border">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mealLogs.length === 0 && (
                      <tr>
                        <td colSpan="4" className="border">No meal logs found</td>
                      </tr>
                    )}
                    {mealLogs !== null && mealLogs.map((mealLog) => (
                      <tr key={mealLog._id}>
                        <td className="border">{mealLog.date}</td>
                        <td className="border">{mealLog.meal}</td>
                        <td className="border">{mealLog.calories}</td>
                        <td className="border">
                          <Button 
                            variant="fill.default_white" 
                            size="sm" 
                            className="mx-auto px-2"
                            onClick={handleDeleteMealLog(mealLog._id)}
                          >
                            <Img src="images/delete.png" className="h-[23px] w-[23px]" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealLog;
