import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";
import Reducers from "./reducers";

const initialState = {};

const middleware = [logger];

const store = createStore(
  Reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware, thunk))
);

export default store;
