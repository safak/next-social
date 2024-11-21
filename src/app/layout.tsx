import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './../components/Navbar';
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "monoGames Social Media",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <Head>
          <link rel="icon" href="public/monoGamesLogo.png" type="image/x-icon" sizes="100x100" />
      </Head>

      <body className={inter.className}>
        <div className="w-full bg-white px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <Navbar/>
        </div>
        <div className="bg-slate-100 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          {children}
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
};