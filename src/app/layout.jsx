import HomeHeader from "@/components/Home/Header/HomeHeader";
import "./globals.css";
import { Inter } from "next/font/google";
import SessionProviders from "@/components/Context/SessionProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instagram Clone",
  description: "Created instagram clone by using next.js 13 and tailwind css 3",
  icons: {
    shortcut: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <SessionProviders>
          <HomeHeader />
          {children}
        </SessionProviders>
      </body>
    </html>
  );
}
