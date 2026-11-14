## Q3. サイドバーに表示される名前は？
 
次のストーリーは、Storybookのサイドバーにどんな名前で表示されるでしょう？
 
```tsx
export const PrimaryButton: Story = {
  args: { label: 'Click' },
};
```
 
- A. PrimaryButton
- B. Primary Button
- C. primary-button
- D. Click
<details>
<summary>ヒント</summary>
Storybookはエクスポート名を、人間が読みやすい形に変換して表示します。
 
</details>
<details>
<summary>正解と解説</summary>
**正解：B. Primary Button**
 
ストーリーの表示名はエクスポート名から自動で作られ、`PrimaryButton` のようなキャメルケースはスペース区切りの「Primary Button」に変換されます。
 
表示名を自分で決めたい場合は、ストーリーに `name` プロパティを指定します。
 
```tsx
export const PrimaryButton: Story = {
  name: 'メインボタン',
  args: { label: 'Click' },
};
```
 
</details>
