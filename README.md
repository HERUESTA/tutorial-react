# tutorial-react
Reactのチュートリアルのためのリポジトリ

## 環境構築

### 必要なもの

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### 起動方法

Docker Desktop を起動した状態で、リポジトリのルートで以下を実行します。

```sh
docker compose up --build
```

起動後、ブラウザで http://localhost:3000 を開きます。
`src/` 配下のファイルを編集すると、自動でリロードされます。

### 停止方法

```sh
docker compose down
```

### 依存パッケージを追加・更新したとき

`package.json` を変更した場合は、`node_modules` ボリュームを作り直して再ビルドします。

```sh
docker compose down -v
docker compose up --build
```

## Docker を使わない場合

Node.js 22 をインストールした上で、以下を実行します。

```sh
npm install
npm start
```
