import React from "react";
import Section from "./Components/Section/Section";
import ContactList from "./Components/ContactList/ContactList";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";

const App = () => {
  //  componentDidMount() {
  //   const items = localStorage.getItem("contacts");
  //   if (items) {
  //    const parsedContacts = JSON.parse(items);
  //    this.setState({ contacts: parsedContacts });
  //   }
  //  }

  //  componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  //  }

  return (
    <>
      <Section title={"Phonebook"}>
        <ContactForm />
      </Section>

      <Section title={"Contacts"}>
        <Filter />

        <ContactList />
      </Section>
    </>
  );
};
export default App;
