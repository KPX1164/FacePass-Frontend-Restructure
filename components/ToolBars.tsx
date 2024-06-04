import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { HiCubeTransparent } from "react-icons/hi";
import DeveloperTools from "@/components/DeveloperTools";
import ConsoleTools from "@/components/ConsoleTools";
import ProjectTools from "@/components/ProjectTools";
import DefaultTools from "@/components/DefaultTools";
import Link from "next/link";
import { GoChevronLeft } from "react-icons/go";
import useToken from "@/hooks/useToken";
import UserTools from "./UserTools";

const ToolBars: React.FC = () => {
  const [activePage, setActivePage] = useState("/");
  const { isLoggedIn } = useToken();
  const [siteApp, setSiteApp] = useState("FacePass");

  useEffect(() => {
    const handleRouteChange = () => {
      const pathname = window.location.pathname;
      setActivePage(pathname);

      const determineSiteApp = (path: string) => {
        if (path.startsWith("/developer/console/project")) return "Project";
        if (path.startsWith("/developer/console")) return "Console";
        if (path.startsWith("/developer")) return "Developer";
        if (path.startsWith("/control")) return "Control Center";
        if (path.startsWith("/setting")) return "Settings";
        return "FacePass";
      };

      setSiteApp(determineSiteApp(pathname));
    };

    handleRouteChange();

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const renderTools = (key: string) => {
    switch (key) {
      case "Developer":
        return (
          <DeveloperTools
            activePage={activePage}
            setActivePage={setActivePage}
          />
        );
      case "Console":
        return <ConsoleTools />;
      case "Project":
        return <ProjectTools />;
      default:
        return (
          <DefaultTools activePage={activePage} setActivePage={setActivePage} />
        );
    }
  };

  return (
    <header
      className={`w-full HStack items-center justify-between ${
        siteApp === "Console" || siteApp === "Settings"
          ? "bg-white dark:bg-black"
          : ""
      }`}
    >
      <div className="HStack">
        <div className="HStack min-h-[55px] gap-1 bg-white dark:bg-dark rounded-none items-center rounded-br-3xl pl-7 pr-7 pt-1 pb-2">
          {siteApp === "Console" || siteApp === "Settings" ? (
            <div className="gap-1 HStack items-center">
              {siteApp === "Console" ? (
                <HiCubeTransparent className="text-2xl font-bold" />
              ) : (
                <GoChevronLeft className="text-2xl font-bold" />
              )}
              <p className="font-semibold text-2xl">
                {siteApp.charAt(0).toUpperCase() + siteApp.slice(1)}
              </p>
            </div>
          ) : (
            <p className="font-semibold text-2xl">
              {siteApp.charAt(0).toUpperCase() + siteApp.slice(1)}
            </p>
          )}
        </div>

        <div className="w-[25px] VStack dark:bg-black bg-white h-[20px] self-start">
          <div
            className={`w-[30px] bg-tridary dark:bg-dark-secondary rounded-tl-full h-[20px] ${
              siteApp === "Console" || siteApp === "Settings"
                ? "bg-white dark:bg-black"
                : ""
            }`}
          ></div>
        </div>
        <div className="HStack items-center justify-center">
          {renderTools(siteApp)}
        </div>
      </div>
      <div className="HStack gap-5 pt-[0.5rem] pr-5">
        {isLoggedIn ? (
          <div className="HStack items-center justify-center">
            <UserTools siteApp={siteApp} />
          </div>
        ) : (
          <>
            {siteApp === "Developer" ? (
              <div className="HStack gap-5">
                <Link
                  href="/developer/sign-in"
                  className="bg-night dark:bg-black pt-2 pb-2 pl-4 pr-4 rounded-lg text-sm text-white"
                >
                  Account
                </Link>
              </div>
            ) : (
              <div className="HStack gap-5">
                <Link
                  href="/sign-up"
                  className="dark:bg-black bg-tridary pt-2 pb-2 pl-4 pr-4 rounded-lg text-sm text-white"
                >
                  Sign Up
                </Link>
                <Link
                  href="/sign-in"
                  className="border-1.5 dark:text-white dark:border-tridary border-night pt-2 text-black pb-2 pl-4 pr-4 rounded-lg text-sm"
                >
                  Sign In
                </Link>
              </div>
            )}
          </>
        )}
      </div>

      {siteApp === "Console" && (
        <Link
          href="/developer"
          className="fixed top-0 left-0 items-center p-1 text-xs cursor-pointer hover:opacity-75 HStack gap-1"
        >
          <GoChevronLeft />
          <p>Home</p>
        </Link>
      )}

      {siteApp === "Project" && (
        <Link
          href="/developer/console"
          className="fixed top-0 left-0 items-center p-1 text-xs cursor-pointer hover:opacity-75 HStack gap-1"
        >
          <GoChevronLeft />
          <p>Console</p>
        </Link>
      )}
    </header>
  );
};

export default dynamic(() => Promise.resolve(ToolBars), { ssr: false });
