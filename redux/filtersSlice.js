import { createAction } from "@reduxjs/toolkit";

export const filter = createAction("filter/contactFilter");

const initialeState = {
  name: "",
};

export default function filterSliceReducer(state = initialeState, action) {
  switch (action.type) {
    case "filter/contactFilter":
      return {
        ...state,
        name: action.payload.toLowerCase(),
      };

    default:
      return state;
  }
}
