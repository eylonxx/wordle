import { useState } from 'react';

const useWordle = (word: string) => {
  const [turn, setTurn] = useState(0);
  const [currGuess, setCurrGuess] = useState('');
  const [guesses, setGuesses] = useState([...Array(6).fill([...Array(5).fill({ letter: '', color: 'gray' })])]);
  const [isWinner, setIsWinner] = useState(false);

  const handleKeyup = (e: React.KeyboardEvent): void => {
    if (isWinner) return;
    if (e.key === 'Backspace') {
      setCurrGuess((prev) => prev.slice(0, -1));
    }
    if (/^[A-Za-z]$/.test(e.key)) {
      if (currGuess.length < 5) {
        setCurrGuess((prev) => prev + e.key);
      }
    }
    if (e.key === 'Enter') {
      if (currGuess.length < 5) {
        console.log('Not enough letters');
      } else {
        console.log('call checkword');
        let formattedGuess = checkWord();
        console.log(formattedGuess);
        if (currGuess === word) {
          setIsWinner(true);
        }
        setGuesses((prev) => {
          prev[turn] = formattedGuess;
          console.log(prev);

          return prev;
        });
        setTurn((prev) => prev + 1);
        setCurrGuess('');
      }
    }
  };

  const checkWord = () => {
    //compare word and guess
    let formattedGuess = currGuess.split('').map((letter) => {
      return { letter: letter, color: 'gray' };
    });
    let solutionArr: (string | null)[] = [...word];

    //get green
    formattedGuess.forEach((l, i) => {
      if (l.letter === solutionArr[i]) {
        formattedGuess[i].color = 'green';
        solutionArr[i] = null;
      }
    });

    //get yellow
    formattedGuess.forEach((l, i) => {
      if (solutionArr.includes(l.letter) && l.color !== 'green') {
        formattedGuess[i].color = 'yellow';
        solutionArr[solutionArr.indexOf(l.letter)] = null;
      }
    });

    return formattedGuess;
  };

  return { turn, currGuess, guesses, isWinner, handleKeyup };
};

export default useWordle;
