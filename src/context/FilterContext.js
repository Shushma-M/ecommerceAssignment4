import { createContext, useReducer } from "react";
import { filterReducer } from "../reducer/filterReducer";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    category: [],
    rating: 0,
    sort: "",
    searchKey: "",
  });

  return (
    <FilterContext.Provider
      value={{
        filterState,
        filterDispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
