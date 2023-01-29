import React from 'react';
import colors from '../../utils/colors';

export interface TileProps {
  letter: string;
  color: string;
}

const Tile = (props: TileProps) => {
  const { letter, color } = props;
  const getColor = (): string => {
    switch (color) {
      case 'green':
        return colors.rightPlaceBg;
      case 'yellow':
        return colors.wrongOrderBg;
      default:
        return colors.noLetterBg;
    }
  };
  return (
    <div
      className={`text-3xl font-bold w-16 h-16 border-white border-solid border-2 flex justify-center items-center uppercase`}
      style={{ backgroundColor: getColor() }}
    >
      {letter}
    </div>
  );
};

export default Tile;
