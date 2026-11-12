## Q2. Primaryに渡されるargsは？
 
次のストーリーファイルで、`Primary` ストーリーが描画されるときにコンポーネントへ渡されるargsはどれでしょう？
 
```tsx
const meta = {
  component: Button,
  args: { size: 'medium' },
} satisfies Meta<typeof Button>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const Primary: Story = {
  args: { label: 'Button', primary: true },
};
```
 
- A. `label`, `primary` の2つだけ
- B. `size` だけ
- C. `size`, `label`, `primary` の3つ
- D. argsが2か所にあるのでエラーになる
<details>
<summary>ヒント</summary>
metaに書いたargsは、そのファイルの全ストーリーに関係します。
 
</details>
<details>
<summary>正解と解説</summary>
**正解：C. `size`, `label`, `primary` の3つ**
 
meta（`export default` 側）のargsはファイル内の全ストーリー共通の値で、各ストーリーのargsとマージされます。そのため `Primary` は `<Button size="medium" label="Button" primary />` として描画されます。
 
同じキーが両方にある場合は、より具体的なストーリー側の値が優先されます。全体共通の `.storybook/preview.ts` のargsも含めると、優先度は **preview < meta < ストーリー** の順です。
 
</details>
