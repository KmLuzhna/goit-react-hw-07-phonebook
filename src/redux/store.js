import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filterSlice";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filtersReducer,
    }
});



// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import {
//     persistStore,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//     key: 'contacts',
//     storage,
// };

// const reducers = combineReducers({
//   contacts: contactsReducer,
//     filter: filtersReducer,
// });

// const contactsPersistedReducer = persistReducer(persistConfig, reducers);

// export const store = configureStore({
//     reducer: contactsPersistedReducer,
//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//         }),
// });

// export const persistor = persistStore(store);
