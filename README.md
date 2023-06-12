## 開発するにあたっての厳守する項目

- パッケージマネージャーは**yarn**固定
- CSSは**Tailwind**のみを使用（もし再現できななどあればメンバーに相談）
- 記名関数ではなく**アローファンクション**固定
- 型の宣言には**type**を使用する以下例：
```
# こちらは使わない
interface ButtonProps {
  foo: string;
}

# こちらを使う
type ButtonProps = {
  foo: string;
}

const Button: FC<ButtonProps> = (props) => {
  省略
}
```

## はじめに

環境構築は yarn で行う。
local で立ち上げる際は下記コード。

```
yarn dev
```

## issue の作成

issue の頭に作業内容に沿ったタグをつけ、簡潔に分かりやすくタイトルを作成。

- 【FE】→ フロントエンド作業
- 【BE】→ バックエンド作業
- 【DOC】→ ドキュメンテーション周りの作業
- 【DEV】→ 環境構築系
- 【ETC】→ その他

`例：【FE】カルーセルコンポーネントの作成`

### issue作成の流れ
- Issuesタブから「New Issue」を押下し、遷移先で「Get started」を押下。

![スクリーンショット 2023-06-11 17 41 24](https://github.com/qin-team-recipe/10-recipe-app/assets/59274850/c0996ce0-c23a-4a97-bba9-411444606f09)

- タイトル（頭のタグを忘れずに）、概要、目的、その他を記入し自分が担当するタスクの場合は「assign yourself」を押下。担当が決まっていなければ何も選択しなくてよく、他の方を担当に設定する場合は歯車から設定。

![スクリーンショット 2023-06-12 23 52 43](https://github.com/qin-team-recipe/10-recipe-app/assets/59274850/5c178737-81d0-456e-8f9b-0d702676fe4c)

- Submit new issueを押下し、issueが作成されたらProjectに「10-recipe」を設定。
- 状況に合わせたStatusに変更する。
  - IceBox（凍結タスク）
  - Todo（将来的に着手するタスク）
  - In Progress（現在着手中のタスク）
  - Done（終了したタスク）

![スクリーンショット 2023-06-12 23 59 06](https://github.com/qin-team-recipe/10-recipe-app/assets/59274850/4c8ad736-3be6-4eff-aa5e-a96efba9e8eb)

## ブランチの命名規則

[開発するブランチの作成の仕方]

- feature#xx-yourName(feature#issues 番号-作業者名)

[修正するブランチの作成の仕方]

- fix#xx-yourName(feature#issues 番号-作業者名)

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
