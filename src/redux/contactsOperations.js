import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://649718cc83d4c69925a3690b.mockapi.io/contacts/';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, phone }, { rejectWithValue }) => {
        try {
            const response = await axios.post('/', { name, phone });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`/${contactId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);