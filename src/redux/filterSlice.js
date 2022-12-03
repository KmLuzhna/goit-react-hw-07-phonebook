// import { createSlice } from "@reduxjs/toolkit";


// // const filtersInitialState = { filter: '' };

// // const filtersSlice = createSlice({
// //   name: "filters",
// //   initialState: filtersInitialState,
// //   reducers: {
// //     setFilter(state, action) {
// //       state.filter = action.payload;
// //     },
// //   },
// // });


// const filters = '';
// const filtersSlice = createSlice({
//   name: 'filter',
//   initialState: filters,
//   reducers: {
//     setFilter: {
//       reducer(_, action) {
//         return action.payload;
//       },
//     },
//   },
// });

// export const { setFilter } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;



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