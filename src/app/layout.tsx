import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'
import localFont from 'next/font/local'
const estrella = localFont({
    src: '../fonts/estrella/Estrella.woff',
    variable: '--estrella'
})
const lato = localFont({
  src: '../fonts/lato/Lato-Medium.ttf',
  variable: '--lato'
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${lato.variable} ${estrella.variable} ${inter.className}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}