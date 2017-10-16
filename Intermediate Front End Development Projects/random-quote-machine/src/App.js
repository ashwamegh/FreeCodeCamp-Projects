import React, { Component } from 'react';
import 'react-bootstrap';
import './App.css';
import QuoteBox from './quotebox/QuoteBox';
import GitHubForkRibbon from 'react-github-fork-ribbon';

class App extends Component {
  render() {
    return (
      <div className="App color-transition">
        <QuoteBox/>
        <GitHubForkRibbon href="//github.com/shashank7200/FreeCodeCamp-Projects/tree/master/random-quote-machine"
                    target="_blank"
                    color="black"
                    position="left">
          See Source Code
          </GitHubForkRibbon>
      </div>
    );
  }
}

export default App;
