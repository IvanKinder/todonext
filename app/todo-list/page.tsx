"use client";
import { Box, Button, List, ListItem, ListItemButton } from "@mui/material";
import { AppDispatch, RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Todo } from "../interfaces/interfaces";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTodo } from "../../store/todoSlice";

const Page: React.FC = () => {
    const todosList = useSelector((state: RootState) => state.todos.todos);
    const dispatch = useDispatch<AppDispatch>();
    const deleteTodoItem = (id: number) => {
      dispatch(deleteTodo(id));
    };
        
    return (
      <Box>
        <List>
          {todosList.map((todo: Todo, idx: number) => (
              <ListItem key={todo.id}>
                <span>{idx + 1}. {todo.name}</span>
                <Button sx={{gap: "20px"}} onClick={() => deleteTodoItem(todo.id)}>
                  <DeleteIcon/>
                </Button>
              </ListItem>
        ))}
        </List>
      </Box>
    );
  }
  
  export default Page;