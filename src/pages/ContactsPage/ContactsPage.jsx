import React, { useEffect } from "react";
import ContactsForm from "components/ContactsForm";
import { useDispatch, useSelector } from "react-redux";
import { addContactsRequest, deleteContactsRequest, getContactsRequest } from "redux/contacsSlice/contacsSlice";
import { selectContacts, selectContactsStatus } from "redux/contacsSlice/selector";
import Loader from "components/Loader";
import { selectIsLoggedIn } from "redux/userSlice/selector";
import withAuthRedirect from "HOC/withAuthRedirect";
export function ContactsPage() {
  const dispatch = useDispatch();
 const contacts = useSelector(selectContacts);
 const status = useSelector(selectContactsStatus);
 const isLoggedIn = useSelector(selectIsLoggedIn);
 const handleSubmit = formData => {
  console.log(formData)
  dispatch(addContactsRequest(formData));
 }
 

 useEffect(() => {
  if (!isLoggedIn) return;

  dispatch(getContactsRequest());
}, [isLoggedIn, dispatch]);



const handleDeleteContacts = (contactId) => {
  dispatch(deleteContactsRequest(contactId))
}

 return (
  <div>
    <ContactsForm onSubmit={handleSubmit} />
    {status === "pending" && <Loader/>}
    {contacts?.length > 0 && (
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>

            <p><b>Name: </b>   {contact.name}</p>
            <p><b>Number: </b>   {contact.number}</p>
            <button onClick={() => handleDeleteContacts(contact.id)}>Delete</button>
          </li> 
        ))}
      </ul>
    )}
  </div>
);
}

export default withAuthRedirect(ContactsPage, "/login");
