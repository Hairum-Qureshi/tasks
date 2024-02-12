import React from "react";
import "./App.css";
import { Button, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "black" }}>
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Welcome!</h1>
            <p>
                My name is Hairum Qureshi <br />
                <b>Hello World</b> <br />
                <img
                    style={{
                        boxSizing: "border-box",
                        width: "100%",
                        display: "block",
                        height: "300px",
                        objectFit: "cover"
                    }}
                    src="https://universe.nasa.gov/system/internal_resources/details/original/325_swift_M31_mosaic_1600.jpg"
                    alt="Photo of a galaxy by NASA"
                />
            </p>
            <p>My hobbies include:</p>
            <ul>
                <li>Coding</li>
                <li>Astrophotography</li>
                <li>Writing</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Button onClick={() => console.log("Hello World!")}>
                Hello World!
            </Button>
            <Row>
                <Col>
                    First column.
                    <div
                        style={{
                            width: "30px",
                            height: "100px",
                            backgroundColor: "red"
                        }}
                    ></div>
                </Col>
                <Col>
                    Second column.
                    <div
                        style={{
                            width: "30px",
                            height: "100px",
                            backgroundColor: "red"
                        }}
                    ></div>
                </Col>
            </Row>
        </div>
    );
}

export default App;
