import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import "./globals.css";
//Fonts
import { Josefin_Sans, Playfair_Display } from "next/font/google";
// Components
import Navbar from "./components/partials/navbar";
import Footer from "./components/partials/footer";

const josefin_Sans = Josefin_Sans({
   subsets: ["latin"],
   variable: '--font-josefin-sans' 

});
const playfair_display = Playfair_Display({ 
  subsets: ["latin"],
  variable:'--font-playfair-display'
});

export const metadata: Metadata = {
  title: "Henry Morris - Portfolio",
  description: "UVA CS student and fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair_display.variable} ${josefin_Sans.variable} font-josefinSans`}>
        
        {children}
        <SpeedInsights/>
        <Analytics />
        <Footer/>
      </body>
    </html>
  );
}
