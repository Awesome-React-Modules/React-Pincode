# React Pincode

React Pincode is a web application which extracts the information and displays it to the user on the basis of pincode which is added by the user.

See this app live at https://react-pincode.netlify.com/

Snippet of the working application is displayed below.
[<img src="./Capture.PNG" style="width: 100%;" />](https://github.com/plxity/React-Pincode)

[<img src="./Capture1.PNG" style="width: 100%;" />](https://github.com/plxity/React-Pincode)

## Table of Contents
- [About](#about)
- [Prerequisites](#prerequisites)
- [Steps to set the environment](#steps-to-set-the-environment)
- [Usage/Need](#usageneed)
  - [Note](#note)
- [Working](#working)
  - [JS](#js)
  - [Playground](#playground)
- [Pincode props](#pincode-props)
- [Example](#example)
  - [JS](#js-1)
  - [Development and Testing](#development-and-testing)
- [Contributing](#contributing)
- [Development Guidelines](#development-guidelines)
- [Owner](#owner)
- [Mentor](#mentor)


## About

The three input fields are wrapped inside an ```<div>``` Element.
and each input field is also wrapped inside ```<div>```. So that a user can style it according to the need in the project.

Whenever the wrong Pincode is entered red border appears on the pin code input field and on entering a right pin code, city and state input fields get automatically filled with correct data


## Prerequisites
* NodeJS (check for it's installation on terminal using npm -v)

## Steps to set the environment
1. Clone the repository
```bash
 git clone https://github.com/Awesome-React-Modules/React-Pincode.git
 ```
2. Install Dependencies
```
npm install --save react-pincode
```

## Usage/Need
To get instant information when the user enters just the pincode.
### Note
This will only work for Indian Pincodes.


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

### PLAYGROUND

Find Codepen Implementation of the module [here](https://codepen.io/Siddhi5/pen/GRJMqWB)

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
7. Congratulations! You have set-up the test server for react-pincode.	
Now just run `npm start` from `test-server` directory to launch the test-server.	
8. You don't need to stop this server, the changes made in the module will be reflected automatically each time you build them using `npm run build`
9. To watch a video on installation :
[![Watch the video](https://img.youtube.com/vi/DtBObHLaQDA/maxresdefault.jpg)](https://www.youtube.com/watch?v=DtBObHLaQDA)	

## Contributing
Please read [Contributing Guidelines](./CONTRIBUTING.md) for information on how to contribute to React-Pincode.

## Development Guidelines
1. Write clean and readable code with proper formatting.
2. Create a branch and push your code in the branch.
3. Please follow PR template to create PR.
4. Please read our [Code of Conduct](./CODE_OF_CONDUCT.md) .

## Owner
[Apoorv Taneja](https://github.com/plxity)

## Mentor
[Apoorv Taneja](https://github.com/plxity)
[Tripti Shukla](https://github.com/yellowwoods12)

Feel Free to ask your queries!!

Happy Coding 🚀 🚀 
