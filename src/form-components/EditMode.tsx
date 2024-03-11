import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState("Your Name");
    const [editMode, setEditMode] = useState(false);
    const [isStudent, setIsStudent] = useState<boolean>(true);

    return (
        <div>
            {editMode ? (
                <>
                    <Form.Group controlId="editForm">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <Form.Check
                            type="checkbox"
                            id="is-student"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={(event) =>
                                setIsStudent(event.target.checked)
                            }
                        />
                        <Form.Switch
                            id="is-edit-mode-enabled"
                            label="Enable edit mode?"
                            checked={editMode}
                            onChange={(event) =>
                                setEditMode(event.target.checked)
                            }
                        />
                    </Form.Group>
                    <div>
                        {`${name} ${
                            isStudent ? " is a student" : "is not a student"
                        }`}
                    </div>
                </>
            ) : (
                <div>
                    <div>
                        {`${name} ${
                            isStudent ? " is a student" : "is not a student"
                        }`}
                    </div>
                    <Form.Switch
                        id="is-edit-mode-enabled"
                        label="Enable edit mode?"
                        checked={editMode}
                        onChange={(event) => setEditMode(event.target.checked)}
                    />
                </div>
            )}
        </div>
    );
}
