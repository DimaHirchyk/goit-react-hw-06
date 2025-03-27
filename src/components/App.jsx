import { useEffect, useState } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import SearchBox from "./searchBox/SearchBox";
import css from "./App.module.css";

const nameContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function App() {
  const [names, setNames] = useState(() => {
    const LS = localStorage.getItem("user");
    return LS ? JSON.parse(LS) : nameContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(names));
  }, [names]);

  const addUser = (newUser) => {
    setNames((prev) => {
      return [...prev, newUser];
    });
  };

  const deleteUser = (userId) => {
    setNames((prev) => {
      return prev.filter((name) => name.id !== userId);
    });
  };

  const filterName = names.filter((name) =>
    name.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1 className={css.text}>Phonebook</h1>
      <ContactForm onAdd={addUser} className={css.form} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterName} onDelete={deleteUser} />
    </>
  );
}
