import React, { useContext, useEffect } from "react";
import Filter from "./Filter";
import { FilterContext } from "../context/FilterContext";
import { NavLink } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import './ProductListing.css'
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

function ProductListing() {
  const { dataState, handleWishlist, fetchData, handleCart } =
    useContext(DataContext);
  const { filterState, filterDispatch } = useContext(FilterContext);

  useEffect(() => {
    fetchData("/api/products");
  }, []);

  const searchedProducts =
    filterState.searchKey.length === 0
      ? dataState.data.products
      : dataState.data.products.filter(({ name }) =>
        name.toLowerCase().includes(filterState.searchKey.toLowerCase())
      );
  const ratedProducts =
    filterState.rating === 0
      ? searchedProducts
      : searchedProducts.filter(
        ({ ratings }) => ratings === filterState.rating
      );
  const filteredProducts =
    filterState.category.length === 0
      ? ratedProducts
      : ratedProducts.filter(({ category }) =>
        filterState.category.includes(category)
      );
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (filterState.sort === "Low to High") return a.price - b.price;
    else if (filterState.sort === "High to Low") return b.price - a.price;
    else return 0;
  });

  return (
    <div className="product-listing-container">
      {dataState.loading && (
        <div className="loader-container">
          <div className="loader"></div>
          <p>Loading...</p>
        </div>
      )}
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search products..."
          value={filterState.searchKey}
          onChange={(e) =>
            filterDispatch({ type: "SEARCH", payload: e.target.value })
          }
        />
      </div>
      <div className="filter-wrapper">
        <Filter />
      </div>
      <div className="products-wrapper">
        {sortedProducts.map((product) => {
          const { _id, name, price, image, ratings } = product;
          const isInWishlist = dataState?.data?.wishlist?.findIndex((prod) => prod._id === _id) >= 0
          return (
            <div key={_id} className="product-card">
              <NavLink to={_id}>
                <img className='product-image' src={image} />
                <h4>{name}</h4>
                <div className="details">
                  <div>{price} $</div>
                  <div>{ratings}<FaStar /></div>
                </div>
              </NavLink>


              <button onClick={() => handleWishlist(product)}>{isInWishlist ? <FaHeart size={30} /> : <FaRegHeart size={30} />}</button>
              <button onClick={() => handleCart(product)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductListing;
