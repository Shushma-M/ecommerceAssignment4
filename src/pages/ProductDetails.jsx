import React, { useContext } from "react";
import { useParams } from "react-router";
import { DataContext } from "../context/DataContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { dataState, handleWishlist, handleCart } = useContext(DataContext);
  const product = dataState.data.products.find(({ _id }) => _id === id);

  return (
    <div className="product-details-container">
      <img scr="" />
      <div className="product-details">
        <h2>{product.name}</h2>
        <div> {product.description}</div>
        <div className="price">Price: {product.price}$</div>
        <div className="rating">Rating: {product.ratings}</div>
        <button onClick={() => handleWishlist(product)}>Add to Wishlist</button>
        <button onClick={() => handleCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
