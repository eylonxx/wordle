import React, { useEffect } from 'react';
import useWordle from '../../useWordle';
import { handleKeyup } from '../../utils/helper';
import Row from '../Row/Row';

interface BoardProps {
  word: string;
}

const Board = ({ word }: BoardProps) => {
  const { currGuess, handleKeyup, turn, guesses } = useWordle(word);
  console.log(word);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup);
    return () => window.removeEventListener('keyup', handleKeyup);
  }, [handleKeyup]);

  const formatGuess = () => {
    let arr = [
      ...Array(5)
        .fill({})
        .map((element) => {
          return { letter: '', color: 'gray' };
        }),
    ];

    currGuess.split('').forEach((letter, i) => {
      arr[i].letter = letter;
    });

    return arr;
  };

  return (
    <div className="flex justify-center items-center gap-3 flex-col">
      {guesses.map((guess, i) => {
        return <Row currGuess={i === turn ? formatGuess() : guess} />;
      })}
    </div>
  );
};

export default Board;
