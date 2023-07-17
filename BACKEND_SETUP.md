# バックエンド環境構築等

## 環境構築
.envに,
DATABASE_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_KEY
を追加

環境変数の共有の仕方は後日。

## テーブルに変更があった場合
テーブルを変更したい場合、`prisma/schema.prisma`を編集し、`yarn migrate "{変更内容}"`のコマンドを打つ。
`schema.ts`の型も更新する必要があるので、[この記事を参考にしてください。](https://zenn.dev/k_kind/articles/supabase-type-generate)

# TODO：fetchのやり方が固まり次第修正

## supabaseの使い方
`lib`ディレクトリにある`〇〇supabase`のファイルからそれぞれ必要なものを使用。
クライアントコンポーネントであれば`clientComponentSupabase`
サーバーコンポーネントであれば`severComponentSupabase`
サーバーアクションであれば`serverActionsSupabase`

## prismaの注意点
prismaはクライアントコンポーネントからは使用できないので、クライアントコンポーネントで使用したい場合は、サーバーコンポーネントからpropsとして渡すようにしてください。