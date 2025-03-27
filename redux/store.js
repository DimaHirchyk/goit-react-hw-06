import { configureStore, createAction } from "@reduxjs/toolkit";

const initialeState = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
  },
  filters: {
    name: "",
  },
};
const rootReducer = (state = initialeState, action) => {
  console.log(action);

  switch (action.type) {
    case "delete/deletecontact":
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            (item) => item.id !== action.payload
          ),
        },
      };

    case "filter/contactFilter":
      return {
        ...state,
        filters: {
          name: action.payload.toLowerCase(),
        },
      };

    case "add/addContact":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.items, action.payload],
        },
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});

export const delite = createAction("delete/deletecontact");
export const filter = createAction("filter/contactFilter");
export const addContact = createAction("add/addContact");
