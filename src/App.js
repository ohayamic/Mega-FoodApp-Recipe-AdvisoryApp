import React from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import { Cart } from "./Components/Cart/Cart";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Cart />
    </div>
  );
}

export default App;
