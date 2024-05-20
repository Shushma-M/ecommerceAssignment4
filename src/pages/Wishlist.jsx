import React, { useContext, useEffect } from "react";
import NoAccess from "./NoAccess";
import { DataContext } from "../context/DataContext";
import { UserContext } from "../context/UserContext";
import { SnackbarContext } from "../context/SnackbarContext";
import "./ProductListing.css"

function Wishlist() {
  const { dataState, fetchProtectedData, handleProtectedRemove, handleCart } =
    useContext(DataContext);
  const { userState } = useContext(UserContext);
  const { showSnackbar } = useContext(SnackbarContext);

  useEffect(() => {
    fetchProtectedData("/api/user/wishlist");
  }, []);

  if (userState.data) {
    return (
      <div className="products-wrapper">
        {dataState.data.wishlist.length === 0 && (
          <h2>Your wishlist is empty</h2>
        )}
        {dataState.data.wishlist.map((product) => {
          const { _id, name, price, image } = product;
          return (
            <div id={_id} className="product-card">
              <h4>{name}</h4>
              <img className='product-image' src={image} />
              <div>{price}$</div>
              <button
                onClick={() => {
                  handleCart(product);
                  handleProtectedRemove("/api/user/wishlist/" + _id);
                }}
              >
                {" "}
                Add to Cart
              </button>
              <button
                onClick={() => {
                  handleProtectedRemove("/api/user/wishlist/" + _id)
                  showSnackbar('Removed from Wishlist');
                }
                }
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    );
  } else return <NoAccess />;
}

export default Wishlist;
