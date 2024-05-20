import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FilterContext } from "../context/FilterContext";
import { DataContext } from "../context/DataContext";
import "./Home.css"

function Home() {
  const { dataState, fetchData } = useContext(DataContext);
  const { filterDispatch } = useContext(FilterContext);

  useEffect(() => {
    filterDispatch({ type: "CLEAR" });
    fetchData("/api/categories");
  }, []);

  return (
    <div className="home-page">
      {dataState.loading && (
        <div className="loader-container">
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
      )}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Our Brand</h1>
          <p>Discover the finest products curated just for you.</p>
          <p>Experience quality and craftsmanship in every item.</p>
          <p>Join our community of satisfied customers.</p>
          <p>Shop with confidence and style.</p>
          <button className="shop-now-btn"><NavLink to='/products'>Shop Now</NavLink></button>
        </div>
      </div>
      <div className="categories-section">
        {dataState.data?.categories.map(({ _id, categoryName, description }) => (
          <div className="links">
          <NavLink
            key={_id}
            to="/products"
            onClick={() =>
              filterDispatch({ type: "CATEGORY_ADD", payload: categoryName })
            }
          >
            <div key={_id} className='category-tile'>
              <h3>{categoryName}</h3>
              {description}
            </div>
          </NavLink>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;
