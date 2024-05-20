import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import './Login.css';
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router";

function Login() {
  const [userData, setUserData] = useState({});
  const { userState, handleLogin } = useContext(UserContext);
  const handleInput = (label, value) => {
    setUserData((prev) => ({ ...prev, [label]: value }));
  };
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => handleInput("email", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => handleInput("password", e.target.value)}
        />
      </div>
      <button className="login-button" onClick={() => handleLogin(userData, navigate)}>Login</button>
      <div className="error-message">{userState.error}</div>
      <button className="guest-login-button" onClick={() =>
        handleLogin({ email: "adarshbalika@gmail.com", password: "adarshbalika" }, navigate)
      }>Login as Guest</button>
    </div >
  );
}

export default Login;
