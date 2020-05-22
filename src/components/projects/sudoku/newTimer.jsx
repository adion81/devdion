import React, { useState, useEffect } from 'react';

const Timer = props => {

    const [elapsedTime,setElapsedTime] = useState(0);
    const [prevTime,setPreviousTime] = useState(0);
    const [floored, setFloored] = useState(Math.floor(elapsedTime/1000));
    const [minutes, setMinutes] = useState(Math.floor(floored / 60));
    const [clockSeconds,setClockSeconds] = useState(floored % 60);

    useEffect(() => {
        setInterval(setInterval(() => tick (), 100))
    },[props]);

    const tick = ()  => {
        if (props.isPlaying) {
            const now = Date.now();
            setPreviousTime(now);
            setElapsedTime(elapsedTime + (now - previousTime));
        }
    };

    const handleStopwatch = () => {
        startPlaying();
        if (!props.isPlaying) {
            setPreviousTime(Date.now());
        }
    };
    return (
        <div className="timer mx-auto xsm:w-4/4 sm:w-3/4">
                <h2 className="counter xsm:text-4xl">({ minutes }:{ (clockSeconds < 10) ? ('0' + clockSeconds) : clockSeconds })</h2>
                <div className="flex justify-evenly">
                    <button onClick={ handleStopwatch } className={props.isPlaying ? 'running ':''}>
                    {props.isPlayin ? 'STOP' : 'START'}
                    </button>
                    <button onClick={props.resetGame }>
                    RESET  
                    </button>
                </div>
            </div>
    );
}

export default Timer;