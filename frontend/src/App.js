import React from 'react';
import './App.css';
import './css/bootstrap.min.css'
import './css/mdb.min.css'
import './css/style.min.css'
import HomePage from './Components/HomePage/HomePage';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import allReducers from '../src/Reducers/index'

const store = createStore(allReducers);

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <HomePage/>
    </div>
    </Provider>
  );
}

export default App;
