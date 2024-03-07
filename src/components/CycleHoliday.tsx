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

    interface Months {
        [key: number]: string;
    }

    const monthlyHolidays: Months = {
        6: "Eid ul Adha ☪️",
        10: "Halloween 🎃",
        3: "Ramadan 🌙",
        4: "Eid ul Fitr 🌒",
        7: "Fourth of July 🎆"
    };

    const holidayMonths = [6, 10, 3, 4, 7];
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
