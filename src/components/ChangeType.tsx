import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [currentType, setCurrentType] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeType() {
        if (currentType === "short_answer_question") {
            setCurrentType("multiple_choice_question");
        } else {
            setCurrentType("short_answer_question");
        }
    }

    return (
        <>
            <Button onClick={changeType}>Change Type</Button>
            {/* <span>{type}</span> */}
            <span>
                {currentType === "short_answer_question"
                    ? "Short Answer"
                    : "Multiple Choice"}
            </span>
        </>
    );
}
