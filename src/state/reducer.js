import {createStore} from "redux";
import initialState from './initialState';

function appState (state = initialState, action) {
      return state
}

let store = createStore(appState, initialState);
export default store;
