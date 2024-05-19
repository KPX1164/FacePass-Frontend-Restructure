"use client";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
// import { NextUIProvider } from "@nextui-org/react";
import Navigation from "@/components/Navigation";
const inter = Inter({ subsets: ["latin"] });
import useToken from "@/hooks/useToken";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { isLoggedIn, role } = useToken();
  const isDeveloper =
    typeof window !== "undefined" && window.location.href.includes("developer");

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

            // background-opacity: 0.2;
            // background-image:  linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, rgba(0,0,0,0) 1px);
            // background-size: 20px 20px;
          }

          .content-container {
            width: 100%;
            height: calc(
              100% - 64px
            ); /* Subtract the height of the navigation bar */
            overflow-y: auto;
          }

          /* Dark mode */
          @media (prefers-color-scheme: dark) {
            // .background-container {
            //   background-opacity: 0.2;
            //   background-image:  linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.07) 1px, rgba(0,0,0,0) 1px);
            // }
          }
        `}</style>
      </head>
      <body className={inter.className + " dark:dark"}>
        <div className="background-container">
          <Navigation isDeveloper={isDeveloper} />
          <div className="content-container pl-12 pr-12 pb-12 ">
            {children}
          </div>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
