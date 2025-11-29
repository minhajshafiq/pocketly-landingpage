import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
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
  title: "Pocketly - L'application mobile qui révolutionne votre quotidien",
  description: "Découvrez Pocketly, l'application mobile nouvelle génération qui simplifie votre vie avec des fonctionnalités intelligentes et une interface intuitive.",
  keywords: ["application mobile", "productivité", "organisation", "pocketly"],
  authors: [{ name: "Pocketly Team" }],
  creator: "Pocketly",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://pocketly.app",
    title: "Pocketly - L'application mobile qui révolutionne votre quotidien",
    description: "Découvrez Pocketly, l'application mobile nouvelle génération qui simplifie votre vie avec des fonctionnalités intelligentes et une interface intuitive.",
    siteName: "Pocketly",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pocketly - L'application mobile qui révolutionne votre quotidien",
    description: "Découvrez Pocketly, l'application mobile nouvelle génération qui simplifie votre vie avec des fonctionnalités intelligentes et une interface intuitive.",
    creator: "@pocketly",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
