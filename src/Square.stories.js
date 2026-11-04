import { fn } from 'storybook/test';

import { Square } from './App';

export default {
  title: 'TicTacToe/Square',
  component: Square,
  tags: ['autodocs'],
  args: {
    onSquareClick: fn(),
  },
};

// X が置かれたマス
export const XSquare = {
  args: {
    value: 'X',
  },
};

// Oが置かれたマス
export const OSquare = {
  args: {
    value: 'O',
  },
};

// 空のマス
export const EmptySquare = {
  args: {
    value: null,
  },
};
