import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Lightyear from "./Images/Lightyear.gif";
import "./App.css";

function App() {
  return (
    <div className="menu">
      <div>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>About Me</li>
        </ul>
      </div>
      <div>
        <h1>Hello World!</h1>
        <img src={Lightyear} alt="" />
      </div>
    </div>
  );
}

export default App;
