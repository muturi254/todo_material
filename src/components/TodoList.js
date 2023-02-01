import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onClick }) => {
    return (
        <>
            {todos.map(todo => <Todo key={todo.id} todo={todo} onClick={onClick} />)}
        </>
    );
}


export default TodoList;