export const ReduxLogger = (store) => (next) => (action) => {
  // custom logger
  if (!action.type) {
    next();
  }

  console.log("action type", action.type);
  console.log("action payload", action.payload);
  console.log("current state", store.getState());

  next(action);

  console.log("next state", store.getState());
};
