import React from "react";
import RegisterPageForm from "./RegisterPageForm";
import { useDispatch } from "react-redux";
import { loginRequest } from "redux/userSlice/userCreateAsyncThunk";
 function  SignInPageForm  ()  {
  const dispatch = useDispatch();

  const handleLogin = formData => {
      dispatch(loginRequest(formData));  
  }

    return (
      <>
             <RegisterPageForm  onSubmit={handleLogin} isLoginForm />
    </>
  );
  };
  export default SignInPageForm;