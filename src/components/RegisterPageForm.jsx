import React, { useRef } from 'react';
import './RegisterPageForm.css';
import { useSelector } from 'react-redux';
import { selectStatus } from 'redux/userSlice/selector';
import Loader from './Loader';
function RegisterPageForm ({onSubmit, isLoginForm = false}) {
const nameInputRef = useRef();
const emailInputRef = useRef();
const passwordInputRef = useRef();
const status = useSelector(selectStatus)
const hadleSubmit = event => {
  event.preventDefault()
  const FormData = {
  ...(!isLoginForm && {name: nameInputRef.current.value})   ,
    email: emailInputRef.current.value,
    password: passwordInputRef.current.value,
  }
  onSubmit(FormData);
  event.target.reset()
}



  return (
    <div className="Container">
  <div className={isLoginForm ? "login" : "signup"}>
        <form onSubmit={hadleSubmit}>
        {isLoginForm ? null : (
  <label>
    <input type="text" name="name" placeholder="Name" ref={nameInputRef} required />
  </label>
)}
          <label>
            <input type="email" name="email" placeholder="Email" ref={emailInputRef}  required />
          </label>
          <label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              minLength={7}
              ref={passwordInputRef} 
            />
          </label>
            <button disabled={status==="pending"} type ="submit">{isLoginForm ? "Sign in" : "Sign up"}
             {status === 'pending' && <Loader className="loader"/>}
            </button>
        </form>
      </div>
    </div>
  );
};
export default RegisterPageForm;
