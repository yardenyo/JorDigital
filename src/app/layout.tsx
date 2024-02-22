import type { Metadata } from "next";
import Header from "@components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "JorDigital - בניית אתרים | מיתוג | קידום אתרים",
  description: "בניית אתרים | מיתוג | קידום אתרים",
  keywords: "בניית אתרים, מיתוג, קידום אתרים",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="icon" href="images/favicon.ico" />
      </head>
      <body className="bg-primary font-body app">
        <Header />
        {children}
      </body>
    </html>
  );
}
