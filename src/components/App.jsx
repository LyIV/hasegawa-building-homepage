/* modules */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

/* components */
import Top from "./Top";

/* stylesheets */
import "../stylesheets/app.css";

export default function App() {
  return (
    <>
      <Router>
        <div id="header">
          <Link to="/">Top</Link>
        </div>

        <div>
          <Switch>
            <Route exact path="/">
              <Top />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}