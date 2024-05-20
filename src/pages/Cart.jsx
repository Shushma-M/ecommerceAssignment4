import React, { useContext, useEffect } from "react";
import NoAccess from "./NoAccess";
import { DataContext } from "../context/DataContext";
import { UserContext } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import { SnackbarContext } from "../context/SnackbarContext";
import './Cart.css'

function Cart() {
  const {
    dataState,
    fetchProtectedData,
    handleProtectedRemove,
    handleCartQuantity,
    handleWishlist,
  } = useContext(DataContext);
  const { userState } = useContext(UserContext);
  const { showSnackbar } = useContext(SnackbarContext);

  useEffect(() => {
    fetchProtectedData("/api/user/cart");
  }, []);

  if (userState.data) {
    return (
      <div className="cart-container">
        {dataState.data.cart.length === 0 && <h2>Your cart is empty</h2>}
        {dataState.data.cart.map((product) => {
          const { _id, name, price, qty, image } = product;
          return (
            <div id={_id} className="cart-card">
              <img src={image} />
              <div className="cart-details">
                <h4>{name}</h4>
                <div className="price">{price}$</div>
                <div className="quantity">
                  <button onClick={() => handleCartQuantity("increment", _id)}>
                    +
                  </button>
                  {qty}
                  <button
                    onClick={() => {
                      qty > 1
                        ? handleCartQuantity("decrement", _id)
                        : handleProtectedRemove("/api/user/cart/" + _id);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
              <div className="action-buttons">
                <button
                  onClick={() => {
                    handleWishlist(product);
                    handleProtectedRemove("/api/user/cart/" + _id);
                  }}
                >
                  Move to Wishlist
                </button>
                <button
                  onClick={() => {
                    handleProtectedRemove("/api/user/cart/" + _id);
                    showSnackbar('Removed from Cart');
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
        {dataState.data.cart.length !== 0 && <button className="checkout-btn"><NavLink to='/checkout'>Checkout</NavLink></button>}
      </div>
    );
  } else return <NoAccess />;
}

export default Cart;
