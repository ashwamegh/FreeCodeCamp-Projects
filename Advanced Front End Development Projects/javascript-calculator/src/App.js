import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="display">
          <div className="operation_display">
          <p>5+5</p>
          </div>
          <div className="history">
          <p><span id="history_title">History</span> <span id="result">10</span></p>
          </div>
        </div>
        <div id="controls">
          <ul id="calc_buttons">
            <li id="c">C</li>
            <li id="brackets">( )</li>
            <li id="modulo">%</li>
            <li id="division">/</li>
            <li id="7">7</li>
            <li id="8">8</li>
            <li id="9">9</li>
            <li id="multiply">*</li>
            <li id="4">4</li>
            <li id="5">5</li>
            <li id="6">6</li>
            <li id="subtract">-</li>
            <li id="1">1</li>
            <li id="2">2</li>
            <li id="3">3</li>
            <li id="addition">+</li>
            <li id="0">0</li>
            <li id="dot">.</li>
            <li id="equal"><span>=</span></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
