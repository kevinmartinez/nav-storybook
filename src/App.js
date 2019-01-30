import React, { Component } from 'react';
import { Navigation } from './components/navigation/navigation'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
