export const userReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return {
        loading: false,
        msg: "User SignUp Successful",
        error: null,
        data: action.payload,
      };
    case "LOGIN":
      return {
        loading: false,
        msg: "Logged in successfully",
        data: action.payload,
        error: null,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        loading: false,
        msg: "Logged out successfully",
        data: null,
        error: null,
      };
    case "USER_ERROR":
      console.log(action.payload);
      return {
        loading: false,
        data: null,
        error: action.payload,
      };
    case "USER_UPDATE":
      console.log(action.payload);
      return {
        loading: false,
        data: { ...state.data, addresses: [...state.data.addresses, action.payload] },
        error: false,
      };
    default:
      return state;
  }
};
