import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { nanoid } from "nanoid";


const tasksInitialState = {
    items: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    isLoading: false,
    error: null
  
}

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
      state.items = [...state.items, action.payload]
      console.log(action, state.items)
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
      const index = state.items.findIndex(task => task.id === action.payload.id);
      state.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = tasksSlice.reducer;