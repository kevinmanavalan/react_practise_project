'use client';
import { useEffect, useReducer } from "react"

const initialTodos = [
    {
        id: 1,
        title: "Todo 1",
        complete: false,
    },
    {
        id: 2,
        title: "Todo 2",
        complete: false,
    },
];

const reducer = (state, action) => {         //its like a state resolver in case a complex logic is used to determine the state.
    switch (action.type) {
        case "Completed":
            return state.map((todo) => {
                todo.complete = action.id == todo.id ? true : false;
                return todo;
            })
        default:
            return state
    }

}

const Todos = () => {
    const [todos, dispatch] = useReducer(reducer, initialTodos)

    const handleComplete = (todo) => {
        dispatch({ type: "Completed", id: todo.id })
    }
    return (
        <>
            {todos.map((todo) => {
                return (
                    <div key={todo.id} style={{ color: "white" }}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.complete}
                                onChange={() => handleComplete(todo)}
                            />
                            {todo.title}
                        </label>
                    </div>
                )
            })}
        </>
    )
}
export default Todos