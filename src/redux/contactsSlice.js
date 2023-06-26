import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';


const initialState = {
    items: [],
    isLoading: false,
    error: null,
    filter: ''
};

// const initialState = {
//     contacts: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ]
// };

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};


const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    // reducers: {
    //     addContact: (state, action) => {
    //         state.contacts.push(action.payload)
    //     },
    //     deleteContact: (state, action) => {
    //         state.contacts = state.contacts.filter(
    //             contact => contact.id !== action.payload);
    //     },
    // },
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(contact => contact.id === action.payload.id);
                state.items.splice(index, 1);
            })
            .addCase(deleteContact.rejected, handleRejected);
    },
});

export const contactReducer = contactsSlice.reducer;






//     reducers: {
//         addContact: (state, action) => {
//             state.contacts.push(action.payload)
//         },
//         deleteContact: (state, action) => {
//             state.contacts = state.contacts.filter(
//                 contact => contact.id !== action.payload);
//         },
//     },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export default contactsSlice.reducer;