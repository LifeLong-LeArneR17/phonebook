import RegisterPageForm from "components/RegisterPageForm";
import React from "react";
import { useDispatch } from "react-redux";
import { registerRequest } from "redux/userSlice/userCreateAsyncThunk";


function SignUpPage() {
    const dispatch = useDispatch();

    const handleRegister = formData => {
        dispatch(registerRequest(formData));  
    }

    return (
        <div>
            <RegisterPageForm onSubmit={handleRegister} isLoginForm={false} />
        </div>
    )
}


export default SignUpPage;

