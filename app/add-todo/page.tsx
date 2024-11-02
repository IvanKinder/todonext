"use client";
import { Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const Page: React.FC = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const changeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };
    
    return (
      <Box component="form" className="add-todo-form">
        <TextField onChange={changeName} label="Название" variant="outlined" />
        <TextField onChange={changeDescription} label="Описание" variant="outlined" />
        <div className="save-todo-btn">
            <Button disabled={!name || !description} variant="outlined">Сохранить</Button>
        </div>
      </Box>
    );
  }
  
  export default Page;