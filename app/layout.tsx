'use client'
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
      <head>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
          }

          .background-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-image: url('wallpaper.jpg');
            background-size: cover;
            animation: slide 50s linear infinite; /* Adjust animation duration as needed */
          }

          @keyframes slide {
            from {
              background-position: 0 0;
            }
            to {
              background-position: 100% 0;
            }
          }

          .content-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow-y: auto; /* Allow vertical scrolling for content */
          }

          /* Other global styles can go here */
        `}</style>
      </head>
      <body className={inter.className + " dark:dark"}>
        <div className="background-container">
          <Navigation />
          <div className="content-container">
            {children}
          </div>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
