import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pocketly - Your Smart Budget Buddy",
  description: "A simple (but powerful) app to track your money. Never ask 'Where did all my money go?' again. Start saving better, spending smarter, and reaching your goals — effortlessly.",
  keywords: "budget, finance, money tracking, personal finance, savings, spending, financial goals",
  authors: [{ name: "Pocketly Team" }],
  openGraph: {
    title: "Pocketly - Your Smart Budget Buddy",
    description: "A simple (but powerful) app to track your money. Never ask 'Where did all my money go?' again.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pocketly - Your Smart Budget Buddy",
    description: "A simple (but powerful) app to track your money. Never ask 'Where did all my money go?' again.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
