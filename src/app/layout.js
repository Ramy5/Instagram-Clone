import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram Clone",
  description: "Created instagram clone by using next.js 13 and tailwind css 3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex items-center justify-between max-w-6xl m-auto px-8">
          {/* LOGO */}
          <div className="w-36 h-28 hidden lg:inline-grid relative cursor-pointer">
            <Image
              className=""
              src={
                "https://static.india.com/wp-content/uploads/2021/11/Instagram-Logo.jpg?impolicy=Medium_Resize&w=1200&h=800"
              }
              alt="Logo"
              fill="contain"
            />
          </div>

          <div className="w-12 h-12 lg:hidden relative cursor-pointer my-8">
            <Image
              className=""
              src={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
              }
              alt="Logo"
              fill="contain"
            />
          </div>

          {/* SEARCH BOX */}
          <div>Search box</div>

          {/* SIGN IN AND ACCOUNT */}
          <div>Sign in</div>
        </header>
        {children}
      </body>
    </html>
  );
}
