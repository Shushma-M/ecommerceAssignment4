import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import './SignUp.css';
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [userData, setUserData] = useState({});
  const { userDispatch } = useContext(UserContext);
  const handleInput = (label, value) => {
    setUserData((prev) => ({ ...prev, [label]: value }));
  };
  const navigate = useNavigate();
  const [passwordDisplay, setPasswordDisplay] = useState(false);
  const handleSignUp = async () => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const result = await response.json();
      localStorage.setItem("email", result.createdUser.email);
      localStorage.setItem("password", userData.password);
      localStorage.setItem("token", result.encodedToken);
      userDispatch({ type: "SIGNUP", payload: result.createdUser });
      navigate('/products')
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="signup-container">
      <h2>SignUp</h2>
      <div className="form-group">
        <label>First Name:</label>
        <input
          type="text"
          onChange={(e) => handleInput("firstName", e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input
          type="text"
          onChange={(e) => handleInput("lastName", e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => handleInput("email", e.target.value)}
          required
        />
      </div>
      <div className="form-group password-group">
        <label>Password:</label>
        <input
          type={passwordDisplay ? "text" : "password"}
          onChange={(e) => handleInput("password", e.target.value)}
          required
        />
        <button
          type="button"
          className="toggle-password"
          onClick={() => setPasswordDisplay(!passwordDisplay)}
        >
          {passwordDisplay ? "Hide" : "Show"}
        </button>
      </div>
      <div className="form-group">
        <label>Confirm Password:</label>
        <input type="password" required />
      </div>
      <button className="signup-button" onClick={handleSignUp}>SignUp</button>
    </div>
  );
}

export default SignUp;
