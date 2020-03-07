import React from "react";
import "./App.css";
import Pincode from "react-pincode";

function App() {
  return (
    <div className="App">
      <Pincode
        Container={{ border: "8px solid #a2a8a8" }}
        pincodeInput={{
          width: "400px",
          height: "50px",
          border: "5px solid #a2a8a8"
        }}
        cityInput={{
          width: "400px",
          height: "50px",
          border: "5px solid #a2a8a8"
        }}
        stateInput={{
          width: "400px",
          height: "50px",
          border: "5px solid #a2a8a8"
        }}
      />
    </div>
  );
}

export default App;
