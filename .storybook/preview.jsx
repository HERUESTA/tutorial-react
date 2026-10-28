// 本番と同じ見た目で確認できるよう、アプリのグローバルCSSを読み込む
import '../src/styles.css';

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;