import type { Metadata } from "next";
import {Poppins} from 'next/font/google'
import "./globals.css";
import ResponsiveNav from "./components/Home/Navbar/ResponsiveNav";
import { Footer } from "./components/Home/Footer/Footer";

const font = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Travel For You | Next.js 15",
  description: "Travel landing page using Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${font.className} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <ResponsiveNav />
        {children }
        <Footer />
        </body> 
    </html>
  );
}
