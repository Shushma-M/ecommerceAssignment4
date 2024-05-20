import { createContext, useReducer, useState } from "react";
import { snackbarReducer } from "../reducer/snackbarReducer";

export const SnackbarContext = createContext();

export function SnackbarProvider({ children }) {
  // const [snackbarState, snackbarDispatch] = useReducer(snackbarReducer, {
  //   type: null,
  //   msg: null,
  // });
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarVisible(true);
  };

  const hideSnackbar = () => {
    setSnackbarVisible(false);
  };

  return (
    <SnackbarContext.Provider
      value={{
        snackbarVisible, setSnackbarVisible,
        snackbarMessage, setSnackbarMessage,
        showSnackbar, hideSnackbar
      }}
    >
      {children}
    </SnackbarContext.Provider>
  );
}
