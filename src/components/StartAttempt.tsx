import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [progress, setProgress] = useState(false);

    return (
        <div>
            <Button
                disabled={progress || attempts === 0}
                onClick={() => {
                    setAttempts((attempts) => attempts - 1);
                    setProgress(true);
                }}
            >
                Start Quiz
            </Button>
            <Button
                disabled={!progress}
                onClick={() => {
                    setProgress(false);
                }}
            >
                Stop Quiz
            </Button>
            <Button
                disabled={progress}
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
            >
                Mulligan
            </Button>
            <p>
                Number of attempts: <span>{attempts}</span>
            </p>
        </div>
    );
}
