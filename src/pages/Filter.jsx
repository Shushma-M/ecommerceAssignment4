import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { DataContext } from "../context/DataContext";
import './Filter.css'

function Filter() {
  const { dataState } = useContext(DataContext);
  const { filterState, filterDispatch } = useContext(FilterContext);
  return (
    <div className="filter-container">
      <h2>Filter Products</h2>
      <div>
        {dataState.data.categories.map(({ _id, categoryName }) => (
          <div key={_id} className="filter-section">
            <label>
              <input
                type="checkbox"
                checked={filterState.category.includes(categoryName)}
                onChange={(e) => {
                  filterState.category.includes(categoryName)
                    ? filterDispatch({
                        type: "CATEGORY_REMOVE",
                        payload: categoryName,
                      })
                    : filterDispatch({
                        type: "CATEGORY_ADD",
                        payload: categoryName,
                      });
                }}
              />
              {categoryName}
            </label>
          </div>
        ))}
      </div>
      <div className="filter-section">
        <h3>Sort</h3>
        {["Low to High", "High to Low"].map((sortType) => (
          <label key={sortType}>
            <input
              type="radio"
              name="price"
              onClick={() =>
                filterDispatch({ type: "SORT", payload: sortType })
              }
            />
            {sortType}
          </label>
        ))}
      </div>
      <div className="filter-section">
        <h3>Rating</h3>
        <input
          type="range"
          min="0"
          max="5"
          id="rating"
          name="rating"
          list="ratingList"
          step="1"
          value={filterState.rating}
          onChange={(e) =>
            filterDispatch({
              type: "RATING",
              payload: parseInt(e.target.value),
            })
          }
        />
        <datalist id="ratingList">
          {[0, 1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num} label={num.toString()}></option>
          ))}
        </datalist>
      </div>
      <button onClick={() => filterDispatch({ type: "CLEAR" })}>Clear</button>
    </div>
  );
}

export default Filter;
