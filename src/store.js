import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

const initialState = {};
const enhancers = [];
const middleware = [thunk, logger];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
