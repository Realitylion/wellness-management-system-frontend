import { Helmet } from "react-helmet";
import { Button, Heading, Img, Text } from "../../components"; // Assuming Text is a component for subtitles
import Footer from "../../components/Footer";
import WellnessJourneyCallToAction from "../../components/WellnessJourneyCallToAction";
import WellnessPromotion from "../../components/WellnessPromotion";

import React from "react";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Wellness Management System</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      <div className="bg-default-white py-4">
        {/* Header Section */}
        <header className="container-sm flex items-center justify-between border-b border-solid border-coolgray-20 px-5">
          <Img src="images/img_header_logo.png" alt="Header Logo" className="w-[130px] h-auto p-2 object-contain" />
          <nav className="flex items-center gap-8">
            <ul className="flex flex-wrap gap-8">
              <li><a href="#"><Heading as="p" className="text-[16px] font-medium text-coolgray-90">Home</Heading></a></li>
              <li><a href="#"><Heading as="p" className="text-[16px] font-medium text-coolgray-90">About Us</Heading></a></li>
              <li><a href="#"><Heading as="p" className="text-[16px] font-medium text-coolgray-90">Services</Heading></a></li>
              <li><a href="#"><Heading as="p" className="text-[16px] font-medium text-coolgray-90">Contact</Heading></a></li>
              <li><a href="#"><Heading as="p" className="text-[16px] font-medium text-coolgray-90">Blog</Heading></a></li>
            </ul>
            <div className="flex gap-4">
              <Button variant="outline" className="min-w-[102px] border-2 px-[26px] font-medium">Log In</Button>
              <Button className="min-w-[108px] bg-primary-60 text-white px-[26px] font-medium">Sign In</Button>
            </div>
          </nav>
        </header>

{/* Hero Section */}
<div className="flex items-center justify-between my-10 max-w-5xl mx-auto px-4 lg:px-0">
  <div className="w-full lg:w-1/2 text-left">
    <Heading as="h1" className="text-4xl font-bold text-coolgray-900 mb-2">
      Unlock Your Full Potential with Tailored Wellness Solutions
    </Heading>
    <Heading as="h2" className="text-lg font-semibold text-coolgray-700 mb-3">
      Achieve Your Wellness Goals with Personalized Plans
    </Heading>
    <p className="text-gray-500 mb-6">
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
    <Img src="/images/hero_image.png" alt="Hero" className="w-[80%] max-w-md object-contain" />
  </div>
</div>


{/* Services Section */}
<div className="text-center py-10">
  <Heading as="h2" className="text-3xl font-bold text-coolgray-90 mb-2">Our Services</Heading>
  <Text className="text-lg font-semibold text-coolgray-70 mb-4">Why choose Us?</Text>
  <Text className="text-base text-coolgray-60 mb-8 max-w-2xl mx-auto">
    Our comprehensive wellness approach ensures that every aspect of your health is covered
  </Text>
  <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-5xl mx-auto">
    {/* Service 1 */}
    <div className="border border-coolgray-30 rounded-lg p-4 w-[220px] text-center">
      <Heading as="h3" className="text-lg font-semibold text-coolgray-90">Personalized Fitness Plans</Heading>
      <Text className="text-sm text-coolgray-60 mt-2">
        Tailored workout routines designed to match your fitness level and goals for optimal results
      </Text>
    </div>
    {/* Service 2 */}
    <div className="border border-coolgray-30 rounded-lg p-4 w-[220px] text-center">
      <Heading as="h3" className="text-lg font-semibold text-coolgray-90">Mental Wellness Programs</Heading>
      <Text className="text-sm text-coolgray-60 mt-2">
        Holistic programs that focus on improving mental health through stress management and mindfulness techniques
      </Text>
    </div>
    {/* Service 3 */}
    <div className="border border-coolgray-30 rounded-lg p-4 w-[220px] text-center">
      <Heading as="h3" className="text-lg font-semibold text-coolgray-90">Nutritional Guidance</Heading>
      <Text className="text-sm text-coolgray-60 mt-2">
        AI-generated balanced diets with personalized meal plans to help you achieve your health goals
      </Text>
    </div>
    {/* Service 4 */}
    <div className="border border-coolgray-30 rounded-lg p-4 w-[220px] text-center">
      <Heading as="h3" className="text-lg font-semibold text-coolgray-90">Health Monitoring</Heading>
      <Text className="text-sm text-coolgray-60 mt-2">
        Track and analyze your fitness, nutrition, and mental health progress in real time
      </Text>
    </div>
  </div>
</div>

{/* Impact Section */}
<div className="bg-white py-10 text-center">
  <Heading as="h2" className="text-3xl font-bold mb-3">Our Impact</Heading>
  <Text className="text-lg text-coolgray-60 mb-8">
    "We’re proud to have empowered countless individuals on their wellness journey."
  </Text>
  <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
    {/* Chart Image */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <Img src="images/img_graph_part_graph_style.png" alt="Impact Chart" className="w-full max-w-md h-auto rounded-lg" />
    </div>
    {/* Metrics */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full lg:w-1/2">
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
  <Heading as="h2" className="text-3xl font-bold mb-3">Wellness Insights</Heading>
  <Text className="text-lg text-coolgray-60 mb-8">Stay informed with the latest tips and trends in health and wellness.</Text>
</div>


{/* Call to Action Section */}
<div className="bg-default-white py-10 flex items-center justify-between mx-auto max-w-4xl">
  <div>
    <Heading as="h2" className="text-3xl font-bold mb-3">Start Your Wellness Journey Today</Heading>
    <Text className="text-base text-coolgray-60">
      Don’t wait any longer to achieve the healthier, happier you. Sign up today and take the first step towards your transformation.
    </Text>
  </div>
  <div className="flex gap-4">
    <Button
      variant="outline"
      shape="square"
      className="px-6 py-2 font-medium border-2 border-primary-60"
    >
      Join Now
    </Button>
    <Button
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
