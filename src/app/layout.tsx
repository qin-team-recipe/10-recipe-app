import "./globals.scss";
import variables from "./variables.module.scss";
import Header from "./components/common/header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "レシピアプリ",
  description: "チーム10が作ったレシピアプリです",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="h-full">
      <body className="h-full">
        <div className="flex h-full">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
