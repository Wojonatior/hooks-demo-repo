import React, { useState } from 'react';
import './App.css';
import StateExample from './StateExample';
import EffectExample from './EffectExample';
import CleanupExample from './CleanupExample';

function App() {
  const [showState, setShowState] = useState(false);
  const [showEffect, setShowEffect] = useState(false);
  const [showCleanup, setShowCleanup] = useState(false);

  return (
    <div className="App">
      <header className="App-header" style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
        <div style={{margin: '50px'}}>
          <p>React Hooks are Cool</p>
          <button onClick={() => setShowState(!showState)}>Show Ex. 1</button>
          <button onClick={() => setShowEffect(!showEffect)}>Show Ex. 2</button>
          <button onClick={() => setShowCleanup(!showCleanup)}>Show Ex. 3</button>
        </div>
        <div style={{margin: '50px'}}>
          {showState && <StateExample/>}
          {showEffect && <EffectExample/>}
          {showCleanup && <CleanupExample/>}
        </div>
      </header>
    </div>
  );
}

export default App;
