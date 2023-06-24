import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';


const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

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
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload)
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(
                contact => contact.id !== action.payload);
        },
    },
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