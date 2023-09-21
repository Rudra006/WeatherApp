
import './App.css';
import React from 'react';
import CurrentLocation from "./currentLocation";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
       
      </div>
      <div className="footer-info">
       Developed by{" "}
        
       Rudra Madhab Mahanty
        
      </div>
    </React.Fragment>
  );
}

export default App;
