import RegisterPageForm from "components/RegisterPageForm";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectIsLoggedIn, selectAuthError } from "redux/userSlice/selector";
import { registerRequest } from "redux/userSlice/userCreateAsyncThunk";


function SignUpPage() {
    const dispatch = useDispatch();
    const navigate  = useNavigate()
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const authError = useSelector(selectAuthError); 
    
    useEffect(()=> {
     if(!isLoggedIn) return
     navigate('/contacts')
     console.log(isLoggedIn)
    }, [isLoggedIn , navigate])
    
    const handleRegister = formData => {
        dispatch(registerRequest(formData));  
    }



    useEffect(() => {
        if (authError === "User already exists") {
          alert("Пользователь с таким именем уже существует.");
        }
      }, [authError]);

    return (
        <div>
            <RegisterPageForm onSubmit={handleRegister} isLoginForm={false} />
        </div>
    )
}


export default SignUpPage;

