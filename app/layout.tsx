import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
// Components
import Navbar from "./components/partials/navbar";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Henry Morris - Portfolio",
  description: "Projects and Experience in Computer Science and More",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
