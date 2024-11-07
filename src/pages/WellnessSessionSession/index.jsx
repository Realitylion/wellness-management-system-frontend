import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading } from "../../components";
import "./WellnessSessionSessionPage.css";
import NavBar from "../../components/NavBar";

export default function WellnessSessionPage() {
    return (
        <div className="w-full">
            <NavBar />
            <Helmet>
                <title>Wellness Management System</title>
                <meta name="description" content="Wellness session management" />
            </Helmet>

            {/* Main Content */}
            <div className="mt-5">
                <Heading as="h1" className="main-heading text-center">Record Your Wellness Session</Heading>
                
                {/* Session Categories */}
                <div className="session-categories">
                    <div className="category">🏠 Yoga</div>
                    <div className="category">🏠 Meditation</div>
                    <div className="category">🏠 Work-Life Balance</div>
                    <div className="category">🏠 Stress Management</div>
                </div>

                {/* Choose Session Type and Audio/Video */}
                <div className="session-options-container">
                    <section className="session-options">
                        <h2 className="options-heading">Choose a type of session:</h2>
                        <button className="session-button">Yoga</button>
                        <button className="session-button">Meditation</button>
                        <button className="session-button">Self Acupuncture</button>
                    </section>

                    <section className="audio-options">
                        <h2 className="options-heading">Choose audio/video:</h2>
                        <button className="audio-button">Audio 1</button>
                        <button className="audio-button">Audio 2</button>
                        <button className="audio-button">Audio 3</button>
                        <div className="video-placeholder">
                            <Img src="/images/sample-video.jpg" alt="Meditation Video" />
                        </div>
                    </section>
                </div>

                {/* Start and End Buttons */}
                <div className="action-buttons">
                    <button className="start-button">Start</button>
                    <button className="end-button">End</button>
                </div>
            </div>
        </div>
    );
}
