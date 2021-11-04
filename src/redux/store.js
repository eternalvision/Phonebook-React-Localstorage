import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import phonebookReducer from "./reducer";

//TOOLKIT - 2
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const rootReducer = combineReducers({
  contacts: phonebookReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

//Redux - 1
// import { combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension'; //Redux - 1

// const rootReducer = combineReducers({
//   contacts: phonebookReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;
