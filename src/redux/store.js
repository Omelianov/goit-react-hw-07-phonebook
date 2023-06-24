import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactReducer } from './contactsSlice';

export const store = configureStore({
    reducer: {
        contacts: contactReducer,
        filter: filterReducer,
    },
});






// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import contactsReducer from './contactsSlice';
// import { filterReducer } from './filterSlice';


// export const mainReducers = combineReducers({
//     contacts: contactsReducer,
//     filter: filterReducer,
// });

// const persistConfig = {
//     key: 'phoneBookContacts',
//     storage,
//     whitelist: ['contacts'],
// };

// const persistedReducer = persistReducer(persistConfig, mainReducers);

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// });

// export const persistor = persistStore(store);

