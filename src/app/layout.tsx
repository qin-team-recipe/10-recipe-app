import "./style/globals.css";

import { Navigation } from "@/components/Navigation";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body className="mx-auto flex max-w-2xl flex-col-reverse items-start sm:flex-row">
        <Navigation />
        <div className="flex flex-col">
          <main className="max-w-md border-x border-lightGray">{children}</main>
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
