import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JorDigital - בניית אתרים | מיתוג | קידום אתרים",
  description: "בניית אתרים | מיתוג | קידום אתרים",
  keywords: "בניית אתרים, מיתוג, קידום אתרים",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
