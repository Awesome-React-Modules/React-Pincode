import React, { Component } from "react";
import axios from "axios";
import "./App.css";
class Pincode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pincode: "",
      city: "",
      district: "",
      state: "",
      error: "",
      flag: false
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
            city: res.data[0].PostOffice[0].Block,
            district: res.data[0].PostOffice[0].District
          })
        )
        .then(() => {
          document.getElementById("pincode").classList.remove("error");
          this.setState({
            flag:true
          })
        })
        .catch(err => {
          document.getElementById("pincode").className = "error";
          this.setState({
            error: `${this.props.invalidError || "Invalid PIN Code"}`,
            flag: false
          });
        });
    }
    if (e.target.value.length !== 6) {
      this.setState({
        city: "",
        state: "",
        district: "",
        error: `${this.props.lenghtError || "ZIP code must be of 6 digits"}`,
        flag: false
      });
    }
  }
  render() {
    return (
      <div style={this.props.Container}>
        {this.state.error ? (
          <span className="error-display">{this.state.error}</span>
        ) : null}
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
        <div style={this.props.districtContainer}>
          <input
            type="String"
            disabled={true}
            placeholder="District"
            value={this.state.district}
            style={this.props.districtInput}
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
        {this.state.flag?
      <button onClick={() => window.location.href="https://www.google.com/maps/place/"+this.state.city}>Show in Google Maps</button>:""
    }
      </div>
    );
  }
}
export default Pincode;
