import type { Metadata } from "next";
import { roboto_condensed } from "./font";
import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";

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
