const logger = (store) => (next) => (action) => {
  const currentState = store.getState();
  console.log("CurrentState =>",currentState);
  console.log("Action dispatched =>",action);
  next(action);
  console.log("UpdatedState =>",store.getState());
}

export default logger;