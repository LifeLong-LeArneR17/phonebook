import React from 'react';
import Home from 'pages/Home/Home';
import LoginPage from 'pages/LoginPage/LoginPage';
import { Routes, Route , } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import SignUpPage from 'pages/RegisterPage/RegisterPage'
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserData } from 'redux/userSlice/selector';
import { logOutRequest } from 'redux/userSlice/userCreateAsyncThunk';
import ContactsPage from "pages/ContactsPage/ContactsPage"
import { Link } from 'react-router-dom';
export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);
   const dispatch = useDispatch()
const handleLogOut  = () => {
  dispatch(logOutRequest())
}

  return (
<div>
        {isLoggedIn ? (
          <div>
            <Link className="link" to="/contacts">Contacts</Link>
            <span>Hello, {userData.name}</span>
            <button onClick={handleLogOut}>LogOut</button>
          </div>
        ) : (
          <main>
          <Routes>
  <Route path="/" element={<SharedLayout />}>
    <Route index element={<Home />} />
    <Route path="login" element={<LoginPage />} />
    <Route path="register" element={<SignUpPage />} />
  </Route>
  <Route path="/contacts" element={<ContactsPage />} />
</Routes>

        </main>
        )}




  
    </div>
  );
};
