import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
// import thunk from "redux-thunk";
import rootSaga from "./root-saga";

// const middlewares = [thunk];
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
