import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getContactsRequest = createAsyncThunk(
    'user/login',
    async(_, thunkApi) => {

    }
)

const initialState = {
    contacts: null,
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

    })
    .addCase(getContactsRequest.rejected, rejectHandler)
    
    //  add Contact

    // delecte Contact

    // edit Contact

})

function pendingHadler(state ) {
    state.error = null;
}

function rejectHandler(state, action) {
    state.error = action.payload;
}

export const contactsReducer = contactsSlice.reducer;