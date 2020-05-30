import React from "react";
import "./App.css";
import Pincode from "react-pincode";

function App() {
  return (
    <div className="App">
      <Pincode invalidError="Please check pincode" lenghtError="check length" />
    </div>
  );
}

export default App;
