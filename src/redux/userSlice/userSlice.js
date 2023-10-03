import { createSlice} from "@reduxjs/toolkit";
import { loginRequest, registerRequest } from "./userCreateAsyncThunk";
const initialState = {
    userData: {
      name: null,
      email: null,
    },
    status: "idle",
    isLoggedIn: false,
    error: null,
}

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {

    },
    extraReducers: builder => 
    builder

    // LOGIN
    .addCase(loginRequest.pending, pendingHadler)
    .addCase(loginRequest.fulfilled, (state, action) => {
      state.status = "resolved";
      state.isLoggedIn = true;
      state.userData.name = action.payload.user.name;
      state.userData.email = action.payload.user.email;
    })
    .addCase(loginRequest.rejected, rejectHandler)
    
    //  REGISTER
    .addCase(registerRequest.pending, pendingHadler)
    .addCase(registerRequest.fulfilled, (state, action) => {
        state.status = "resolved";
        state.isLoggedIn = true;
        state.userData.name = action.payload.user.name;
        state.userData.email = action.payload.user.email;
    })
    .addCase(registerRequest.rejected, rejectHandler)



    // GET current user

    // Logout
})

function pendingHadler(state ) {
    state.error = null;
    state.status = "pending"
}

function rejectHandler(state, action) {
    state.error = action.payload;
    state.status = "rejected"

}

export const userReducer = userSlice.reducer;