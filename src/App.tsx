import React from "react";
import Timer from "./Timer";
import Greeting from "./Greeting";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <Greeting name="User" />
      <Timer />
    </div>
  );
}

export default App;
