import React, { useReducer } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import EventForm from './EventForm'
import Events from './Events'
import appContext from '../contexts/appContext';
import reducer from '../reducers'

console.log({appContext})

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <appContext.Provider value={'Hello, I am a Provider.'}>
      <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch} />
        <Events state={state} dispatch={dispatch} />
        
      </div>
    </appContext.Provider>
  );
}

export default App;
