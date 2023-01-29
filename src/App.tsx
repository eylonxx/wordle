import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import Board from './components/Board/Board';
import Tile from './components/Tile/Tile';
import { WORDS } from './utils/words';

function App() {
  const [word, setWord] = useState('');
  useEffect(() => {
    setWord(WORDS[Math.floor(Math.random() * WORDS.length)]);
  }, [setWord]);
  return (
    <div className="App">
      <Board word={word} />
    </div>
  );
}

export default App;
