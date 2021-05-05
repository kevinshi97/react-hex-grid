import React, { MouseEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import Hexagon from './components/Hexagon/Hexagon';

function App() {
  const onMouseEnter = (e: MouseEvent) => {
    console.log('onMouseEnter App');
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Hexagon
        onMouseEnter={e => onMouseEnter(e)}
      />
    </div>
  );
}

export default App;
