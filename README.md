## はじめに

環境構築は yarn で行う。
local で立ち上げる際は下記コード。

```
yarn dev
```

## issue の命名

issue の頭に作業内容に沿ったキーワードをつけ、簡潔に分かりやすくタイトルを作成。

- 【FE】→ フロントエンド作業
- 【BE】→ バックエンド作業
- 【DOC】→ ドキュメンテーション周りの作業
- 【ETC】→ その他

`例：【FE】カルーセルコンポーネントの作成`

## ブランチの命名規則

[開発するブランチの作成の仕方]

- feature#xx-yourname(feature#issues 番号-作業者名)

[修正するブランチの作成の仕方]

- fix#xx-yourname(feature#issues 番号-作業者名)

```
git pull --rebase origin develop
git checkout -b feature#{番号}-{名前}
```

## コミットメッセージ

分かりやすければ OK で特に規則は無し。
ただ、機能事にコミット分けると PR 作成時や revert する際に役に立つので意識する。

## PR の作成方法

エイリアスの設定を忘れずに。

```
git add .
git commit -am "作業内容"
git checkout develop
git pull --rebase origin develop
git checkout {作業ブランチ}
git merge develop
# コンフリクト解消
git push -u origin {作業ブランチ}
```

テンプレートに沿って PR 内容の記述。

## Review、merge の流れ

1. PR が作成されると Slack に通知がいくので気づいた人がレビューする。
2. Approve されるとマージできるようになる。
3. PR 作成者がマージする。
