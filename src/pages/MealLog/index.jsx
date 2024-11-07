import React, { useState } from "react";
import { Button, Img, SelectBox } from "../../components";
import NavBar from "../../components/NavBar";

const mealTypeOptions = [
  { label: "Breakfast", value: "breakfast" },
  { label: "Lunch", value: "lunch" },
  { label: "Dinner", value: "dinner" }
];

const MealLog = () => {
  const [mealType, setMealType] = useState("");
  const [isCalories, setIsCalories] = useState(false);
  const [foodName, setFoodName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [calorieIntake, setCalorieIntake] = useState("");

  const handleToggle = () => setIsCalories(!isCalories);
  const handleMealTypeChange = (selectedOption) => {
    setMealType(selectedOption ? selectedOption.value : "");
  };
  const handleFoodNameChange = (e) => setFoodName(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);
  const handleCalorieIntakeChange = (e) => setCalorieIntake(e.target.value);

  return (
    <>
      <div className="w-full h-[100vh]">
        <NavBar />
        <div className="pt-5 flex h-full flex-col items-center gap-4 bg-coolgray-10">
          <h1 className="text-2xl font-bold text-center">TRACK YOUR CALORIES</h1>
          <div className="flex flex-1 p-8 pt-0 bg-gray-100">
            <div className="flex flex-col gap-6 w-1/2 p-4">
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
                  />
              </div>

              <div className="w-3/4 flex items-center gap-4">
                <span>Food</span>
                <div
                  className="w-10 h-6 rounded-full cursor-pointer bg-gray-300"
                  onClick={handleToggle}
                  >
                  <div
                    className={`w-4 mt-1 ml-1 h-4 bg-white rounded-full shadow-md transform duration-300 bg-[#0f62fe] ${isCalories ? "translate-x-4" : ""}`}
                    />
                </div>
                <span>Calories</span>
              </div>

              {!isCalories && (
                <>
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
                    <label className="block font-bold mb-2">Add quantity</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="w-full p-2 border rounded"
                        />
                      <button className="px-4 py-1 bg-gray-200 rounded">+</button>
                    </div>
                  </div>
                </>
              )}

              {isCalories && (
                <>
                  <div className="w-3/4">
                    <label className="block font-bold mb-2">Add calorie intake</label>
                    <input
                      type="number"
                      value={calorieIntake}
                      onChange={handleCalorieIntakeChange}
                      placeholder="Kcal."
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </>
              )}
              <Button variant="fill" color="primary_60" className="w-3/4 py-2 font-bold rounded hover:bg-light_blue-a700">SAVE</Button>          
            </div>

            <div className="w-1/2 p-4">
              <h2 className="font-bold mb-2">Meal log</h2>
              <div className="w-full">
                <table className="w-full text-center border-collapse">
                  <thead>
                    <tr className="bg-[#0f62fe]">
                      <th className="py-2 border">Day/ Date</th>
                      <th className="py-2 border">Meal</th>
                      <th className="py-2 border">Calories</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-200">
                      <td colSpan="3" className="py-8 text-center">
                        {/* Placeholder for empty table */}
                      </td>
                    </tr>
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
