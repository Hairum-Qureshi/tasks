import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface Prop1 {
    doubleFunction: () => void;
}

interface Prop2 {
    halverFunction: () => void;
}

function Doubler({ doubleFunction }: Prop1): JSX.Element {
    return <Button onClick={doubleFunction}>Double</Button>;
}

function Halver({ halverFunction }: Prop2): JSX.Element {
    return <Button onClick={halverFunction}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    function double() {
        setDhValue((prevValue) => prevValue * 2);
    }

    function halve() {
        setDhValue((prevValue) => prevValue / 2);
    }

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler doubleFunction={double}></Doubler>
            <Halver halverFunction={halve}></Halver>
        </div>
    );
}
