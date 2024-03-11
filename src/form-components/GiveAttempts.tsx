import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [numRequesting, setNumRequesting] = useState("");

    return (
        <div>
            <p>Attempts Left: {attemptsLeft}</p>
            <Form.Group controlId="formQuiz">
                <Form.Label>Request Number of Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={numRequesting}
                    onChange={(event) => setNumRequesting(event.target.value)}
                />
            </Form.Group>
            <Button
                disabled={attemptsLeft === 0}
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
            >
                Use
            </Button>
            <Button
                onClick={() =>
                    setAttemptsLeft(
                        numRequesting != "" || numRequesting.trim() != " "
                            ? attemptsLeft + Number(numRequesting)
                            : attemptsLeft + 1
                    )
                }
            >
                Gain
            </Button>
            {numRequesting}
        </div>
    );
}
