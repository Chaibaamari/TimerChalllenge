/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import ResultModel from "./ResultModel";

export default function TimerChallenge({ title , TargetTime }) {
    const [remainingTime, setRemainingTime] = useState(TargetTime * 1000);
    
    const timer = useRef();
    const dialog = useRef();

    const TimeRemain = remainingTime > 0 && remainingTime < TargetTime * 1000

    if (remainingTime <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }
    function resetTime() {
       setRemainingTime(TargetTime * 1000);
    }
    
    function handleStart() {
        timer.current = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 10)
        }, 10);
    }
    
    function handleStop() {
        clearInterval(timer.current);
        dialog.current.open()
    }
    return (
        <section className="challenge">
            <ResultModel ref={dialog} resetTime={resetTime} remainingTime = {remainingTime} TargetTime={TargetTime} />
            <h2>{title}</h2>
            <p className="challenge-time">
                {TargetTime}
                second
            </p>
            <p>
                <button onClick={TimeRemain ? handleStop : handleStart}>
                    {TimeRemain ? "Stop Challenge" : "Start Challenge "}
                </button>
            </p>
            <p className="active">
                {TimeRemain ? "Time is running...." : "Time Inactive"}
            </p>
        </section>
    );
}
