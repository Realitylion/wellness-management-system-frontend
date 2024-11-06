import React from "react";
import { Img } from "../../components";
import "./WellnessSessionSessionPage.css";

export default function WellnesssessionsessionColumnTwo() {
    return (
        <section className="audio-options flex flex-col items-center gap-4">
            <h2 className="options-heading">Choose Audio/Video:</h2>
            
            {/* Audio Buttons with Embedded SVG Play Icon */}
            <div className="audio-buttons">
                <button className="audio-button">
                    <span className="play-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="currentColor"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </span>
                    Audio 1
                </button>
                <button className="audio-button">
                    <span className="play-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="currentColor"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </span>
                    Audio 2
                </button>
                <button className="audio-button">
                    <span className="play-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="16"
                            height="16"
                            fill="currentColor"
                        >
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </span>
                    Audio 3
                </button>
            </div>
            
            {/* Video Placeholder */}
            <div className="video-placeholder">
                <Img
                    src="/images/sample-video.jpg"
                    alt="Meditation Video"
                    className="rounded-lg"
                />
                <p className="video-label">Meditation Video</p>
            </div>
        </section>
    );
}
