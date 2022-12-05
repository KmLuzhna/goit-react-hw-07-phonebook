import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filterSlice";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filtersReducer,
    }
});


