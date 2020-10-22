import React from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import { Home } from "./Components/Home/Home";
import { Rooms } from "./Components/Rooms/Rooms";
import { About } from "./Components/About/About";
import { Apps } from "./Components/Apps/Apps";
import {RoomsContextProvider} from "./Components/Context" // from the store
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.scss";


function App() {
  return (
  <RoomsContextProvider>
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/rooms">
            <Rooms />
          </Route>
          <Route exact path="/apps">
            <Apps />
          </Route>
        </Switch>
      </div>
    </Router>
  </RoomsContextProvider>
  );
}

export default App;
