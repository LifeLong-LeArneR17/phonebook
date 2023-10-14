import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ContactsAPI } from "services/api";

export const getContactsRequest = createAsyncThunk(
    'contacts/getContacts',
    async(_, thunkApi) => {
        try {
            const response = await ContactsAPI.getContacts();
            return response;
        } catch(error) {
           ;
        }
    }
)



export const addContactsRequest = createAsyncThunk(
    'contacts/addContact',
    async(formData,{rejectWithValue} ) => {
    try {
        const response = await ContactsAPI.addContact(formData);
        return response;
    } catch(error) {
       return rejectWithValue;
    }

    }
)



export const deleteContactsRequest = createAsyncThunk(
    'contacts/deleteContact',
    async(contactId,{rejectWithValue} ) => {
    try {
        const response = await ContactsAPI.deleteContact(contactId);
        return response;
    } catch(error) {
       return rejectWithValue;
    }

    }
)


const initialState = {
    contacts: [],
    status: "idle",
    error: null,
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialState,
    reducers: {

    },
    extraReducers: builder => 
    builder

    // get Contacts
    .addCase(getContactsRequest.pending, pendingHadler)
    .addCase(getContactsRequest.fulfilled, (state, action) => {
        state.status = 'resolved'
        state.contacts =  action.payload;
    })
    .addCase(getContactsRequest.rejected, rejectHandler)
    
    //  add Contact
    .addCase(addContactsRequest.pending, pendingHadler)
    .addCase(addContactsRequest.fulfilled, (state, action) => {
        state.status = 'resolved'
        state.contacts = [...state.contacts, action.payload]
    })
    .addCase(addContactsRequest.rejected, rejectHandler)
    // delecte Contact
    .addCase(deleteContactsRequest.pending, pendingHadler)
    .addCase(deleteContactsRequest.fulfilled, (state, action) => {
        state.status = 'resolved'
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
    })
    .addCase(deleteContactsRequest.rejected, rejectHandler)
    // edit Contact

})

function pendingHadler(state ) {
    state.error = null;
    state.status = 'pending'
}

function rejectHandler(state, action) {
    state.status = 'rejected'
    state.error = action.payload;
}

export const contactsReducer = contactsSlice.reducer;