export const filterReducer = (state, action) => {
  switch (action.type) {
    case "CATEGORY_ADD":
      return { ...state, category: [...state.category, action.payload] };
    case "CATEGORY_REMOVE":
      return {
        ...state,
        category: state.category.filter(
          (category) => category !== action.payload
        ),
      };
    case "SORT":
      return { ...state, sort: action.payload };
    case "RATING":
      return { ...state, rating: action.payload };
    case "SEARCH":
      return { ...state, searchKey: action.payload };
    case "CLEAR":
      return { category: [], sort: "", rating: 0, searchKey: "" };
    default:
      return state;
  }
};
