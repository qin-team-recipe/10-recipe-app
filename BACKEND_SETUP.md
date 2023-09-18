# バックエンド環境構築等

## 環境構築
.envに,
DATABASE_URL
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_KEY
を追加

環境変数の共有の仕方は後日。

## テーブルに変更があった場合
1. `prisma/schema.prisma`を編集
2. 開発環境用のテーブルで`yarn migrate dev "{変更内容}"`を実行。(テーブルのデータは消えます。)
3. 本番環境用のテーブルで`yarn migrate deploy`を実行。(テーブルのデータは消えない。)

# TODO：fetchのやり方が固まり次第修正


## prismaの注意点
prismaはクライアントコンポーネントからは使用できないので、クライアントコンポーネントで使用したい場合は、サーバーコンポーネントからpropsとして渡すようにしてください。