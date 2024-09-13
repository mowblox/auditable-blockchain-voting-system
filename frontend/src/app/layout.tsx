"use client";
import type { Metadata } from "next";
import { Space_Grotesk, Roboto_Flex } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MetaMaskProvider } from "metamask-react";

const space_grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const roboto_flex = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto-flex' });

// export const metadata: Metadata = {
//   title: "ABVS",
//   description: "BUIDL with Mowblox",
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${space_grotesk.variable} ${roboto_flex.variable}`}>
     <MetaMaskProvider>
     <body className="bg-dark text-text">
        <Header />
        {children}
        <Footer />
      </body>
     </MetaMaskProvider>
    </html>
  );
}
