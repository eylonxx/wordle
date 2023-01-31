import { useState } from 'react';

const useWordle = (word: string) => {
  const [turn, setTurn] = useState(0);
  const [currGuess, setCurrGuess] = useState<string>('');
  const [guesses, setGuesses] = useState([...Array(6).fill([...Array(5).fill({ letter: '', color: 'gray' })])]);
  const [error, setError] = useState('');
  const [isWinner, setIsWinner] = useState(false);

  enum Status {
    NOTENOUGHLETTERS = '1',
    WINNER = '2',
  }

  const setStatusMessage = (caseNumber: Status) => {
    setTimeout(() => {
      console.log('in time out');

      return '';
    }, 10000);
    switch (caseNumber) {
      case '1':
        return 'Not Enough Letters';
      case '2':
        return 'Winner!';
      default:
        return '';
    }
  };

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
        console.log(setStatusMessage(Status.NOTENOUGHLETTERS));
        setError(setStatusMessage(Status.NOTENOUGHLETTERS));
      } else {
        let formattedGuess = checkWord();
        console.log(formattedGuess);
        if (currGuess === word) {
          setIsWinner(true);
        }
        setGuesses((prev) => {
          prev[turn] = formattedGuess;
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

  return { turn, currGuess, guesses, isWinner, handleKeyup, error };
};

export default useWordle;
