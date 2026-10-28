import { expect } from 'storybook/test';

import Game from './App';

export default {
  title: 'TicTacToe/Game',
  component: Game,
  tags: ['autodocs'],
};

// デフォルトのゲーム
export const DefaultGame = {

};

// 1マスクリック
export const FirstMove = {
  play: async ({ canvas, userEvent }) => {
    // 1マス全て取得
    const squares = canvas.getAllByRole('button')
    // 1つ目のマスをクリック
    await userEvent.click(squares[0])
    await expect(squares[0]).toHaveTextContent('X')

  },
};

export const XWins = {
  play: async ({ canvas, userEvent }) => {
    const squares = canvas.getAllByRole('button')
    await userEvent.click(squares[0])
    await userEvent.click(squares[1])
    await userEvent.click(squares[3])
    await userEvent.click(squares[4])
    await userEvent.click(squares[6])
    const text = canvas.getByText('Winner: X')
    await expect(text).toBeInTheDocument()

  },
};

