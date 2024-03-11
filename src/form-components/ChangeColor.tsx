import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [chosenColor, setChosenColor] = useState<string>();
    const colors: string[] = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "indigo",
        "violet"
    ];

    return (
        <div>
            <h2>Change Color:</h2>
            <Form.Group controlId="userEmotions">
                {colors.map((color: string, index: number) => (
                    <>
                        <Form.Check
                            key={index}
                            inline
                            label={color}
                            type="radio"
                            name="color"
                            onChange={(event) =>
                                setChosenColor(event.target.value)
                            }
                            id={`color-check-${color}`}
                            value={color}
                            checked={chosenColor === color}
                        />
                    </>
                ))}
            </Form.Group>

            <p>
                You have chosen{" "}
                <span
                    style={{ backgroundColor: `${chosenColor}` }}
                    data-testid="colored-box"
                >
                    {chosenColor}
                </span>
                .
            </p>
        </div>
    );
}
