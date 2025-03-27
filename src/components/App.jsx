import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import SearchBox from "./searchBox/SearchBox";
import css from "./App.module.css";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

// const nameContacts = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

export default function App() {
  return (
    <>
      <Provider store={store}>
        <h1 className={css.text}>Phonebook</h1>
        <ContactForm className={css.form} />
        <SearchBox />
        <ContactList />
      </Provider>
    </>
  );
}
