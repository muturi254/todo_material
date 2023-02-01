import { Box, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import AppBar from "../components/AppBar";
import TodoList from "../components/TodoList";

const Home = () => {

    const [todos, setTodos] = useState([
        { id: 1, name: "Wash clothes" },
        { id: 2, name: "Take babe on a date" },
        { id: 3, name: "Take car to garage" },
        { id: 4, name: "Get grocery" }
    ]);


    const handleClick = (id) => {
        let filteredTodo = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodo)
    }


    return (
        <>
            <AppBar />
            <Container sx={{
                marginTop: 7,
                // border: "1px solid red"
            }}>
                <Box sx={{
                    marginBottom: 5,
                    width: "100%",
                    // border: "1px solid green"
                }}>
                    <TextField size="small" variant="outlined" required sx={{ width: '80%', height: 5}} />
                    <Button variant="contained"  sx={{ marginLeft: 2, width: 120, fontWeight: "bold", height: "2.5rem" }}>Add</Button>
                </Box>
                <TodoList todos={todos} onClick={handleClick} />
            </Container>
        </>
    )
}

export default Home;