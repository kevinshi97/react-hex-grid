import { MouseEvent } from 'react';
import './App.css';
import HexGrid from './components/HexGrid/HexGrid'
import Hex from './components/Hex/Hex';
// import { HexPos } from './models/models';

function App() {
  const onMouseEnter = (e: MouseEvent) => {
    console.log('onMouseEnter App');
  }

  return (
    <div className="App">
      <HexGrid height={210} width={500}>
        <Hex pos={{ x: 0, y: 0, z: 0 }} onMouseEnter={e => onMouseEnter(e)} />
      </HexGrid>
    </div>
  );
}

export default App;
