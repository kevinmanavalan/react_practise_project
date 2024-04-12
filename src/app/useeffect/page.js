'use client';
import { useEffect, useState } from "react"

const Timer = () => {
    const [count, setCount] = useState(0);
    const [mult, setMult] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
            setMult((count + 1) * 2)
        },
            1000)     // runs on every render or any state change
    })

    // useEffect(() => {
    //     setTimeout(() => setCount(count + 1), 1000)    // runs only once after the first render
    // }, [])

    // useEffect(() => {
    //     setTimeout(() => setCount(count + 1), 1000)    // runs only when the dependencies provided are changed is altered; here "count"
    // }, [count])

    return (
        <>
            <div>The counter is ticking: {count}</div>
            <div>The multiplier is multiplying: {mult}</div>
        </>
    )
}

export default Timer