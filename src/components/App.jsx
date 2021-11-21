/* modules */
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AtSymbolIcon, ChatIcon, InformationCircleIcon, LocationMarkerIcon, ViewListIcon } from "@heroicons/react/solid";

/* components */
import Top from "./Top";
import Access from "./Access";
import About from "./About";
import Information from "./Information";
import Contact from "./Contact";

/* stylesheets */
import "../stylesheets/tailwindcss.css";
import "../stylesheets/index.css";
import "../stylesheets/app.css";

export default function App() {
  return (
    <>
      <Router>
        {/* above tab */}
        <nav className="above-tab">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/access">Access</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/information">Information</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* below tab */}
        <nav className="below-tab">
          <ul>
            <li className="below-tab-item">
              <Link to="/" className="below-tab-item">
                <ViewListIcon className="below-tab-icon" />
                <p>HOME</p>
              </Link>
            </li>
            <li>
              <Link to="/access" className="below-tab-item">
                <LocationMarkerIcon className="below-tab-icon" />
                <p>ACCESS</p>
              </Link>
            </li>
            <li>
              <Link to="/about" className="below-tab-item">
                <AtSymbolIcon className="below-tab-icon" />
                <p>ABOUT</p>
              </Link>
            </li>
            <li>
              <Link to="/information" className="below-tab-item">
                <InformationCircleIcon className="below-tab-icon" />
                <o>INFORMATION</o>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="below-tab-item">
                <ChatIcon className="below-tab-icon" />
                <p>CONTACT</p>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="sm:hidden m-0 p-0 h-6" />

        <div className="main">
          <Switch>
            <Route exact path="/">
              <Top />
            </Route>
            <Route exact path="/access">
              <Access />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/information">
              <Information />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}