/* modules */
import React    from "react";
import ReactDOM from "react-dom";

/* components */
import App from "./components/App";

/* scripts */
import reportWebVitals from "./scripts/reportWebVitals";

/* stylesheets */
import "./stylesheets/index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
