import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./context/FilterContext";
import { DataProvider } from "./context/DataContext";
import { UserProvider } from "./context/UserContext";
import { SnackbarProvider } from "./context/SnackbarContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider>
        <UserProvider>
          <DataProvider>
            <FilterProvider>
              <App />
            </FilterProvider>
          </DataProvider>
        </UserProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
