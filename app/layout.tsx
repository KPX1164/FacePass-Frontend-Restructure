"use client";
import { useRouter } from "next/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
const inter = Inter({ subsets: ["latin"] });
import useToken from "@/hooks/useToken";
import ToolBars from "@/components/ToolBars";

type PathMap = {
  "": string;
  developer: string;
  control: string;
  "developer/console": string;
  "developer/console/project": string;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { isLoggedIn, role } = useToken();

  const siteApp = (() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      const parts = pathname.split("/").filter(Boolean);
      const pathMap: PathMap = {
        "": "FacePass",
        developer: "Developer",
        control: "Control Center",
        "developer/console": "Console",
        "developer/console/project": "Project",
      };
      return pathMap[parts.join("/") as keyof PathMap]; // Use type assertion here
    }
    return "FacePass"; // Default value
  })();

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

          .content-container {
            width: 100%;
            height: calc(100% - 64px);
            overflow-y: auto;
          }
          .Outer-frame {
            border: 10px white solid;
          }
          .Inner-frame {
            border: 20px white solid;
            border-radius: 32px;
          }
          @media (prefers-color-scheme: dark) {
          }
        `}</style>
      </head>
      <body className={inter.className + "bg-tridary dark:dark Outer-frame"}>
        <div className="background-container bg-tridary Inner-frame">
          {/* <Navigation isDeveloper={isDeveloper} siteApp={siteApp} /> */}
          <ToolBars siteApp={siteApp.toLowerCase()} />
          <div className="content-container bg-tridary">{children}</div>
        </div>
      </body>
    </html>
  );
}
