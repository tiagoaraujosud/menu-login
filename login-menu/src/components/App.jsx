import React from "react";
import Login from "./Login";

var isLoggeddIn = false;

function App() {
  return <div className="container">
      {isLoggeddIn ? <h1>Hello</h1> : <Login />}
  </div>
}

export default App;
