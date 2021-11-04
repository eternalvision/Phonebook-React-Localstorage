import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import { configureStore } from '@reduxjs/toolkit';
import * as actions from "./actions";

//TOOLKIT - 2
const contacts = createReducer(
  [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
  }
);

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});

//REDUX - 1
// import * as actionTypes from './types';

// const contacts = (
//   state = [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   { type, payload },
// ) => {
//   switch (type) {
//     case actionTypes.ADD_CONTACT:
//       return [...state, payload];

//     case actionTypes.DELETE_CONTACT:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
