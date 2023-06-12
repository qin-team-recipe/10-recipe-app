import '../globals.scss';
import Header from '../../components/common/header';
import Link from 'next/link';

export const metadata = {
  title: 'レシピアプリ',
  description: 'チーム10が作ったレシピアプリです',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja' className='h-full'>
      <body className='h-full'>
        <div className='flex h-full'>
          <Header />
          <div className='flex flex-col'>
            <div className='flex justify-around text-red-400 px-10'>
              <Link href={'/search/recipe'}>レシピ</Link>
              <Link href={'/search/chef'}>シェフ</Link>
            </div>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
