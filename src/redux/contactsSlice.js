import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";



const tasksInitialState = {
    items: [],
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