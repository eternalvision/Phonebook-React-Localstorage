import { combineReducers } from "redux";
import contactFormReducer from "../redux/contactForm/contactFormReducer";

const rootReducer = combineReducers({
  contacts: contactFormReducer,
});

export default rootReducer;
