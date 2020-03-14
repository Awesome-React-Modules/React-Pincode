import React, { Component } from "react";
import axios from "axios";
import "./App.css";
class Pincode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pincode: "",
      error: ""
    };
  }

 removeDuplicates(originalArray, prop) {
  var newArray = [];
  var lookupObject = {};

  for (let i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for (let i in lookupObject) {
    newArray.push(lookupObject[i]);
  }
  return newArray;
  }
  
  outputHTML(Info) {
    if (Info.length == 0) {
      document.getElementById("city").innerHTML = `<option value="default">City</option>`;
      document.getElementById("state").innerHTML = `<option value="default">State</option>`;
      return;
    }
    
    if (Info.length >= 1) {
      let returnCities = "";
      let returnStates = "";
      for (let i = 0; i < Info.length; i++) {
        returnCities = returnCities + `<option value="${Info[i].CITY}">${Info[i].CITY}</option>`;
        returnStates = returnStates + `<option value="${Info[i].STATE}">${Info[i].STATE}</option>`;

      }

      document.getElementById("city").innerHTML = returnCities;
      document.getElementById("state").innerHTML = returnStates;
     

    }
  }
  async searchStatesAndCity(pincodeToSearch) {
    let availableInfo,availableDataWithRepetition;
    try {
      const dataInformation = await fetch("https://young-eyrie-96553.herokuapp.com/api/data");
      const data = await dataInformation.json();
      availableDataWithRepetition = data.filter(info => {
        return String(info.POSTAL_CODE).toLowerCase().includes(pincodeToSearch);
      });

      availableInfo = this.removeDuplicates(availableDataWithRepetition, "POSTAL_CODE");


      if (availableInfo.length) {
        this.outputHTML(availableInfo)
      }
      else {
        this.outputHTML([]);
      }
      
    }
    catch (error) {
      console.log(error)
      document.getElementById("pincode").className = "error";
        this.setState({
          error: "Invalid PIN Code"
        });
    }
   
  }
  
  onChange(e) { 
    const { name, value } = e.target;
    this.setState({ [name]: value });
    
    const pincodeToSearch = value.toString().toLowerCase();
    

    //covers US (4-digit)
    if (pincodeToSearch.length >= 4 && pincodeToSearch.length <= 6) {
      this.setState({
        error:" "
      })
      this.searchStatesAndCity(pincodeToSearch);
    }
    else {
      this.setState({
        city: "",
        state: "",
        error: "ZIP code must be atleast 4 digits"
      });
      document.getElementById("city").innerHTML = `<option value="default">City</option>`;
      document.getElementById("state").innerHTML = `<option value="default">State</option>`;
    }
  }
  
  render() {
  
    const { Container, pincodeContainer, pincodeInput, cityContainer, cityInput, stateContainer, stateInput } = this.props;

    const { pincode, error } = this.state;
    
    
  return (
    <div style={Container}>
      {
        error ? (<span className="error-display">{this.state.error}</span>): null
      }


      <div style={pincodeContainer}>
        <input minLength={4} maxLength={6}  onChange={e => this.onChange(e)} name="pincode"
            placeholder="Pin Code"
            value={pincode}
            id="pincode"
            type="number"
            style={pincodeInput}
          />
      </div>


      <div style={cityContainer}>
        <select name="city" type="String"  placeholder="City" 
          style={cityInput}  id="city">
            <option value="default">City</option>
        </select>
      </div>


      <div style={stateContainer}>
        <select name="state" type="String" placeholder="State" 
          style={stateInput} id="state">
          <option value="default">State</option>
        </select>
      </div>


    </div>
  );
  }
}
export default Pincode;
