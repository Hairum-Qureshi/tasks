import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(6);

    return (
        <div>
            <Button onClick={() => setLeftDie(d6())}>Roll Left</Button>
            <div data-testid="left-die">{leftDie}</div>
            <Button onClick={() => setRightDie(d6())}>Roll Right</Button>
            <div data-testid="right-die">{rightDie}</div>
            {leftDie === rightDie && leftDie === 1 && rightDie === 1 && (
                <span>Lose</span>
            )}
            {leftDie === rightDie && !(leftDie === 1 && rightDie === 1) && (
                <span>Win</span>
            )}
        </div>
    );
}
