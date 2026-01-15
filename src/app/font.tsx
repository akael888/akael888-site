import { Geist, Geist_Mono, Roboto_Condensed} from "next/font/google";

// export const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// export const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  display: 'swap', // 'swap' ensures text is visible during font load
  variable: '--font-roboto-condensed', // Define a CSS variable name
  weight: ['400', '700'], // Specify the weights you want to use
});