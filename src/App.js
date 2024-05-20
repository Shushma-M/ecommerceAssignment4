import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import { NavLink } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/UserContext";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import { Address } from "./pages/Address";
import { SnackbarContext } from "./context/SnackbarContext";
import Snackbar from "./components/Snackbar";

function App() {
  const { userState, userDispatch, handleLogin } = useContext(UserContext);
  const { snackbarVisible, snackbarMessage, hideSnackbar, showSnackbar } =
    useContext(SnackbarContext);
  useEffect(() => {
    if (localStorage.getItem("token"))
      handleLogin({
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password"),
      });
  }, []);

  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "#ff7f50" : ""
  });
  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          {/* <img src={logo} alt="mockBee logo" width="180" height="180" /> */}
          <h1 className="brand-title">Living Vegan</h1>
          {userState.data && <h3>Hi, {userState.data.firstName}</h3>}
          <div className="links">
            <NavLink to="/" style={getActiveStyle}>Home</NavLink>
            <NavLink to="/products" style={getActiveStyle}>Products</NavLink>
            <NavLink to="/wishlist" style={getActiveStyle}>Wishlist</NavLink>
            <NavLink to="/cart" style={getActiveStyle}>Cart</NavLink>
            {!userState.data && (
              <div>
                <NavLink to="/signup" style={getActiveStyle}>SignUp/</NavLink>
                <NavLink to="/login" style={getActiveStyle}>Login</NavLink>
              </div>
            )}
            {userState.data && (
              <button onClick={() => userDispatch({ type: "LOGOUT" })}>
                Logout
              </button>
            )}
          </div>
        </header>
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Address />} />

          </Routes>
        </div>
      </div>
      {snackbarVisible && (
        <Snackbar message={snackbarMessage} onClose={hideSnackbar} />
      )}
    </div>
  );
}

export default App;
