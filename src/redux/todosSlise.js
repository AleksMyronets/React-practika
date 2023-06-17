import { createSlice } from '@reduxjs/toolkit';

const todosInitialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: todosInitialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },
    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter(todo => todo.id !== payload);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
export const getTodos = state => state.todos;
