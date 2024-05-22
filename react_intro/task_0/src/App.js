import React from 'react';
import logo from './holberton-logo.png'
import "./App.css";
const App = () => {
  return (
    <div>
      <div className="App-Header">
        <img src={logo} className='holbertonLogo'/>
        <h1 className='holbertonHeaderName'>School Dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer"></div>
      <p>Copyright 2020 - holberton School</p>
    </div>
  );
}

export default App