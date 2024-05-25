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
type ToolBarsProps = {
  siteApp?: string;
};

const ToolBars: React.FC<ToolBarsProps> = ({ siteApp = "FacePass" }) => {
  const [activePage, setActivePage] = useState("/");
  const { isLoggedIn } = useToken();

  useEffect(() => {
    const handleRouteChange = () => {
      setActivePage(window.location.pathname);
    };

    // Update activePage on component mount
    setActivePage(window.location.pathname);

    // Update activePage when route changes
    window.addEventListener("popstate", handleRouteChange);

    // Clean up event listener
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  //   useEffect(() => {
  //     setActivePage(window.location.pathname);
  //   }, []);

  const renderTools = (key: string) => {
    switch (key) {
      case "developer":
        return (
          <DeveloperTools
            activePage={activePage}
            setActivePage={setActivePage}
          />
        );
      case "console":
        return <ConsoleTools />;
      case "project":
        return <ProjectTools />;
      default:
        return (
          <DefaultTools activePage={activePage} setActivePage={setActivePage} />
        );
    }
  };

  return (
    <header
      className={`w-full HStack items-center justify-between  ${
        siteApp === "console" ? "bg-white" : ""
      }`}
    >
      <div className="HStack">
        <div className="HStack min-h-[55px] gap-1 bg-white rounded-none items-center rounded-br-3xl  pl-7 pr-7 pt-1 pb-2">
          {siteApp === "console" ? (
            <div className="gap-1 HStack items-center ">
              <HiCubeTransparent className="text-2xl font-bold" />
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

        <div className="w-[25px] VStack bg-white h-[20px] self-start">
          <div
            className={`w-[30px] bg-tridary rounded-tl-full h-[20px] ${
              siteApp === "console" ? "bg-white" : ""
            }`}
          ></div>
        </div>
        <div className="HStack items-center justify-center">
          {renderTools(siteApp.toLowerCase())}
        </div>
      </div>
      <div className="HStack gap-5 pt-[0.5rem] pr-5">
        {isLoggedIn ? (
          <div className="HStack items-center justify-center">
            <UserTools siteApp={siteApp} />
          </div>
        ) : (
          <>
          {siteApp === "developer" ? ( 
            <div className="HStack gap-5">
              <Link
              href="/developer/sign-in"
              className="bg-night pt-2 pb-2 pl-4 pr-4 rounded-lg text-sm text-white"
            >
              Account
            </Link>
        
            </div>
          ):(    <div className="HStack gap-5">
          <Link
          href="/sign-up"
          className="bg-night pt-2 pb-2 pl-4 pr-4 rounded-lg text-sm text-white"
        >
          Sign Up
        </Link>
        <Link
          href="/sign-in"
          className=" border-1.5 border-night pt-2 text-black pb-2 pl-4 pr-4 rounded-lg text-sm "
        >
          Sign In
        </Link>
        </div>)}
            
          </>
        )}
      </div>

      {siteApp === "console" && (
        <Link
          href="/developer"
          className="fixed top-0 left-0 items-center p-1 text-xs cursor-pointer hover:opacity-75 HStack gap-1"
        >
          <GoChevronLeft />
          <p>Home</p>
        </Link>
      )}

      {siteApp === "project" && (
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
