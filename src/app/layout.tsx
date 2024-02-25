import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import FooterSection from "@/frontend/sections/footer-section/footer-section";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GiftMe app",
  description: "Wish list app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FooterSection background="bg-zinc-800" text="text-white" />
      </body>
    </html>
  );
}
