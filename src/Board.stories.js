import { fn } from 'storybook/test';

import { Board } from './App';

// default export（Meta）: このファイルが「どのコンポーネントの story か」を Storybook に教える
export default {
  // サイドバーに表示される階層（"/" で区切るとフォルダになる）
  title: 'TicTacToe/Board',
  component: Board,
  tags: ['autodocs'],
  // 全 story 共通の props。onPlay は fn() にしておくと、クリック時の呼び出しが Actions パネルに表示される
  args: {
    onPlay: fn(),
  },
};

// named export 1つ = story 1つ。args が Board に渡される props になる

// ゲーム開始直後の空の盤面
export const Empty = {
  args: {
    squares: Array(9).fill(null),
    xIsNext: true,
  },
};

// 対局途中で、次が O の番
export const InProgress = {
  args: {
    squares: ['X', 'O', null, null, 'X', null, null, null, null],
    xIsNext: false,
  },
};

// X が斜めに揃って勝利した盤面
export const XWins = {
  args: {
    squares: ['X', 'O', 'O', null, 'X', null, null, null, 'X'],
    xIsNext: false,
  },
};

// 盤面を△で埋め尽くした状態のboardのstoryを作成
export const FilledWithTriangles = {
  args: {
    squares: Array(9).fill('△'),
    xIsNext: false,
  }
}
