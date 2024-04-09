'use client'
import React from "react";


const Camera = () => {
    const alerting = () => {
        alert("Photo Clicked!");
    }

    return (
        <button onClick={alerting}>Shutter Button</button>
    );
}

export default Camera;