# 使い方

1. terminalを開き、以下のコマンドを実行する。
```
$cd frontend/
$yarn start
```
2. 別のterminalを開き、以下のコマンドを実行する。
 ```
$cd backend/
$python manage.py runserver
```
3. ブラウザで http://localhost:3000/ にアクセスする。

--- 

## 検索画面
![検索画面](https://user-images.githubusercontent.com/31602762/174853326-ef8f61f1-e801-4d7e-b7a9-5748882365c5.png)

- 現在地から
現在地付近のレストラン一覧を取得するボタンです。
- 地名・住所から
地名・住所から得られた緯度経度から得られた位置情報からレストラン取得するボタンです。

地名・住所検索画面は以下のとおりです。
![地名・住所検索画面](https://user-images.githubusercontent.com/31602762/174879256-462a8492-0683-415e-9bcd-3c44dcc01545.png)

## レストラン一覧画面
![レストラン一覧画面](https://user-images.githubusercontent.com/31602762/174853812-83e41160-4ff8-404f-a2e5-19dae1537a5f.png)
- 検索へ戻る
検索画面へ戻るボタン
- 現在地の地図
赤いマーカーが現在地、または検索した地名の位置情報です。
それぞれ、レストランは吹き出しウィンドウに表示されている位置がレストランになります。
- 現在地からレストランの距離に応じて表示するスライダー
スライダーで指定した距離に応じて、レストラン一覧から表示、非表示にします。
- レストラン一覧
ホットペッパーグルメサーチAPIから得られたレストラン情報を表示する部分です。
![レストラン一覧](https://user-images.githubusercontent.com/31602762/174878265-10399cf0-7c86-4244-b8cc-6c2df1a82899.png)


クリックすると以下のように表示します。
![レストラン詳細](https://user-images.githubusercontent.com/31602762/174878482-fb25cab0-91f2-4ace-92dd-dec4b5b68573.png)



