'use client';
import { useState } from "react";
import Todo from "./todo";

const Memo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    const increament = () => {
        setCount(count + 1)
    }

    return (
        <>
            <Todo todos={todos} />
            <div>
                Count: {count}
                <button onClick={increament}>+</button>
            </div>
        </>
    );

}

export default Memo