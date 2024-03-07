import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const holidays = [
        "Ramadan 🌙",
        "Halloween 🎃",
        "Eid ul Adha ☪️",
        "Eid ul Fitr 🌒",
        "4th of July 🎆"
    ];

    const [currentHolidayIndex, setCurrentHolidayIndex] = useState<number>(0);

    function advanceAlphabetically() {
        setCurrentHolidayIndex(
            (prevIndex) => (prevIndex + 1) % holidays.length
        );
    }

    function advanceYearly() {
        setCurrentHolidayIndex(
            (prevIndex) => (prevIndex + 1) % holidays.length
        );
    }

    return (
        <>
            <Button onClick={advanceAlphabetically}>
                Advance Alphabetically
            </Button>
            <h1>Holiday: {holidays[currentHolidayIndex]}</h1>
            <Button onClick={advanceYearly}>Advance Yearly</Button>
        </>
    );
}
