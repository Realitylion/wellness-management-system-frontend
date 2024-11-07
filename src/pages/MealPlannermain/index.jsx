import { Helmet } from "react-helmet";
import { Img, Heading } from "../..//components";
import FunFactText from "../..//components/FunFactText";
import MealPlanGenerator from "../..//components/MealPlanGenerator";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";

export default function MealPlannermainPage() {
    const navigate = useNavigate();

    const navigateMealPlan = () => {
        navigate("/generatemealplan");
    }

    const navigateCalories = () => {
        navigate("/meallog");
    }

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
                                <div className="flex flex-col md:flex-row sm:flex-col">
                                    <FunFactText funFactText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." className="gap-2"/>
                                    <FunFactText funFactText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                    et dolore magna aliqua." className="gap-2"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// h-[calc(100vh-100px)]