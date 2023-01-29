import React, { useState } from 'react';

import Tile, { TileProps } from '../Tile/Tile';

interface RowProps {
  currGuess: TileProps[];
}

const Row = ({ currGuess }: RowProps) => {
  // console.log(currGuess);

  return (
    <div className="flex items-center justify-center gap-3">
      {currGuess && (
        <>
          <Tile letter={currGuess[0].letter} color={currGuess[0].color} />
          <Tile letter={currGuess[1].letter} color={currGuess[1].color} />
          <Tile letter={currGuess[2].letter} color={currGuess[2].color} />
          <Tile letter={currGuess[3].letter} color={currGuess[3].color} />
          <Tile letter={currGuess[4].letter} color={currGuess[4].color} />
        </>
      )}
    </div>
  );
};

export default Row;
