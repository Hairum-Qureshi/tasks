import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [visibility, setVisibility] = useState(false);

    return (
        <>
            <Button onClick={() => setVisibility(!visibility)}>
                Reveal Answer
            </Button>
            {visibility && <span>42</span>}
        </>
    );
}
