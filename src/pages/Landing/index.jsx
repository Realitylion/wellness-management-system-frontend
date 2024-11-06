import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";
import Header from "../../components/Header";
import ServiceOverview from "../../components/ServiceOverview";
import React from "react";

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      <div className="w-full overflow-auto bg-default-white">
        {/* Header Section */}
        <Header className="overflow-x-scroll" />

        {/* Hero Section */}
        <div className="flex items-center justify-between my-10 max-w-5xl mx-auto px-4 lg:px-0">
          <div className="w-full lg:w-1/2 text-left">
            <Heading as="h1" className="text-4xl lg:text-4xl font-bold text-coolgray-900 mb-2">
            Achieve Your Wellness Goals with Personalized Plans
            </Heading>
            
            <p className="text-base lg:text-lg text-gray-900 mb-2">
              Dedicated to helping you maintain a balanced lifestyle with customized fitness
              and nutrition strategies tailored just for you.
            </p>
            <div className="flex gap-4">
              <Button className="bg-primary-60 text-white px-6 py-2 rounded">
                Start Now
              </Button>
              <Button variant="outline" className="border-primary-60 text-primary-60 px-6 py-2 rounded">
                Explore More
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Img src="/images/hero1_image.png" alt="Hero" className="w-[80%] max-w-md object-contain" />
          </div>
        </div>

{/* Services Section */}
<div className="text-center py-10 bg-default-white">
  <Heading as="h1" className="text-4xl lg:text-4xl font-bold text-coolgray-900 mb-4">
    Explore Our Services
  </Heading>
  <Text className="text-gray-900 mb-6 max-w-3xl mx-auto">
    Discover the variety of ways we can support your health and wellness goals through our comprehensive services.
  </Text>
  <div className="flex justify-center gap-6 mt-8 max-w-5xl mx-auto flex-wrap">
    <Button
      variant="outline"
      className="px-6 py-2 border border-black text-black font-medium rounded-lg"
    >
      Personalized Fitness Plans
    </Button>
    <Button
      variant="outline"
      className="px-6 py-2 border border-black text-black font-medium rounded-lg"
    >
      Mental Wellness Programs
    </Button>
    <Button
      variant="outline"
      className="px-6 py-2 border border-black text-black font-medium rounded-lg"
    >
      Nutritional Guidance
    </Button>
    <Button
      variant="outline"
      className="px-6 py-2 border border-black text-black font-medium rounded-lg"
    >
      Health Monitoring
    </Button>
  </div>
</div>

{/* Impact Section */}
<div className="text-center py-10 bg-default-white max-w-5xl mx-auto">
  <div className="text-left px-6">
    <Heading as="h1" className="text-4xl lg:text-4xl font-bold text-coolgray-900 mb-4">
      Empowering you to achieve Holistic Well Being
    </Heading>
    <div className="flex gap-4 mb-8">
      <Button className="bg-primary-60 text-white px-6 py-2 font-medium rounded">
        Get Started
      </Button>
      <Button variant="outline" className="text-primary-60 border-primary-60 px-6 py-2 font-medium rounded">
        Learn More
      </Button>
    </div>
  </div>
  <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
    {/* Chart Image */}
    <div className="flex justify-center w-full lg:w-1/2">
      <Img src="images/img_graph_part_graph_style.png" alt="Impact Chart" className="w-full max-w-md h-auto rounded-lg" />
    </div>
    {/* Metrics */}
    <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
      <div className="border border-coolgray-20 rounded-lg p-4">
        <Heading as="h3" className="text-lg font-semibold text-coolgray-90">100+</Heading>
        <Text className="text-sm text-coolgray-60">Personalized Wellness Plans Created</Text>
      </div>
      <div className="border border-coolgray-20 rounded-lg p-4">
        <Heading as="h3" className="text-lg font-semibold text-coolgray-90">500+</Heading>
        <Text className="text-sm text-coolgray-60">Successful Fitness Transformations</Text>
      </div>
      <div className="border border-coolgray-20 rounded-lg p-4">
        <Heading as="h3" className="text-lg font-semibold text-coolgray-90">1k+</Heading>
        <Text className="text-sm text-coolgray-60">Community Members Engaged</Text>
      </div>
      <div className="border border-coolgray-20 rounded-lg p-4">
        <Heading as="h3" className="text-lg font-semibold text-coolgray-90">5k+</Heading>
        <Text className="text-sm text-coolgray-60">Hours of Mindfulness and Meditation Delivered</Text>
      </div>
    </div>
  </div>
</div>


{/* Call to Action Section */}
<div className="flex justify-between items-center py-10 px-6 max-w-5xl mx-auto bg-default-white">
<Heading as="h1" className="text-4xl lg:text-4xl font-bold text-coolgray-900 mb-4">
    Unlock the best version of Yourself
  </Heading>
  <div className="flex gap-4">
    <Button
      variant="outline"
      className="text-black border-black px-6 py-2 font-medium rounded"
    >
      Learn More
    </Button>
    <Button
      className="bg-primary-60 text-white px-6 py-2 font-medium rounded"
    >
      Get Started
    </Button>
  </div>
</div>



        {/* Footer Section */}
<footer className="flex items-center justify-center bg-gray-700 py-6">
  <div className="container-sm flex flex-col items-center gap-4">
    {/* Logo and Navigation Links */}
    <div className="flex items-center justify-between w-full max-w-4xl px-4">
      <Img src="images/img_footer_logo.png" alt="Footer Logo" className="h-[38px] w-[104px]" />

      <ul className="flex gap-6 text-white text-sm font-medium">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">About Us</a></li>
        <li><a href="#" className="hover:underline">Services</a></li>
        <li><a href="#" className="hover:underline">Blog</a></li>
      </ul>
    </div>

    {/* Copyright Text */}
    <Text className="text-white text-xs text-center mt-2">
      Trenify©2024. All rights reserved.
    </Text>
  </div>
</footer>
      </div>
    </>
  );
}


