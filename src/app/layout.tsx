import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Condensed} from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  display: 'swap', // 'swap' ensures text is visible during font load
  variable: '--font-roboto-condensed', // Define a CSS variable name
  weight: ['400', '700'], // Specify the weights you want to use
});

export const metadata: Metadata = {
  title: "Elgratio FC",
  description: "Contains Elgratio's Project and Experience History",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white h-full md:pl-[20%] md:pr-[20%] ${roboto_condensed.variable} ${roboto_condensed.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
