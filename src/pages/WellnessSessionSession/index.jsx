import React from "react";
import { Helmet } from "react-helmet";
import { Heading } from "../../components";
import NavBar from "../../components/NavBar";

export default function WellnessSessionPage() {
    const [sessionType, setSessionType] = React.useState("");
    const [audio, setAudio] = React.useState([]);
    // audio : { title: "Audio 1", src: "audio1.mp3" }
    const [video, setVideo] = React.useState([]);
    // video : { title: "Video 1", src: "video1.mp4" }

    React.useEffect(() => {
        if (sessionType !== "")
            console.log("Session Type: ", sessionType);

        // fetch media based on session type
        

    }, [sessionType]);

    const [isRunning, setIsRunning] = React.useState(false);
    const [isPaused, setIsPaused] = React.useState(false);
    const [elapsedTime, setElapsedTime] = React.useState(0);
    const [savedTime, setSavedTime] = React.useState(null); // To store the final timer value
    const [notSavedMessage, setNotSavedMessage] = React.useState(null);

    React.useEffect(() => {
        let interval;

        // Start timer if running and not paused
        if (isRunning && !isPaused) {
            interval = setInterval(() => {
                setElapsedTime((prevTime) => prevTime + 1);
            }, 1000);
        }

        // Clear interval when component unmounts or timer stops
        return () => clearInterval(interval);
    }, [isRunning, isPaused]);

    // Start button function
    const handleStart = () => {
        setIsRunning(true);
        setIsPaused(false);
        setElapsedTime(0); // Reset timer on new start
        setSavedTime(null); // Clear any previously saved time
        setNotSavedMessage(null);
    };

    // Pause button function
    const handlePause = () => {
        if (isRunning) {
            setIsPaused(!isPaused); // Toggle pause state
        }
    };

    // Stop button function
    const handleStop = () => {
        setIsRunning(false);
        setIsPaused(false);
        if (elapsedTime < 120) {
            console.log("Session time too less, not recorded!");
            setNotSavedMessage("Session time too less, not recorded!");
            return;
        }
        setSavedTime(elapsedTime); // Save the final time
        // Save the session time to the database
        
        console.log("Session time recorded: ", formatTime(elapsedTime));
    };

    // Format time for display (HH:MM:SS)
    const formatTime = (timeInSeconds) => {
        const hours = String(Math.floor(timeInSeconds / 3600)).padStart(2, "0");
        const minutes = String(Math.floor((timeInSeconds % 3600) / 60)).padStart(2, "0");
        const seconds = String(timeInSeconds % 60).padStart(2, "0");
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <div className="w-full">
            <NavBar />
            <Helmet>
                <title>Wellness Management System</title>
                <meta name="description" content="Wellness session management" />
            </Helmet>

            {/* Main Content */}
            <div className="mt-5">
                <Heading as="h1" size="headinglg" className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Record Your Wellness Session
                </Heading>

                {/* Session Categories */}
                <div className="flex justify-center gap-6 mb-10">
                    <div className="text-lg p-4 border border-gray-300 rounded-lg bg-gray-100 min-w-[150px] text-center">
                        🧘 Yoga
                    </div>
                    <div className="text-lg p-4 border border-gray-300 rounded-lg bg-gray-100 min-w-[150px] text-center">
                        🧘‍♂️ Meditation
                    </div>
                    <div className="text-lg p-4 border border-gray-300 rounded-lg bg-gray-100 min-w-[150px] text-center">
                        👆 Self-Acupuncture
                    </div>
                    <div className="text-lg p-4 border border-gray-300 rounded-lg bg-gray-100 min-w-[150px] text-center">
                        🏃‍♂️ Jog
                    </div>
                    <div className="text-lg p-4 border border-gray-300 rounded-lg bg-gray-100 min-w-[150px] text-center">
                        👯 Cardio Dance
                    </div>
                    <div className="text-lg p-4 border border-gray-300 rounded-lg bg-gray-100 min-w-[150px] text-center">
                        🎵 Therapy Music
                    </div>
                </div>

                {/* Choose Session Type and Audio/Video */}
                <div className="flex justify-around max-w-3xl mx-auto mb-10 p-5">
                    <section className="flex flex-col items-center gap-4">
                        <h2 className="text-xl font-semibold text-gray-800">Choose a type of session:</h2>
                        <select
                            className="border border-gray-300 rounded-lg p-2 text-gray-700 w-60"
                            value={sessionType}
                            onChange={(e) => setSessionType(e.target.value)}
                        >
                            <option value="" disabled>
                                Select a session type
                            </option>
                            <option value="Yoga">Yoga</option>
                            <option value="Meditation">Meditation</option>
                            <option value="Self-Acupuncture">Self Acupuncture</option>
                            <option value="Jog">Jog</option>
                            <option value="Cardio Dance">Cardio Dance</option>
                            <option value="Therapy Music">Therapy Music</option>
                        </select>

                        <h2 className="text-xl font-semibold text-gray-800">Choose audio/video:</h2>
                        <div className="flex gap-4">
                            {audio.length === 0 && video.length === 0 && (
                                <p className="text-gray-500">Select a session type to view media</p>
                            )}
                            {/* render buttons dynamically */}
                            {audio.map((audio) => (
                                <button
                                    key={audio.title}
                                    className="bg-gray-100 p-2 rounded-lg shadow-md"
                                    onClick={() => console.log("Audio: ", audio.title)}
                                >
                                    {audio.title}
                                </button>
                            ))}
                            {video.map((video) => (
                                <button
                                    key={video.title}
                                    className="bg-gray-100 p-2 rounded-lg shadow-md"
                                    onClick={() => console.log("Video: ", video.title)}
                                >
                                    {video.title}
                                </button>
                            ))}
                        </div>
                    </section>

                    <section className="flex flex-col items-center gap-6 mt-8">
                        <div className="text-xl font-semibold text-gray-800">
                            Press start to record your session
                        </div>
                        
                        {/* Display timer */}
                        <div className="text-2xl font-mono text-gray-700">
                            {formatTime(elapsedTime)}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-6">
                            <button
                                className="bg-green-600 text-white font-bold px-8 py-3 rounded-lg shadow-md transition duration-300 transform hover:bg-green-700 hover:scale-105"
                                onClick={handleStart}
                                disabled={isRunning && !isPaused}
                            >
                                Start
                            </button>
                            <button
                                className="bg-yellow-600 text-white font-bold px-8 py-3 rounded-lg shadow-md transition duration-300 transform hover:bg-yellow-700 hover:scale-105"
                                onClick={handlePause}
                                disabled={!isRunning}
                            >
                                {isPaused ? "Resume" : "Pause"}
                            </button>
                            <button
                                className="bg-red-600 text-white font-bold px-8 py-3 rounded-lg shadow-md transition duration-300 transform hover:bg-red-700 hover:scale-105"
                                onClick={handleStop}
                                disabled={!isRunning}
                            >
                                Stop
                            </button>
                        </div>

                        {/* Display saved time after stopping */}
                        {notSavedMessage !== null && (
                            <div className="text-lg text-red-600 mt-4">{notSavedMessage}</div>
                        )}
                        {savedTime !== null && (
                            <div className="text-lg text-gray-700 mt-4">
                                Session time recorded: {formatTime(savedTime)}
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}
