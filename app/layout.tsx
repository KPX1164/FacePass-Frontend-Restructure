"use client";

import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
// import { metadata } from "./metadata"; // Import metadata from the separate file

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="HStack w-full items-center justify-center">
          <header className="w-full HStack items-center justify-between p-5">
            <div className="HStack gap-5 text-sm items-center">
              <div
                className="HStack gap-2 cursor-pointer"
                onClick={() => router.push("/")}
              >
                <p className="font-semibold text-lg">Developer.FacePass</p>
              </div>
              <p className=" cursor-pointer" onClick={() => router.push("/")}>
                Home
              </p>
              <p
                className=" cursor-pointer"
                onClick={() => router.push("/plugin")}
              >
                Plugin
              </p>
              <p
                className=" cursor-pointer"
                onClick={() => router.push("/pricing")}
              >
                Pricing
              </p>
            </div>
            <div className="HStack gap-5">
              <p
                className=" cursor-pointer flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
                onClick={() => router.push("/lab")}
              >
                Developer account{" "}
              </p>
              <div className="HStack items-center text-sm">
                <p>EN</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </div>
          </header>
        </div>
        {children}
      </body>
    </html>
  );
}
