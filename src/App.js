import React, { useState } from 'react';

import './App.css';

import UserForm from './components/UserForm';
import MapContainer from './components/MapContainer';

function App() {

  const [flightData, setFlightData] = useState(null)
  
  console.log(flightData)

  return (
    <div className="App">
      <UserForm setFlightData={setFlightData}/>
      <MapContainer flightData={flightData} />
    </div>
  );
}

export default App;
