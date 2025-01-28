import React, { useState } from "react";

export const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [colors, setColors] = useState(["red", "yellow", "green"]);

    const toggleColor = () => {
        const currentIndex = colors.indexOf(color);
        const nextIndex = (currentIndex + 1) % colors.length;
        setColor(colors[nextIndex]);
    };

    const addPurple = () => {
        if (!colors.includes("purple")) {
            setColors([...colors, "purple"]);
        }
    };

    return (
        <div className="traffic-light-container" style={{ textAlign: "center", marginTop: "20px" }}>
            <div
                style={{
                    width: "100px",
                    backgroundColor: "#333",
                    borderRadius: "10px",
                    padding: "10px",
                    display: "inline-block"
                }}
            >
                {colors.map((item) => (
                    <div
                        key={item}
                        style={{
                            width: "60px",
                            height: "60px",
                            margin: "10px auto",
                            backgroundColor: item,
                            borderRadius: "50%",
                            opacity: color === item ? 1 : 0.4,
                            cursor: "pointer",
                            transition: "opacity 0.3s"
                        }}
                        onClick={() => setColor(item)}
                    ></div>
                ))}
            </div>

            <div style={{ marginTop: "20px" }}>
                <button onClick={toggleColor} className="btn btn-primary me-2">
                    Toggle Color
                </button>
                <button onClick={addPurple} className="btn btn-secondary">
                    Add Purple
                </button>
            </div>
        </div>
    );
};