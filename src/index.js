import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/index";
import { Provider } from "react-redux";

import "./style/index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import App from "./App";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App />
                <ToastContainer />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>
);
