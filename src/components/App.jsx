import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [contactData, setContactData] = useState(() => {
    const savedContacts = window.localStorage.getItem("contact-list");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  useEffect(() => {
    window.localStorage.setItem("contact-list", JSON.stringify(contactData));
  }, [contactData]);

  const [searchValue, setSearchValue] = useState("");

  const prepareList = (contactData, searched) => {
    if (!searched) {
      return contactData;
    }
    return contactData.filter((contact) =>
      contact.name
        .toLowerCase()
        .split(" ")
        .some((word) => word.startsWith(searched.toLowerCase()))
    );
  };

  const handleAddContact = (values) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.phone,
    };
    setContactData((prevData) => [...prevData, newContact]);
  };

  const handleRemoveContact = (keyToRemove) => {
    setContactData((prevData) =>
      prevData.filter((contact) => contact.id !== keyToRemove)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <ContactList
        contactData={prepareList(contactData, searchValue)}
        handleRemoveContact={handleRemoveContact}
      />
    </div>
  );
};

export default App;