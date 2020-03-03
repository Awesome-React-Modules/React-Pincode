# React Pincode

[<img src="./Capture.PNG" style="width: 100%;" />](https://github.com/plxity/React-Pincode)

[<img src="./Capture1.PNG" style="width: 100%;" />](https://github.com/plxity/React-Pincode)
## Installation

```
npm install --save react-pincode
```

## Usage

### Note
This will only work for Indian Pincodes.


The three input fields are wrapped inside an ```<div>``` Element.
and each input field is also wrapped inside ```<div>```. So that a user can style it according to the need in the project.

Whenever the wrong Pincode is entered red border appears on the pin code input field and on entering a right pin code, city and state input fields get automatically filled with correct data



## Working

```js
import Pincode from "react-pincode";
```

### JS

```js
import React, { Component } from 'react';
import Pincode from "react-pincode";

export default class Example extends Component {
  render() {
    return (
      <div>
        <Pincode />
      </div>
    )
  }
}

export default Example;
```

## Pincode Props

| Name             | Description                                     |
| ---------------- | ----------------------------------------------- |
| Container        | Container which wraps all the three Input Field |
| pincodeContainer | Container which wraps pincode Input Field       |
| cityContainer    | Container which wraps City Input Field          |
| stateContainer   | Container which wraps StateInput Field          |
| pincodeInput     | Props for styling pincode input field           |
| cityInput        | Props for styling city input field              |
| stateInput       | Props for styling state input field             |

## Example

### JS

```js
import React, { Component } from 'react';
import Pincode from "react-pincode";

export default class Example extends Component {
  render() {
    return (
      <div>
        <Pincode  cityInput={{width:'200px'}}/>
        // This will set the length of city input field to 200px. You can play with rest of the props to style it according to your need.
      </div>
    )
  }
}

export default Example;
```
### Development and Testing

1. Set-up the React-Pincode module by dowloading its dependencies, using `npm install` command.	
2. Build the module using `npm run build`	
3. Link the module for testing using `npm link` command.	
4. Change your directory to `test-server` directory, using `cd test-server`	
5. Install the dependecies using `npm install`	
6. Now run `npm link react-pincode`	
7. Congratulations! You have set-up the test server for react-dark.	
Now just run `npm start` from `test-server` directory to launch the test-server.	
8. You don't need to stop this server, the changes made in the module will be reflected automatically each time you build them using `npm run build`	

Happy Coding :rocket: :rocket:	
