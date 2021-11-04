import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import { getContacts } from "../../redux/selectors";
import styles from "./ContactForm.module.css";

//TOOLKIT - 2
export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const newContact = () => {
    const includeName = contacts.reduce((acc, contact) => [...acc, contact.name], []);
    const includeNumber = contacts.reduce((acc, contact) => [...acc, contact.number], []);

    if (name === "" || number === "") {
      alert("Please enter all fields!");
      return true;
    }

    if (includeName.includes(name)) {
      alert(`${name} is already in contacts`);
      return true;
    } else if (includeNumber.includes(number)) {
      alert(`${number} is already in contacts`);
      return true;
    }
  };

  const handleChangeName = (event) => {
    setName(event.currentTarget.value);
  };

  const handleChangeNumber = (event) => {
    setNumber(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    resetName();
    resetNumber();

    if (newContact()) {
      return;
    }

    dispatch(actions.addContact(name, number));
  };

  const resetName = () => {
    setName("");
  };
  const resetNumber = () => {
    setNumber("");
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Name</label>
        <input
          onChange={handleChangeName}
          type="text"
          name="name"
          className={styles.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          placeholder="Enter Name"
        ></input>

        <label className={styles.label}>Number</label>
        <input
          onChange={handleChangeNumber}
          type="tel"
          name="number"
          className={styles.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          placeholder="Enter your number"
        />

        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </form>
    </>
  );
}

// REDUX - 1
// const mapStateToProps = state => ({
//   contacts: state.contacts.contacts,
// });

// const mapToDispatchToProps = dispatch => ({
//   onSubmit: (name, number) => dispatch(actions.addContact(name, number)),
// });

// export default connect(mapStateToProps, mapToDispatchToProps)(ContactForm);
