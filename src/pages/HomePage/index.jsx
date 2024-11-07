import { Helmet } from "react-helmet";
import { Button, Heading, Img, Text } from "../../components"; 
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

import React from "react";

export default function HomePage() {
  const navigate = useNavigate();

  const scrollToServices= () => {
    const element = document.getElementById("services");
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      <div className="bg-default-white">
        {/* Header Section */}
        <NavBar />

        {/* Hero Section */}
        <div className="flex items-center justify-between my-10 max-w-5xl mx-auto px-4 lg:px-0">
          <div className="w-full lg:w-1/2 text-left">
            <Heading as="h1" size="headinglg" className="font-bold text-coolgray-900 mb-2">
              Unlock Your Full Potential with Tailored Wellness Solutions
            </Heading>
            <Heading as="h2" size="headingmd" className="font-semibold text-coolgray-700 mb-3">
              Achieve Your Wellness Goals with Personalized Plans
            </Heading>
            <p className="text-base lg:text-lg text-gray-500 mb-6">
              Dedicated to helping you maintain a balanced lifestyle with customized fitness
              and nutrition strategies tailored just for you.
            </p>
            <div className="flex gap-4">
              <Button onClick={() => {navigate("/mealplanner")}} className="bg-primary-60 text-white px-6 py-2 rounded">
                Start Now
              </Button>
              <Button onClick={scrollToServices} variant="outline" className="border-primary-60 text-primary-60 px-6 py-2 rounded">
                Explore More
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Img src="/images/hero_image.png" alt="Hero" className="w-[80%] max-w-md object-contain" />
          </div>
        </div>

      {/* Services Section */}
        <Heading id="services" as="h2" size="headinglg" className="text-center font-bold mb-3">
          Explore Our Services
        </Heading>
        <Text className="text-gray-900 mb-6 max-w-3xl mx-auto">
          Discover the variety of ways we can support your health and wellness goals through our comprehensive services.
        </Text>
        <div className="flex justify-center gap-6 mt-8 max-w-5xl mx-auto flex-wrap">
          <Button
            onClick={() => {
              navigate("/notfound");
            }}
            variant="outline"
            className="px-6 py-2 border border-primary-60 text-primary-60 font-medium rounded-lg cursor-auto hover:bg-[#d5e9fd]"
          >
            Personalized Fitness Plans
          </Button>
          <Button
            onClick={() => {
              navigate("/wellnesssessionmain");
            }}
            variant="outline"
            className="px-6 py-2 border border-primary-60 text-primary-60 font-medium rounded-lg cursor-auto hover:bg-[#d5e9fd]"
          >
            Mental Wellness Programs
          </Button>
          <Button
            onClick={() => {
              navigate("/mealplanner");
            }}
            variant="outline"
            className="px-6 py-2 border border-primary-60 text-primary-60 font-medium rounded-lg cursor-auto hover:bg-[#d5e9fd]"
          >
            Nutritional Guidance
          </Button>
          <Button
            onClick={() => {
              navigate("/notfound");
            }}
            variant="outline"
            className="px-6 py-2 border border-primary-60 text-primary-60 font-medium rounded-lg cursor-auto hover:bg-[#d5e9fd]"
          >
            Health Monitoring
          </Button>
        </div>

        {/* Impact Section */}
        <div className="bg-white py-10 text-center">
          <Heading as="h2" size="headinglg" className="font-bold mb-3">Our Impact</Heading>
          <Text className="text-lg text-coolgray-60 mb-8">
            "We’re proud to have empowered countless individuals on their wellness journey."
          </Text>
          <div className="flex flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
            {/* Chart Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Img src="images/img_graph_part_graph_style.png" alt="Impact Chart" className="w-full max-w-md h-auto rounded-lg" />
            </div>
            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6 w-full lg:w-1/2">
              <div className="border border-coolgray-20 rounded-lg p-4 text-left">
                <Heading as="h3" className="text-lg font-semibold text-coolgray-90">100+</Heading>
                <Text className="text-sm text-coolgray-60">Personalized Wellness Plans Created</Text>
              </div>
              <div className="border border-coolgray-20 rounded-lg p-4 text-left">
                <Heading as="h3" className="text-lg font-semibold text-coolgray-90">500+</Heading>
                <Text className="text-sm text-coolgray-60">Successful Fitness Transformations</Text>
              </div>
              <div className="border border-coolgray-20 rounded-lg p-4 text-left">
                <Heading as="h3" className="text-lg font-semibold text-coolgray-90">1k+</Heading>
                <Text className="text-sm text-coolgray-60">Community Members Engaged</Text>
              </div>
              <div className="border border-coolgray-20 rounded-lg p-4 text-left">
                <Heading as="h3" className="text-lg font-semibold text-coolgray-90">5k+</Heading>
                <Text className="text-sm text-coolgray-60">Hours of Meditation and Mindfulness</Text>
              </div>
            </div>
          </div>
        </div>

        {/* Wellness Insights Section */}
        <div className="text-center py-10">
          <Heading as="h2" size="headinglg" className="text-3xl lg:text-4xl font-bold mb-3">Wellness Insights</Heading>
          <Text className="text-lg text-coolgray-60 mb-8">Stay informed with the latest tips and trends in health and wellness.</Text>
        </div>

        {/* Call to Action Section */}
        <div className="bg-default-white py-10 flex items-center justify-between mx-auto max-w-4xl">
          <div>
            <Heading as="h2" size="headingmd" className="text-3xl lg:text-4xl font-bold mb-3">Start Your Wellness Journey Today</Heading>
            <Text className="text-base text-coolgray-60">
              Don’t wait any longer to achieve the healthier, happier you. Sign up today and take the first step towards your transformation.
            </Text>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={() => {
                navigate("/wellnesssessionmain");
              }}
              shape="square"
              className="px-6 py-2 font-medium bg-primary-60 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}