import { Helmet } from "react-helmet";
import { Img, Heading } from "../..//components";
import MealPlanGenerator from "../..//components/MealPlanGenerator";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { FaLightbulb } from "react-icons/fa"; // Importing icon library

export default function MealPlannermainPage() {
    const navigate = useNavigate();

    const navigateMealPlan = () => {
        navigate("/generatemealplan");
    }

    const navigateCalories = () => {
        navigate("/meallog");
    }

    // Inline styles for the fun fact box
    const funFactBoxStyle = {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f0f4f8',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        padding: '12px 16px',
        fontSize: '14px',
        color: '#4b5563',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        marginBottom: '8px',
        transition: 'transform 0.2s ease-in-out',
    };

    const iconStyle = {
        color: '#f59e0b', // Yellow color for the lightbulb icon
        marginRight: '8px',
        fontSize: '20px',
    };

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
                                        descriptionText="Tracking calories helps you make mindful choices and supports your health goals."
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
                                <Heading
                                    size="4"
                                    as="h2"
                                    className="text-lg font-semibold text-gray-800 mb-4"
                                >
                                    Fun Facts
                                </Heading>
                                <div className="flex flex-col gap-4">
                                    <div style={funFactBoxStyle}>
                                        <FaLightbulb style={iconStyle} />
                                        <p>Small daily habits like hydration and short walks boost your overall wellness.</p>
                                    </div>
                                    <div style={funFactBoxStyle}>
                                        <FaLightbulb style={iconStyle} />
                                        <p>Taking breaks during work can improve focus and productivity.</p>
                                    </div>
                                    <div style={funFactBoxStyle}>
                                        <FaLightbulb style={iconStyle} />
                                        <p>Sunlight exposure in the morning enhances mood and energy levels.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
