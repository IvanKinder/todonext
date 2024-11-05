import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, TodoState } from '../app/interfaces/interfaces';


const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{
      name: string;
      description: string;
    }>) => {
      const newTodo: Todo = {
        id: state.todos.length > 0 ? state.todos[state.todos.length-1].id + 1 : 0,
        name: action.payload.name,
        description: action.payload.description,
        completed: false,
      };
      state.todos = [...state.todos, newTodo];

    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
