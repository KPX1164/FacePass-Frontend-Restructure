'use client'
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import ToolBars from "@/components/ToolBars";
import useToken from "@/hooks/useToken";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { isLoggedIn, role } = useToken();

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
          }

          .Outer-frame {
            border: 10px white solid;
          }
          .Inner-frame {
            border: 20px white solid;
            border-radius: 32px;
          }
          @media (prefers-color-scheme: dark) {
            .Outer-frame {
              border: 10px black solid;
            }
            .Inner-frame {
              border: 20px black solid;
            }
          }
        `}</style>
      </head>
      <body className={`${inter.className} bg-tridary dark:dark Outer-frame`}>
        <div className="background-container bg-tridary dark:bg-dark-secondary Inner-frame">
          <ToolBars />
          <div className="overflow-y-auto w-[100%] h-[100%] dark:bg-dark-secondary bg-tridary">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
