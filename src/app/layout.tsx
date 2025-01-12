import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavigationBar/Navbar";
import AOSinit from "@/components/AOS";
import { ClerkProvider } from "@clerk/nextjs";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rant",
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
        <body className={inter.className}>
          {/* <div className="bg-[#2E4053] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          <Navbar />
          </div> */}
          {/* <div className="bg-[#F7F7F7] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          {children}
          </div> */}

          <div className="bg-[#F7F7F7]">
            <AOSinit />
            {children}
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
