import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [currentSelection, setCurrentSelection] = useState<string>(
        options[0]
    );

    return (
        <div>
            <Form.Group controlId="userEmotions">
                <Form.Label>Select the correct answer:</Form.Label>
                <Form.Select
                    value={currentSelection}
                    onChange={(event) =>
                        setCurrentSelection(event.target.value)
                    }
                >
                    {options.map((option: string, index: number) => (
                        <option value={option} key={index}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {expectedAnswer === currentSelection ? "✔️" : "❌"}
        </div>
    );
}
