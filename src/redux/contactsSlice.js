import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { nanoid } from "nanoid";

// const tasksInitialState = [
//     { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
//     { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
//     { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
//     { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
// ];

const tasksInitialState = {
  contacts: {
    items: [

    ],
    isLoading: false,
    error: null
  }
}


// const tasksSlice = createSlice({
//   name: "contacts",
//   initialState: tasksInitialState,
//   reducers: {
//     addTask: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare({name, number}) {
//         return {
//           payload: {
//           name,
//           number,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteTask(state, action) {
//       const index = state.findIndex(task => task.id === action.payload);
//       state.splice(index, 1);
//     },
//   },
// });

export const tasksSlice = createSlice({
    name: "contacts",
  initialState: tasksInitialState,
  extraReducers: {
    // Код решти редюсерів
    [fetchContacts.pending](state) {
      state.isLoading = true;
      },
    [fetchContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
       },
    [fetchContacts.rejected](state, { payload }) {
        state.isLoading = false;
        state.error = payload;
    },
// ------------------------------------------
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
// -----------------------------------------
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === action.payload);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { addTask, deleteTask } = tasksSlice.actions;
export const contactsReducer = tasksSlice.reducer;