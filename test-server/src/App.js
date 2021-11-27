import React, { useState, useEffect } from 'react';
import Pincode from 'react-pincode';

function App() {
  const [pincodeData, setPincodeData] = useState('');
  return (
    <div className="App">
      <Pincode
        invalidError="Please check pincode"
        lengthError="check length"
        getData={(data) => setPincodeData(data)}
        // showArea={false}
      />
    </div>
  );
}

export default App;
