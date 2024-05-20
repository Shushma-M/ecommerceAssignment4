export const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        data: { ...state.data, ...action.payload },
        error: null,
      };
    case "FETCH_LOADING":
      return {
        loading: true,
        data: state.data,
        error: null,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        data: state.data,
        error: action.payload,
      };
    default:
      return state;
  }
};
