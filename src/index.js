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
            city: res.data[0].PostOffice[0].District
          })
        )
        .then(() => {
          document.getElementById("pincode").classList.remove("error");
        })
        .catch(err => {
          document.getElementById("pincode").className = "error";
          this.setState({
            error: "Invalid PIN Code"
          });
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
      <div style={this.props.Container} class="outer_box">
        {this.state.error ? (
          <span className="error-display">{this.state.error}</span>
        ) : null}
        <div style={this.props.pincodeContainer} class="group">
          <input
            maxLength={6}
            minLength={6}
            onChange={e => this.onChange(e)}
            name="pincode"
            placeholder=" "
            value={this.state.pincode}
            id="pincode"
            type="number"
            style={this.props.pincodeInput}
            class="pin"
            required
          />
           <span class="highlight"></span>
          <label>Pin code</label>
        </div>
        <div style={this.props.cityContainer} class="group">
          <input
            type="String"
            readonly
            placeholder=" "
            value={this.state.city}
            style={this.props.cityInput}
            class="inp"
            required
          />
          <label>City</label>
        </div>
        <div style={this.props.stateContainer} class="group">
          <input
            type="String"
            placeholder=" "
            readonly
            value={this.state.state}
            style={this.props.stateInput}
            class="inp"
            required
          />
          <label>State</label>
        </div>
        <h4>Enter 6-digit Pincode</h4>
      </div>
    );
  }
}
export default Pincode;
