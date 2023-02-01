import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const Todo = ({todo}) => {
    return (
        <Box sx={{
            marginBottom: 2
        }}>
            <Card color="primary" sx={{
                maxWidth: "92%",
                cursor: 'pointer',
                '&:hover': {
                    background: '#73B7F6',
                }

            }}>
                <CardContent>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <Typography>{todo.name}</Typography>
                        <DeleteOutlineIcon color='error' />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}


export default Todo;