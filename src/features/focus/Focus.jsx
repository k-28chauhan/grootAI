import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { useState, useEffect, useRef } from "react";

const Focus = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [timeInput, setTimeInput] = useState("25:00");
    const intervalRef = useRef(null);

    // Parse timeInput like "25:00" → 1500 seconds
    const parseTime = (str) => {
        const [min, sec] = str.split(":").map(Number);
        return (min * 60) + (sec || 0);
    };

    const formatTime = (seconds) => {
        const m = String(Math.floor(seconds / 60)).padStart(2, "0");
        const s = String(seconds % 60).padStart(2, "0");
        return `${m}:${s}`;
    };

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev === 1) {
                        clearInterval(intervalRef.current);
                        setIsRunning(false);
                        alert("time is up");
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000)
        }
        else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const handleStart = () => {
        if (!isRunning) {
            setTimeLeft(parseTime(timeInput));
            setIsRunning(true);
            setHasStarted(true);
        }
    };
    const handlePause = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setIsRunning(false);
        setHasStarted(false);
        setTimeLeft(parseTime(timeInput));
    }

    return (
        <Card className="flex flex-col gap-2 p-4 h-1/2">
            <h1 className="font-bold text-xl">Pomodoro</h1>
            <div className="flex flex-col gap-4 justify-center items-center w-full">
                <input
                    type="text"
                    value={hasStarted ? formatTime(timeLeft) : timeInput}
                    onChange={(e) => {
                        if (!isRunning) {
                            setTimeInput(e.target.value)
                        }
                    }}
                    disabled={hasStarted}
                    className="resize-none border h-10 p-2 w-3/4 text-2xl outline-none text-center rounded-md"
                />
                { (hasStarted) ? (
                    <div className="flex gap-2">
                        {(isRunning) ?
                        (
                        <Button onClick={handlePause}>Pause</Button>
                        )
                        :
                        (
                        <Button onClick={() => setIsRunning(true)}>Resume</Button>
                        )}
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                )
                    :
                    <Button
                        onClick={handleStart}
                        disabled={isRunning}
                        className="w-3/4">Start Focus Session
                    </Button>
                }
            </div>
        </Card>
    )
}
export default Focus;