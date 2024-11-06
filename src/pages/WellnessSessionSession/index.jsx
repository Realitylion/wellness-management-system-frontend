import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading } from "../../components";
import "./WellnessSessionSessionPage.css";

export default function WellnessSessionPage() {
    return (
        <>
            <Helmet>
                <title>Wellness Management System</title>
                <meta name="description" content="Wellness session management" />
            </Helmet>

            {/* Header */}
            <header className="header">
                <div className="header-container">
                    <Img src="/images/img_header_logo.png" alt="Trenify Logo" className="logo" />
                    <nav>
                        <ul className="nav-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </nav>
                    <Img src="/images/img_lock.svg" alt="User Icon" className="user-icon" />
                </div>
            </header>

            {/* Main Content */}
            <main className="main-content">
                <Heading as="h1" className="main-heading">Record Your Wellness Session</Heading>
                
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
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-container">
                    <Img src="/images/img_footer_logo.png" alt="Trenify Logo" className="footer-logo" />
                    <p>Trenify@2024. All rights reserved.</p>
                    <nav>
                        <ul className="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </>
    );
}
