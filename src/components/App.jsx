import React, { Suspense, lazy, useEffect } from 'react';
// import Home from 'pages/Home/Home';
// import LoginPage from 'pages/LoginPage/LoginPage';
import { Routes, Route } from 'react-router-dom';
 import { SharedLayout } from './SharedLayout';
import SignUpPage from 'pages/RegisterPage/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserData } from 'redux/userSlice/selector';
import { getCurrentUserRequest, logOutRequest } from 'redux/userSlice/userCreateAsyncThunk';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Loader from './Loader';
export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const navigate  = useNavigate()
  const handleLogOut = () => {
    dispatch(logOutRequest());
    navigate('/');
  };

 useEffect(() => {
  const token = localStorage.getItem('token');
  if(!token) return;
  dispatch(getCurrentUserRequest());
 })

const Home = lazy (() => import('pages/Home/Home'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));




  return (
    <div>
       <header>  
       <nav>
      {isLoggedIn ? (
        <>
          <div>
            <span>Hello, {userData.name}</span>
            <button onClick={handleLogOut}>LogOut</button>
          </div>
        </>
      ) : (
       <>
       </>
      )}
             </nav>
</header>
<main>
          <Suspense fallback= {<Loader/>} >
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<SignUpPage />} />
              </Route>
              <Route path="/contacts" element={<ContactsPage />} />
            </Routes>
          </Suspense>
        </main>
    </div>
  );
};
