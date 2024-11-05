"use client";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import Link from "next/link";
import { AppDispatch } from "../../store";

const Page: React.FC = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch<AppDispatch>();
        
    const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const changeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };
    const saveToDo = () => {
      dispatch(addTodo({
        name: name,
        description: description,
      }));
    };
    
    return (
      <Box component="form" className="add-todo-form">
        <TextField onChange={changeName} label="Название" variant="outlined" />
        <TextField onChange={changeDescription} label="Описание" variant="outlined" />
        <Link href="todo-list" className="save-todo-btn">
            <Button onClick={saveToDo} disabled={!name || !description} variant="outlined">Сохранить</Button>
        </Link>
      </Box>
    );
  }
  
  export default Page;