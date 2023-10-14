import { createSlice} from "@reduxjs/toolkit";
import { loginRequest, registerRequest, logOutRequest, getCurrentUserRequest} from "./userCreateAsyncThunk";
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
      // Ім'я слайсу

    name: "user",
      // Початковий стан редюсера слайсу

    initialState: initialState,
      // Об'єкт редюсерів

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
    .addCase(getCurrentUserRequest.pending, pendingHadler)
    .addCase(getCurrentUserRequest.fulfilled, (state, action) => {
        state.status = "resolved";
        state.isLoggedIn = true;
        state.userData.name = action.payload.name;
        state.userData.email = action.payload.email;
    })
    .addCase(getCurrentUserRequest.rejected, rejectHandler)




    // Logout
    .addCase(logOutRequest.pending, pendingHadler)
    .addCase(logOutRequest.fulfilled, (state) => {
        state.status = "resolved";
        state.isLoggedIn = false;
        state.userData.name = null;
        state.userData.email = null;
    })
    .addCase(logOutRequest.rejected, rejectHandler)
})

function pendingHadler(state ) {
    state.error = null;
    state.status = "pending"
}

function rejectHandler(state, action) {
    state.error = action.payload;
    state.status = "rejected"

}
// Генератори екшенів(інструкцій)
// export const {} = postsSlice.actions;
// Експортуємо налаштований редюсер слайсу
export const userReducer = userSlice.reducer;