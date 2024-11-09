import { Helmet } from "react-helmet";
import { Img, Heading } from "../../components";
import MealPlanGenerator from "../../components/MealPlanGenerator";
import FunFactText from "../../components/FunFactText";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";

export default function MealPlannermainPage() {
    const navigate = useNavigate();
    const [funFacts, setFunFacts] = useState([]);

    const navigateMealPlan = () => {
        navigate("/generatemealplan");
    }

    const navigateCalories = () => {
        navigate("/meallog");
    }

    // Fetch fun facts from the backend when the component mounts
    useEffect(() => {
        fetch("http://localhost:4000/api/getFunFact")
            .then(response => response.json())
            .then(data => setFunFacts(data))
            .catch(error => console.error("Error fetching fun facts:", error));
    }, []);

    return (
        <>
            <Helmet>
                <title>Wellness Management System</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="w-full h-[100vh]">
                <NavBar />
                <div className="flex h-full flex-col items-center gap-4 bg-coolgray-10">
                    <div className="flex-1 mx-auto mb-1 flex w-full max-w-[1406px] items-center gap-[30px] self-stretch md:flex-col md:px-5">     
                        <div className="h-[700px] flex-1 md:self-stretch">
                            <div className="rounded-[10px] bg-default-white p-5">
                            <div className="mt-4 flex items-center md:flex-col">
                                <div className="flex flex-1 flex-col gap-11 md:self-stretch">
                                    <MealPlanGenerator buttonClickHandler={navigateMealPlan} />
                                    <MealPlanGenerator
                                        buttonClickHandler={navigateCalories}
                                        titleText="Track your Calories"
                                        descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                        buttonText="Track Calories"
                                    />
                                </div>
                                <div className="mt-2.5 flex w-[42%] flex-col items-end gap-[72px] px-7 md:w-full md:gap-[54px] sm:gap-9 sm:px-5">
                                <div className="flex w-[90%] flex-col items-start gap-[26px] md:w-full">
                                    <Heading
                                    size="3"
                                    as="h1"
                                    className="font-spacegrotesk text-[30px] font-medium text-color_black-900_01 md:text-[28px] sm:text-[26px]"
                                    >
                                    Analytics
                                    </Heading>
                                    <Img
                                        src="images/favourite_foods.png"
                                        alt="Screenshot 2024"
                                        className="rounded-[26px] object-cover md:h-auto"
                                    />
                                </div>
                                <Img
                                    src="images/diet_nutrients.png"
                                    alt="Screenshot2024"
                                    className="h-[266px] w-[90%] rounded-[26px] object-contain"
                                />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="max-h-[700px] w-1/5 md:w-full overflow-auto">
                            <div className="rounded-[10px] h-auto bg-default-white px-5 py-6 sm:py-5">
                                <div className="flex flex-col gap-4">
                                    {funFacts.length > 0 ? (
                                        funFacts.map((fact, index) => (
                                            <FunFactText key={index} funFactText={fact.fact} className="gap-2" />
                                        ))
                                    ) : (
                                        <p>Loading fun facts...</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
