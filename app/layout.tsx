"use client";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import useToken from "@/hooks/useToken";
import Navigation from "@/components/Navigation";
const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/Footer";

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

            background-opacity: 0.2;
            background-image: radial-gradient(
              #b9b9b9 0.9500000000000001px,
              rgba(255, 255, 255, 0) 0.9500000000000001px
            );
            background-size: 19px 19px;
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
 
          /* Dark mode */
          @media (prefers-color-scheme: dark) {
            .background-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
        
                /* Adjust the background color for dark mode */
                background-color: #121212; 
        
                /* Adjust the opacity for dark mode */
                background-opacity: 0.8;
        
                /* Adjust the radial gradient colors for dark mode */
                background-image: radial-gradient(
                    rgba(38, 38, 38, 0.80) 0.9500000000000001px,
                    rgba(0, 0, 0, 0) 0.9500000000000001px
                );
                background-size: 19px 19px;
            }
        }
        
        `}</style>
      </head>
      <body className={inter.className + " dark:dark"}>
        <div className="background-container">
          <Navigation />
          <div className="content-container">{children}</div>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
