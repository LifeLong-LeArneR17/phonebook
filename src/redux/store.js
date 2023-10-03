import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacsSlice/contacsSlice";
import { userReducer } from "./userSlice/userSlice";

 const rootReducer = combineReducers({
  users: userReducer,
  contacts: contactsReducer,
});


export const store = configureStore({
    reducer: rootReducer,
})