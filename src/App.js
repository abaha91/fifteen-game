import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <canvas id="canvas"></canvas>
      </div>
    );
  }
}


export default App;
