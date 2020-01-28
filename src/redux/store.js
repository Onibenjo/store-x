import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from 'redux-persist';
import rootReducer from "./root-reducer";

const middlewares = [];

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

const persistor = persistStore(store);

export  {store, persistor};
