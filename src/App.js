import React, { Component } from 'react';
import './App.scss';
import Navbar from './component/navbar/navbar';
import Tourlist from './component/tourlist/tourlist';
class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Navbar />
        <Tourlist />

      </React.Fragment>
    );
  }
}

export default App;
