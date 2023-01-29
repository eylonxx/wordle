import { WORDS } from './words';

export const getRandomWord = () => {
  return WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase();
};

// export const isWin = (guess: string): boolean => {
//   return WORDS.includes(guess.toLowerCase());
// };

export const checkGuess = (guess: string, word: string) => {
  //   const letters = guess.split(''); // ['P', 'R', 'I', 'C', 'E']
  //   const winnerLettes = word.split(''); // ['P', 'I', 'E', 'C', 'E']
  //   let colors = letters.map((letter) => {
  //     return winnerLettes.indexOf(letter) > -1 && winnerLettes.indexOf(letter) === letters.indexOf(letter)
  //       ? 'Green'
  //       : 'Yellow';
  //   });
};

export const handleKeyup = (e: React.KeyboardEvent<HTMLInputElement>): void => {
  if (/^[A-Za-z]$/.test(e.key)) {
    console.log(e.key);
  }
};
