import React from 'react';
import Home from 'pages/Home/Home';
import LoginPage from 'pages/LoginPage/LoginPage';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import SignUpPage from 'pages/RegisterPage/RegisterPage'
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<SignUpPage />} />
          <Route path="/contacts" element = {<ContactsPage/>} />
        </Route>
      </Routes>
    </div>
  );
};
