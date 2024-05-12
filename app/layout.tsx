"use client";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Navigation from "@/components/Navigation";
const inter = Inter({ subsets: ["latin"] });

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

            background-color: #ffffff;
            opacity: 0.8;
            background-image: radial-gradient(
              #b9b9b9 1.7000000000000002px,
              rgba(255, 255, 255, 1) 1.7000000000000002px
            );
            background-size: 34px 34px;

            // background-opacity: 0.2;
            // background-image: radial-gradient(
            //   #b9b9b9 1.7000000000000002px,
            //   rgba(255, 255, 255, 1) 1.7000000000000002px
            // );
            // background-size: 19px 19px;
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
            overflow-y: auto; 
          }

          /* Dark mode */
          @media (prefers-color-scheme: dark) {
            .background-container {
              background-image: radial-gradient(
                rgba(38, 38, 38, 0.8) 1.7000000000000002px,
                rgba(0, 0, 0, 1) 1.7000000000000002px
              );
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
