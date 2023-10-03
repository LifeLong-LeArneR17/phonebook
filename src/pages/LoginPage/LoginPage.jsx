import SignInPageForm from "components/SignInForm";
import React from "react";
import { useDispatch } from "react-redux";
import { loginRequest } from "redux/userSlice/userCreateAsyncThunk";
 function  SignInPage  ()  {
  const dispatch = useDispatch()
 const handleLogin = (formData) => {
   dispatch(loginRequest(formData))
 }

    return (
      <>
     <SignInPageForm onSubmit={handleLogin} isLoginForm={false} />
    </>
  );
  };
  export default SignInPage;