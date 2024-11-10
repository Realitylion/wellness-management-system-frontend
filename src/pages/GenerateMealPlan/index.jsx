import { Helmet } from "react-helmet";
import { Heading, Button, Input, SelectBox, Img } from "../../components";
import React from "react";
import NavBar from "../../components/NavBar";

const mealTypeOptions = [
  { label: "Breakfast", value: "breakfast" },
  { label: "Lunch", value: "lunch" },
  { label: "Dinner", value: "dinner" }
];

const cuisineOptions = [
  { label: "Indian", value: "indian" },
  { label: "Chinese", value: "chinese" },
  { label: "Italian", value: "italian" },
  { label: "Mexican", value: "mexican" },
  { label: "American", value: "american" },
  { label: "Japanese", value: "japanese" },
  { label: "Thai", value: "thai" },
  { label: "Mediterranean", value: "mediterranean" },
  { label: "French", value: "french" }
]

const nutrients = [
  "Protein",
  "Carbs",
  "Fats",
  "Vitamin A",
  "Vitamin C",
  "Vitamin D",
  "Vitamin E",
  "Vitamin K",
  "Calcium",
  "Minerals",
  "Fiber"
]

export default function GenerateMealPlanPage() {
  const [selectedNutrientOptions, setSelectedNutrientOptions] = React.useState([]);
  const [mealPlan,setMealPlan] = React.useState("");
  const handleGenerateMealPlanClick = () => {
    generateMealPlan();
  }

  const handleButtonClick = (e, nutrient) => {
    e.preventDefault();
    if (selectedNutrientOptions.length === 5 && !selectedNutrientOptions.includes(nutrient)) {
      return;
    }
    setSelectedNutrientOptions((prev) => {
      console.log(selectedNutrientOptions);
      if (prev.includes(nutrient)) {
        return prev.filter((item) => item !== nutrient);
      } else {
        return [...prev, nutrient];
      }
    });
  };

  const generateMealPlan = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_API}/api/generateMealPlan`, 
      {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify({
          mealType: selectedNutrientOptions[0],
          cuisine: selectedNutrientOptions[1],
          nutrients: selectedNutrientOptions[2],
          goal: selectedNutrientOptions[3],
          ingredients: selectedNutrientOptions[4]
        })
      });
      const data = await response.json();
      setMealPlan(data.mealPlan || "No meal plan generated.");
      console.log(mealPlan);
    } catch (error) {
      console.error("Error generating meal plan:", error);
    }
  };

  


  return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full h-[100vh]">
        <NavBar />          
        <div className="flex flex-col h-full bg-coolgray-10 content-center">
          <div className="w-full flex flex-1 items-center justify-center px-9 py-[46px] lg:h-auto md:h-auto md:py-5 sm:p-4">
            <div className="w-[42%] md:w-full">
              <div className="flex flex-col items-start gap-5">
                <Heading
                    size="text4x1"
                    as="h1"
                    className="ml-4 text-[24px] font-medium tracking-[0.58px] text-color_black-900_01 lg:text-[20px] md:ml-0"
                >
                    Generate Meal Plan
                </Heading>

                <div className="relative content-end self-stretch lg:h-auto md:h-auto">
                  <div className="m-auto flex flex-1 px-3.5 py-1">
                    <SelectBox
                        shape="round"
                        indicator={
                        <Img src="images/down-arrow.png" alt="Arrow Down" className="h-[10px] w-[12px]" />
                        }
                        name="listboxmainone"
                        placeholder="Select Meal Type"
                        options={mealTypeOptions}
                        className="mb-5 m-1 w-[46%] gap-4 rounded-lg border border-solid border-coolgray-20 font-montserrat"
                    />
                    <SelectBox
                        shape="round"
                        indicator={
                          <Img src="images/down-arrow.png" alt="Arrow Down" className="h-[10px] w-[12px]" />
                        }
                        name="listboxmaintwo"
                        placeholder="Select Cuisine"
                        options={cuisineOptions}
                        className="mb-5 m-1 w-[46%] gap-4 rounded-lg border border-solid border-coolgray-20 font-montserrat"
                    />
                  </div>
                  <div className="mx-auto mb-[30px] flex-1">
                    <div className="mt-2 flex flex-col items-start py-1">
                      <Heading
                        size="text4x1"
                        as="h2"
                        className="relative mb-[18px] ml-5 mt-[-14px] text-[24px] font-medium text-color_black-900_01 lg:text-[20px] md:ml-0"
                      >
                        What do you want in your meal?
                      </Heading>
                      <div className="flex flex-col items-start gap-2.5 self-stretch px-3.5 lg:px-5 md:px-5 sm:px-4">
                        <div className="flex flex-wrap items-center gap-[13px] self-stretch">
                          {nutrients.map((nutrient) => (
                            <Button  
                              key={nutrient}
                              color={selectedNutrientOptions.includes(nutrient) ? "coolgray_20" : "default_white"}
                              size="lg"
                              className="min-w-[120px] rounded-[18px] border border-solid border-coolgray-20 px-[19px] font-montserrat font-thin tracking-[0.50px] hover:bg-coolgray-20"
                              onClick={(e) => handleButtonClick(e, nutrient)}
                            >
                              {nutrient}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>  
                  </div>
                  <div className="mx-5 my-auto flex flex-1 flex-col items-start gap-[22px] 1g:mx-0 md:mx-0">
                      <Heading
                          size="text4x1"
                          as="h3"
                          className="text-[24px] font-medium tracking-[0.50px] text-color_black-900_01 1g:text-[20px]"
                      >
                          What do you want to improve?
                      </Heading>
                      <Input
                          color="default_white"
                          size="xs"
                          shape="round"
                          name="edittext"
                          className="self-stretch rounded-[10px] border border-coolgray-20 px-3"
                          placeholder="gain muscles, lose weight, etc."
                      />
                  </div>
                  <div className="mt-5 mx-5 my-auto flex flex-1 flex-col items-start gap-[22px] 1g:mx-0 md:mx-0">
                      <Heading
                          size="text4x1"
                          as="h3"
                          className="text-[24px] font-medium tracking-[0.50px] text-color_black-900_01 1g:text-[20px]"
                      >
                          Add your ingredients
                      </Heading>
                      <Input
                          color="default_white"
                          size="xs"
                          shape="round"
                          name="edittext"
                          className="self-stretch rounded-[10px] border border-coolgray-20 px-3"
                          placeholder="1 cup of rice, 2 eggs, etc."
                      />
                  </div>
                  <div className="mt-5 mx-5 my-auto flex flex-1 flex-col items-start gap-[22px] 1g:mx-0 md:mx-0">
                    <Button 
                      color="primary_60"
                      size="lg"
                      className="rounded-[10px] border border-solid border-coolgray-20 px-5 font-montserrat font-thin tracking-[0.50px] hover:bg-light_blue-a700"
                      onClick={() => handleGenerateMealPlanClick()}
                    >
                      Generate Meal Plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col h-full items-start gap-2 px-[42px] md:self-stretch md:px-5 sm:px-4">
              <Heading
                  size="text4x1"
                  as="h5"
                  className="ml-2 text-[24px] font-medium text-color_black-900_01 lg:text-[20px] md:ml-0"
              >
                  Your Recommended Meal Plan
              </Heading>
              <div className="mr-1.5 flex flex-1 h-full self-stretch rounded-[20px] bg-default-white px-[26px] py-5 md:mr-0 sm:px-4">
                <textarea 
                  className="resize-none w-full bg-transparent focus:outline-none border-none text-coolgray-90 text-[16px] font-montserrat"
                  placeholder="Your meal plan will be displayed here..."
                  readOnly
                  value={mealPlan}
                >
                </textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
