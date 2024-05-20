export const snackbarReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_SNACKBAR":
      console.log(action);
      return {
        type: action.payload.type,
        msg: action.payload.msg,
      };
    case "CLEAR_SNACKBAR":
      return {
        type: null,
        msg: null,
      };
    default:
      return state;
  }
};
