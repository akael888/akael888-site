import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { roboto_condensed } from "./font";
import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";
import { ThemeProvider } from "./ui/theme-provide";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-bg h-full lg:pl-[20%] lg:pr-[20%] ${roboto_condensed.variable} ${roboto_condensed.variable} antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
