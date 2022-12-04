
import { createSlice } from '@reduxjs/toolkit';

const filter = '';
const filtersSlice = createSlice({
  name: 'filter',
  initialState: filter,
  reducers: {
    setFilter: {
      reducer(_, action) {
        return action.payload;
      },
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;