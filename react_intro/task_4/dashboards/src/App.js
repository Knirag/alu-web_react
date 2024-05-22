import React from "react";
import logo from "./holberton-logo.png";
import { getFullYear, getFooterCopy } from "./utils";
import "./App.css";
const App = () => {
  return (
    <div>
      <div className="App-Header">
        <img src={logo} className="holbertonLogo" />
        <h1 className="holbertonHeaderName">School Dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="form">
          <label htmlFor="email">
            <span>Email:</span>
            <input type="email" name="email" id="email" />
          </label>

          <label htmlFor="password">
            <span>Password:</span>
            <input type="password" name="password" id="pwd" />
          </label>

          <button onClick={() => {}}>OK</button>
        </div>
      </div>
      <div className="App-footer"></div>
      <p>
        Copyright {getFullYear()} {getFooterCopy(true)}
      </p>
    </div>
  );
};

export default App;
