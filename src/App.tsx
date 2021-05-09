import { MouseEvent } from 'react';
import './App.css';
import HexGrid from './components/HexGrid/HexGrid'
import Hex from './components/Hex/Hex';
import { HexCoordinates } from './models/models';
// import { HexCoordinates } from './models/models';

function App() {
  const onMouseEnter = (e: MouseEvent) => {
    console.log('onMouseEnter App');
  }

  return (
    <div className="App">
      <HexGrid height={210} width={500}>
        <Hex coordinates={new HexCoordinates(0, 0)} />
        <Hex coordinates={new HexCoordinates(1, 0)} />
        <Hex coordinates={new HexCoordinates(-1, 0)} />
        <Hex coordinates={new HexCoordinates(-1, 1)} />
        <Hex coordinates={new HexCoordinates(-1, 2)} />
        <Hex coordinates={new HexCoordinates(-2, 1)} />
      </HexGrid>
    </div>
  );
}

export default App;
