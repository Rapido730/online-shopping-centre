import { compose, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";

// import { logger } from "redux-logger";
import { rootReducer } from "./root-reducer";

const ReduxLogger = (store) => (next) => (action) => {
  // custom logger
  if (!action.type) {
    next();
  }

  // console.log("action type", action.type);
  // console.log("action payload", action.payload);
  // console.log("current state", store.getState());

  next(action);

  // console.log("next state", store.getState());
};

const middleWares = [ReduxLogger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
