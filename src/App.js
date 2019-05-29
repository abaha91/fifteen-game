import React, { Component } from 'react';
import './App.scss';
import { connect } from 'react-redux';

export class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.create();
  }

  getXY(i) {
    return 'x'+( ((i-1) % 4)+1 )+'y'+Math.ceil( (i)/4);
  }

  create() {
    for(let i=1; i<=15; i++) {
      const oneItem = `<div class="block block-${i} ${this.getXY(i)}">${i}</div>`;
      const board = document.getElementById('board');
      board.innerHTML = board.innerHTML + oneItem;
    }
  }

  keyDownEventHandler(e) {
    debugger;
    switch(e.keyCode) {
      case 38:
        this.key('up');
        break;
      case 40:
        this.key('down');
        break;
      case 37:
        this.key('left');
        break;
      case 39:
        this.key('right');
        break;
      default:
        break;
    }
  }

  key(type) {
    let from;
    let to;
    for(let a = 1; a <= 4; a++)
      for(let b = 1; b <= 3; b++) {
        switch(type) {
          case 'up':
            from = 'x'+a+'y'+(b+1);
            to   = 'x'+a+'y'+b;
            break;
          case 'down':
            from = 'x'+a+'y'+(4-b);
            to   = 'x'+a+'y'+(5-b);
            break;
          case 'left':
            from = 'x'+(b+1)+'y'+a;
            to   = 'x'+b+'y'+a;
            break;
          case 'right':
            from = 'x'+(4-b)+'y'+a;
            to   = 'x'+(5-b)+'y'+a;
            break;
        }

        if( !document.getElementsByClassName(to)[0].length ) {
          document.getElementsByClassName(from)[0].classList.remove(from).add(to);
          return;
        }
      }
  }

  render() {
    return (
      <div className="App">
        <div id="board" onKeyDown={e => this.keyDownEventHandler(e)}></div>
      </div>
    );
  }
}


export default App;
