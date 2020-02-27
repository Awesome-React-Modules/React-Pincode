import React, { Component } from "react";
import "./App.css";
import Pincode from 'react-pincode';

class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Pincode/>
      </div>
    );
  }
}

export default App;
