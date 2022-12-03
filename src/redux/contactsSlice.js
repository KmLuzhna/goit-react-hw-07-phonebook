import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const tasksInitialState = [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

const tasksSlice = createSlice({
  name: "contacts",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({name, number}) {
        return {
          payload: {
          name,
          number,
            id: nanoid(),
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addTask, deleteTask } = tasksSlice.actions;
export const contactsReducer = tasksSlice.reducer;