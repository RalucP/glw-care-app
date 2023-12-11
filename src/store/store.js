// import { compose, createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// const persistConfig = {
//   key: 'root',
//   storage, 
//   blacklist: ['user'],
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = !import.meta.env.PROD ? [logger] : [];

// const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
})

// export const store = createStore(persistedReducer, undefined, composedEnhancers);

// export const persistor = persistStore(store);