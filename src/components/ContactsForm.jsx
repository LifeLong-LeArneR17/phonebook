import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectStatus } from 'redux/userSlice/selector';
import Loader from './Loader';


function ContactsForm ({onSubmit}) {
const nameInputRef = useRef();
const phoneInputRef = useRef();
const status = useSelector(selectStatus)
const hadleSubmit = event => {
  event.preventDefault()
  const FormData = {
    name: nameInputRef.current.value,
    number: phoneInputRef.current.value,
    
  }
  onSubmit(FormData);
  event.target.reset()
}


  return (
    <div className="Container">
  <div>
        <form onSubmit={hadleSubmit}> 
        <h1>Додати контакт</h1>
          <label>
            <input type="text" name="name" placeholder="Name" ref={nameInputRef}  required />
          </label>
          <label>
            <input
              type="text"
              name="number"
              placeholder="Number"
              required
              ref={phoneInputRef} 
            />
          </label>
            <button disabled={status==="pending"} type ="submit"> Створити контакт
             {status === 'pending' && <Loader className="loader"/>}
            </button>
        </form>
      </div>
    </div>
  );
};
export default ContactsForm;
