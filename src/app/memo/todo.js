const Todo = ({ todos }) => {
    console.log(todos)
    return (
        <>
            <div>Todos</div>
            {todos.map((todo, index) => {
                return (
                    <p key={index}>{todo}</p>
                )
            })}
        </>
    )
}

export default Todo