"use client";

import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import useToken from "@/hooks/useToken";
import Navigation from "@/components/Navigation";
const inter = Inter({ subsets: ["latin"] });
import Footer from '@/components/Footer'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <html lang="en">
<body className={inter.className + " text-foreground bg-background"}>
        <Navigation />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
