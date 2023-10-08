import SignInPageForm from 'components/SignInForm';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from 'redux/userSlice/userCreateAsyncThunk';
import { useEffect } from 'react';
import { selectIsLoggedIn } from 'redux/userSlice/selector';
function SignInPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const navigate = useNavigate()
  const handleLogin = formData => {
    dispatch(loginRequest(formData));
  };
 
  useEffect(() => {
    if (!isLoggedIn) return;
    navigate('/contacts');
  }, [isLoggedIn, navigate]);



  return (
    <>
      <SignInPageForm onSubmit={handleLogin} isLoginForm={false} />
    </>
  );
}
export default SignInPage;
