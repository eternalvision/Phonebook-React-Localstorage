//============================= Redux ================================
// const SUBMIT_NEW_CONTACT = "contact/submitNewContact";
// const HANDLE_DELETE = "contact/handleDelete";
// const FILTER = "contact/filter";

// export { SUBMIT_NEW_CONTACT, HANDLE_DELETE, FILTER };

// const submitNewContact = (data) => ({
//  type: SUBMIT_NEW_CONTACT,
//  payload: data,
// });

// const handleDelete = (id) => ({
//  type: HANDLE_DELETE,
//  payload: id,
// });

// const filterContacts = (evt) => ({
//  type: FILTER,
//  payload: evt,
// });

// export { submitNewContact, handleDelete, filterContacts };

//============================= Redux Toolkit ================================
import { createAction } from "@reduxjs/toolkit";

const submitNewContact = createAction("contact/submitNewContact");
const handleDelete = createAction("contact/handleDelete");
const filterContacts = createAction("contact/filter");

export { submitNewContact, handleDelete, filterContacts };
