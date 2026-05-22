# L5-01 Mini Restaurant App

## 1. 概要

Mini Restaurant Appは、メニュー表示、注文処理、在庫更新、注文ログ表示を体験するための小さなWebアプリです。

本物のバックエンドやデータベースは使わず、JavaScriptの配列と関数を使って、Webサービスの基本構造を学びます。

---

## 2. 検証したい仮説

ユーザーは、メニューを見て、注文ボタンを押し、注文結果が即時に返ると、Webアプリの基本構造を理解しやすくなるのではないか。

---

## 3. 想定ユーザー

HTML / CSS / JavaScriptの基本構造を学びたいAXSC受講生。

---

## 4. 今回作る範囲

### 作るもの

- メニュー一覧
- 注文ボタン
- 注文結果表示
- 注文ログ表示
- Consoleログ

### 作らないもの

- 本物のバックエンド
- 本物のデータベース
- ログイン機能
- 決済機能
- 予約機能
- 外部API連携
- AI連携

---

## 5. 画面構成

- Header
- Menu Area
- Order Result Area
- Order Logs Area

---

## 6. データ構造

### menuItems

商品情報を管理する擬似DB。

- id
- name
- description
- price
- stock

### orderLogs

注文履歴を管理する擬似ログDB。

- id
- status
- message
- createdAt

---

## 7. 処理の流れ

1. ブラウザでindex.htmlを開く
2. menuItemsを読み込む
3. Menu Areaに商品を表示する
4. Orderボタンを押す
5. 商品IDを取得する
6. createOrder()で在庫を確認する
7. 在庫があれば注文成功にする
8. 在庫がなければ注文失敗にする
9. 注文結果を画面に表示する
10. 注文ログを画面に追加する
11. Consoleに処理ログを出す

---

## 8. 受け入れ条件

このアプリは、以下をすべて満たしたら完成とする。

- ブラウザでindex.htmlを開くと画面が表示される
- Menu Areaに3つの商品が表示される
- Curry / Pasta / Salad が表示される
- stockが1以上の商品はOrderボタンを押せる
- stockが0の商品はSold Outになる
- Orderボタンを押すと注文成功メッセージが表示される
- 注文後に該当商品のstockが1つ減る
- stockが0になった商品はSold Outになる
- 注文ログが画面に追加される
- Consoleに処理ログが表示される

---

## 9. 非機能要件

- 読みやすいコードである
- HTML / CSS / JavaScriptの役割が分かれている
- 画面・データ・処理・ログが分離されている
- ローカル環境で動く
- Consoleログで処理を確認できる
- Chapter 05でデバッグ素材として使える

---

## 10. 起動方法

プロジェクトフォルダで以下を実行する。

```bash
python3 -m http.server 5500