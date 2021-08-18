import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@material-ui/core";
import App from "./Components/App";
import { ServiceProvider } from "./service/service-context";
import Service from "./service/service";

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
const service = new Service();
ReactDOM.render(
  <ThemeProvider theme={uiTheme}>
    <ServiceProvider value={service}>
      <Router>
        <App />
      </Router>
    </ServiceProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
reportWebVitals();
