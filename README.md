## 開発するにあたっての厳守する項目

- パッケージマネージャーは**yarn**固定
- CSSは**Tailwind**のみを使用（もし再現できななどあればメンバーに相談）
- 記名関数ではなく**アローファンクション**固定
- pageは**export default**でcomponentは**named export**を使用する
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

export const Button: FC<ButtonProps> = (props) => {
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

- テンプレートに沿って内容の記入し自分が担当するタスクの場合は「assign yourself」を押下。担当が決まっていなければ何も選択しなくてよく、他の方を担当に設定する場合は歯車から設定。

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
# タスク作業後
git add .
git commit -am "作業内容"
git checkout develop
git pull --rebase origin develop
git checkout {作業ブランチ}
git merge develop
# コンフリクト解消
git push -u origin {作業ブランチ}
```

- 上の作業後、Pull requests タブの Compare & request を押下

![スクリーンショット 2023-06-13 0 06 13](https://github.com/qin-team-recipe/10-recipe-app/assets/59274850/e98d7e94-360f-4ee9-9920-bb33d216f269)

- テンプレートに沿って内容の記入し、右カラムのAssigneesを自分に設定。「Create pull request」を押下後、チェック項目を確認し問題ない項目にチェックを入れる。

![スクリーンショット 2023-06-13 0 10 50](https://github.com/qin-team-recipe/10-recipe-app/assets/59274850/65b6d361-1530-4db2-aa9e-5e4d3bf00861)

**以下必要な場合のみ実行**

- もし作業中で他の方にレビュー依頼通知を飛ばしたくない場合はCreate pull request横の ▼ から「Create draft pull request」を選択

![スクリーンショット 2023-06-13 0 29 09](https://github.com/qin-team-recipe/10-recipe-app/assets/59274850/5e003bf1-5456-4448-87ea-0ab4ac9d2b57)

## Review、merge の流れ

1. PR が作成されると Slack に通知がいくので気づいた人がレビューする。
2. Approve されるとマージできるようになる。
3. PR 作成者がマージする。
