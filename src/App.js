import React from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import { Home } from "./Components/Home/Home";
import { Rooms } from "./Components/Rooms/Rooms";
import { About } from "./Components/About/About";
import { Apps } from "./Components/Apps/Apps";
import {Footer} from "./Components/Footer"
import DetailedRoom from "./Components/DetailedRoom/DetailedRoom"
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
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/apps" component={Apps}/>
          <Route exact path="/:roomdetails" component={DetailedRoom}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  </RoomsContextProvider>
  );
}

export default App;
