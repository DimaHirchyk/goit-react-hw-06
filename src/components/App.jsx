import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import SearchBox from "./searchBox/SearchBox";
import css from "./App.module.css";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

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
