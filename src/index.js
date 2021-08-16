import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const uiTheme = createTheme({
  palette: {
    primary: {
      main: "#036647",
    },
    secondary: {
      main: "#7ba63d",
    },
  },
});
ReactDOM.render(
    <ThemeProvider theme={uiTheme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>,
  document.getElementById("root")
);
reportWebVitals();
