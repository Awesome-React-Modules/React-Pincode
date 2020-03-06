import React, { Component } from "react";
import axios from "axios";
import "./App.css";
class Pincode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pincode: "",
      city: "",
      state: "",
      error: ""
    };
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.value.length === 6) {
      this.setState({
        error: ""
      });
      axios
        .get(`https://api.postalpincode.in/pincode/${e.target.value}`)
        .then(res =>
          this.setState({
            state: res.data[0].PostOffice[0].State,
            city: res.data[0].PostOffice[0].Region
          })
        )
        .then(() => {
          document.getElementById("pincode").classList.remove("error");
        })
        .catch(err => {
          document.getElementById("pincode").className = "error";
        });
    }
    if (e.target.value.length !== 6) {
      this.setState({
        city: "",
        state: "",
        error: "ZIP code must be of 6 digits"
      });
    }
  }
  render() {
    return (
      <div style={this.props.Container}>
        {this.state.error?<span className="error-display">{this.state.error}</span>:null}
        <div style={this.props.pincodeContainer}>
          <input
            maxLength={6}
            minLength={6}
            onChange={e => this.onChange(e)}
            name="pincode"
            placeholder="Pin Code"
            value={this.state.pincode}
            id="pincode"
            type="number"
            style={this.props.pincodeInput}
          />
        </div>
        <div style={this.props.cityContainer}>
          <input
            type="String"
            disabled={true}
            placeholder="City"
            value={this.state.city}
            style={this.props.cityInput}
          />
        </div>
        <div style={this.props.stateContainer}>
          <input
            type="String"
            placeholder="State"
            disabled={true}
            value={this.state.state}
            style={this.props.stateInput}
          />
        </div>
      </div>
    );
  }
}
export default Pincode;
