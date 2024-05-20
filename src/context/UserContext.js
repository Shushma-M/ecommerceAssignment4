import { createContext, useReducer } from "react";
import { userReducer } from "../reducer/userReducer";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userState, userDispatch] = useReducer(userReducer, {
    loading: true,
    data: null,
    error: null,
    msg: "",
  });

  const handleLogin = async (data, navCb) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        const result = await response.json();

        localStorage.setItem("token", result.encodedToken);
        localStorage.setItem("email", result.foundUser.email);
        localStorage.setItem("password", data.password);

        userDispatch({ type: "LOGIN", payload: result.foundUser });
        navCb('/products');
      } else throw response;
    } catch (error) {
      const errorData = await error.json();
      userDispatch({ type: "USER_ERROR", payload: errorData.errors });
    }
  };
  return (
    <UserContext.Provider
      value={{
        userState,
        userDispatch,
        handleLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
