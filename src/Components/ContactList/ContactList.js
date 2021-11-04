import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import { getVisibleContacts } from "../../redux/selectors";
import styles from "./ContactList.module.css";

//TOOLKIT - 2
export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(actions.deleteContact(id));

  return (
    <ul>
      {contacts.map((contact) => (
        <li className={styles.links} key={contact.id}>
          <p>
            {contact.name} : {contact.number}
          </p>
          <button type="button" className={styles.btn} onClick={() => onDeleteContact(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

//REDUX - 1
// import { connect } from 'react-redux';

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const mapStateToProps = ({ contacts: { contacts, filter } }) => ({
//   contacts: getVisibleContacts(contacts, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDeleteContact: id => dispatch(actions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
