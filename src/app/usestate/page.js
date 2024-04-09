'use client';
import { useState } from "react";

const Color = () => {
    const [color, setColor] = useState("red");

    return (
        <div style={{ background: color, height: '100vh', display: "flex", justifyContent: "center" }}>
            <button
                type="button"
                onClick={() => setColor("blue")}
            >Blue</button>
            <button
                type="button"
                onClick={() => setColor("red")}
            >Red</button>
            <button
                type="button"
                onClick={() => setColor("pink")}
            >Pink</button>
            <button
                type="button"
                onClick={() => setColor("green")}
            >Green</button>
        </div>
    )
}

export default Color