import { createAsyncThunk} from "@reduxjs/toolkit";
import { UserAPI } from "services/api";

export const registerRequest = createAsyncThunk(
    'user/register',
    async (formData, { rejectWithValue }) => {
      try {
        const response = await UserAPI.register(formData);
        localStorage.setItem('token', response.token);
        return response;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  
  
  export const loginRequest = createAsyncThunk(
      'user/login',
      async(formData, { rejectWithValue }) => {
        try {
          const response = await UserAPI.login(formData);
          localStorage.setItem('token', response.token);
          console.log(response)
          return response;
        } catch (error) {
          return rejectWithValue(error.message);
        }
      }
    );