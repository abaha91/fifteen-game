import React from 'react';
import ReactDOM from 'react-dom';
import WrappedApp from './App';
import { Provider } from 'react-redux';
import store from './state/reducer';


ReactDOM.render(
  <Provider store={store}>
    <WrappedApp/>
  </Provider>, document.getElementById('app'));
