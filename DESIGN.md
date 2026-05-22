# Mini Restaurant App Design

## 1. 画面構成

- Header
- Menu Area
- Order Result åΩ
- Order Logs Area

## 2. UI要素

### Header
- アプリ名
- ワークショップ説明

### Menu Area
- 商品カード
- 商品名
- 説明
- 価格
- 在庫
- Orderボタン
- Sold Out表示

### Order Result Area
- 注文成功メッセージ
- 注文失敗メッセージ

### Order Logs Area
- 注文履歴一覧

## 3. データ構造

### menuItems
- id
- name
- description
- price
- stock

### orderLogs
- id
- itemName
- status
- message
- createdAt

## 4. 主な処理

- renderMenu()
- handleOrder(itemId)
- createOrder(itemId)
- renderOrderResult(response)
- addOrderLog(response)
- renderOrderLogs()

## 5. ファイル分担

- index.html：画面の骨格
- style.css：見た目
- script.js：データと処理