import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "../reducer/reducer";
import { SnackbarContext } from "./SnackbarContext";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [dataState, dataDispatch] = useReducer(dataReducer, {
    loading: true,
    data: { categories: [], products: [], wishlist: [], cart: [] },
    error: null,
  });
  const { showSnackbar } = useContext(SnackbarContext);
  const fetchData = async (url) => {
    try {
      dataDispatch({ type: "FETCH_LOADING" });
      const response = await fetch(url);
      const data = await response.json();
      dataDispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dataDispatch({ type: "FETCH_ERROR", payload: error });
    }
  };

  const fetchProtectedData = async (url) => {
    try {
      // dispatch({ type: "FETCH_LOADING" });
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token") + "",
        },
      });
      const data = await response.json();
      dataDispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dataDispatch({ type: "FETCH_ERROR", payload: error });
    }
  };

  const handleProtectedRemove = async (url) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token") + "",
        },
      });
      const result = await response.json();
      dataDispatch({
        type: "FETCH_SUCCESS",
        payload: result,
      });
    } catch (error) {
      dataDispatch({ type: "FETCH_ERROR" });
    }
  };

  const handleWishlist = async (data) => {
    try {
      
      if (
        dataState.data.wishlist.findIndex(({ _id }) => _id === data._id) < 0
      ) {
        
        const response = await fetch("/api/user/wishlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("token") + "",
          },
          body: JSON.stringify({ product: data }),
        });
        if (response.status === 201) {
          const result = await response.json();
          dataDispatch({ type: "FETCH_SUCCESS", payload: result });
          showSnackbar("Added to wishlist");
        } else throw response;
      }
      else {
        const product = dataState.data.wishlist.find(({ _id }) => _id === data._id)
        handleProtectedRemove("/api/user/wishlist/" + product._id);
        showSnackbar("Removed from wishlist");
      }
    } catch (error) {
      dataDispatch({
        type: "FETCH_ERROR",
        payload: "Please login to add to wishlist",
      });
      showSnackbar("Please login to add to wishlist");
    }
  };

  const handleCartQuantity = async (type, id) => {
    try {
      const response = await fetch("/api/user/cart/" + id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token") + "",
        },
        body: JSON.stringify({
          action: {
            type: type,
          },
        }),
      });
      const result = await response.json();

      dataDispatch({ type: "FETCH_SUCCESS", payload: result });
    } catch (error) {
      dataDispatch({ type: "FETCH_ERROR" });
    }
  };

  const handleCart = async (data) => {
    try {
      const product = dataState.data.cart.find(({ _id }) => _id === data._id);
      if (product) {
        handleCartQuantity("increment", product._id);
      } else {
        const response = await fetch("/api/user/cart", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("token") + "",
          },
          body: JSON.stringify({ product: data }),
        });
        if (response.status === 201) {
          const result = await response.json();
          dataDispatch({ type: "FETCH_SUCCESS", payload: result });
          showSnackbar('Added to Cart');
        } else throw response;
      }
    } catch (error) {
      dataDispatch({
        type: "FETCH_ERROR",
        payload: "Please login to add to cart",
      });
      showSnackbar('Please login to add to wishlist');
    }
  };


  return (
    <DataContext.Provider
      value={{
        dataState,
        dataDispatch,
        fetchData,
        fetchProtectedData,
        handleWishlist,
        handleProtectedRemove,
        handleCart,
        handleCartQuantity,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
