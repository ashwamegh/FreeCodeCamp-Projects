import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import GitHubForkRibbon from 'react-github-fork-ribbon';

class App extends Component {

  render() {
    return (
      <div className="App">
       <SearchBar/>
       <GitHubForkRibbon href="//github.com/shashank7200/FreeCodeCamp-Projects/tree/master/wikipedia-viewer"
                    target="_blank"
                    color="green"
                    position="right-bottom">
        See Source Code
      </GitHubForkRibbon>
      </div>
    );
  }
}

export default App;
