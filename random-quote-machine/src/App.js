import React, { Component } from 'react';
import 'react-bootstrap';
import './App.css';
import QuoteBox from './quotebox/QuoteBox';

class App extends Component {
  render() {
    return (
      <div className="App color-transition">
        <QuoteBox/>
      </div>
    );
  }
}

export default App;
