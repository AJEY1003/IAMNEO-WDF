#this file contains two files with App.js and 
DisplayData.jsx  

App.js

import React from 'react';
import './assets/css/App.css';
import DisplayData from "./components/DisplayData.jsx"
function App() {

  return (
    <div className="App">
      <h1>Props Demo</h1>
      <DisplayData a="Hello, I am static data!"   b={new Date().toLocaleString()}/>
    </div>
  );
}

export default App;


DisplayData.jsx
import PropTypes from "prop-types";
function DisplayData({a,b}) {
    return (
        <div>
            <h2>Static Data:</h2>
            <p>{a}</p>
            <h2>Dynamic Data:</h2>
            <p>{b}</p>
        </div>
    );
}
DisplayData.propTypes = {
    a: PropTypes.string.isRequired,
    b: PropTypes.node.isRequired,
};


export default DisplayData;




