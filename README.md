# tutorial-react
Reactのチュートリアルのためのリポジトリ

## 環境構築

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

## ビジュアルリグレッションテスト (Chromatic)

Storybook の各ストーリーのスクリーンショットを Chromatic に送り、前回との差分を検知します。

### 初回の準備

`.env.example` を `.env` にコピーし、Chromatic の Manage > Configure に表示されるプロジェクトトークンを設定します。

```sh
cp .env.example .env
```

Dockerfile を変更しているので、イメージを作り直します。

```sh
docker compose down -v
docker compose build
```

### 実行方法

```sh
docker compose run --rm chromatic
```

実行が終わると Chromatic のビルド URL が表示されます。差分がある場合は、その画面で変更を受け入れる (Accept) か拒否する (Deny) かを選びます。

Chromatic はコミット単位でベースラインを管理するため、変更はコミットしてから実行します。

## Docker を使わない場合

Node.js 22 をインストールした上で、以下を実行します。

```sh
npm install
npm start
```
