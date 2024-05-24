import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { GoSun, GoMoon } from "react-icons/go";
import Link from "next/link";
import useToken from "@/hooks/useToken";
import dynamic from "next/dynamic";
import { GoArrowUpRight } from "react-icons/go";
import { FaGear } from "react-icons/fa6";
import { GoChevronRight } from "react-icons/go";
import { HiCubeTransparent } from "react-icons/hi";
import { GoChevronLeft } from "react-icons/go";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

type NavigationProps = {
  isDeveloper?: boolean;
  siteApp?: boolean;
};

const Navigation: React.FC<NavigationProps> = ({
  isDeveloper = false,
  siteApp = false,
}) => {
  const [activePage, setActivePage] = useState("/");
  const [isDay, setIsDay] = useState(true);
  const { isLoggedIn, logout, username } = useToken();
  const path = window.location.pathname; // Get the current URL path

  // Function to extract the site name from the URL path
  const getSiteName = (path: any) => {
    const parts = path.split("/"); // Split the URL path by "/"
    // Get the last part of the path (which would be the site name)
    return parts[parts.length - 1];
  };

  // Usage
  const siteName = getSiteName(path);

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, []);

  const toggleDayNight = () => {
    setIsDay(!isDay);
    console.log(isDay);
  };

  return (
    <div
      className={`HStack w-full items-center justify-center pl-7 pr-7 min-h-[80px] ${
        siteApp ? "bg-white" : ""
      }`}
    >
      {siteApp && (
        <Link
          href="/developer"
          className="fixed top-0 left-0 items-center p-1 text-xs cursor-pointer hover:opacity-75 HStack gap-1"
        >
          <GoChevronLeft />
          <p>Home</p>
        </Link>
      )}

      <header className=" z-40 w-full HStack items-center justify-between p-5">
        <div className="HStack gap-5 text-sm items-center justify-start">
          <Link
            className="opacity-100 font-semibold text-2xl hover:opacity-100 cursor-pointer"
            href={isDeveloper ? "/developer" : "/"}
          >
            {isDeveloper ? (
              siteApp ? (
                <div className="HStack items-center gap-1">
                  <HiCubeTransparent className="font-bold" />
                  <p>{siteName}</p>
                </div>
              ) : (
                "Developer.FacePass"
              )
            ) : (
              "FacePass"
            )}
          </Link>

          <div className="VSection-break"></div>
          <div className="HStack items-center justify-center gap-14 rounded-full w-fit pt-2 pb-2 pl-5 pr-5">
            {!isDeveloper && (
              <>
                <Link
                  className={`opacity-${
                    activePage === "/" ? "100" : "25"
                  } hover:opacity-100 cursor-pointer`}
                  onClick={() => setActivePage("/")}
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className={`opacity-${
                    activePage === "/howtouse" ? "100" : "25"
                  } hover:opacity-100 cursor-pointer`}
                  onClick={() => setActivePage("/howtouse")}
                  href="/howtouse"
                >
                  How to use
                </Link>
                <Link
                  className={`opacity-${
                    activePage === "/support" ? "100" : "25"
                  } hover:opacity-100 cursor-pointer`}
                  onClick={() => setActivePage("/support")}
                  href="/support"
                >
                  Support
                </Link>
              </>
            )}
            {isDeveloper && !siteApp && (
              <>
                <Link
                  className={`opacity-${
                    activePage === "/developer/documentation" ? "100" : "25"
                  } hover:opacity-100 cursor-pointer`}
                  onClick={() => setActivePage("/developer/documentation")}
                  href="/developer/documentation"
                >
                  Documentation
                </Link>
                <Link
                  className={`opacity-${
                    activePage === "/developer/components" ? "100" : "25"
                  } hover:opacity-100 cursor-pointer`}
                  onClick={() => setActivePage("/developer/components")}
                  href="/developer/components"
                >
                  Components
                </Link>
                <Link
                  className={`opacity-${
                    activePage === "/developer/design" ? "100" : "25"
                  } hover:opacity-100 cursor-pointer`}
                  onClick={() => setActivePage("/developer/design")}
                  href="/developer/design"
                >
                  Design
                </Link>
                <Link
                  className={`opacity-${
                    activePage === "/developer/demo" ? "100" : "25"
                  } hover:opacity-100 cursor-pointer`}
                  onClick={() => setActivePage("/developer/demo")}
                  href="/developer/demo"
                >
                  Demo
                </Link>
                <Link
                  className={`opacity-${
                    activePage === "/developer/support" ? "100" : "25"
                  } hover:opacity-100 cursor-pointer`}
                  onClick={() => setActivePage("/developer/support")}
                  href="/developer/support"
                >
                  Support
                </Link>
              </>
            )}
            {isDeveloper && siteApp && (
              <>
                <Dropdown>
                  <DropdownTrigger className=" cursor-pointer hover:opacity-75">
                    <p>File</p>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Action event example"
                    onAction={(key) => alert(key)}
                  >
                    <DropdownItem key="new" showDivider>
                      New Project
                    </DropdownItem>
                    <DropdownItem key="copy">Open</DropdownItem>
                    <DropdownItem
                      key="copy"
                      endContent={<GoChevronRight />}
                      showDivider
                    >
                      <p>Open Recently</p>
                    </DropdownItem>

                    <DropdownItem key="edit">Select All</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown>
                  <DropdownTrigger className=" cursor-pointer hover:opacity-75">
                    <p>Edit</p>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Action event example"
                    onAction={(key) => alert(key)}
                  >
                    <DropdownItem key="new">Undo</DropdownItem>
                    <DropdownItem key="new" showDivider>
                      Redo
                    </DropdownItem>
                    <DropdownItem key="new">Cut</DropdownItem>
                    <DropdownItem key="new">Copy</DropdownItem>
                    <DropdownItem key="new" showDivider>
                      Paste
                    </DropdownItem>
                    <DropdownItem key="new" showDivider>
                      Select All
                    </DropdownItem>
                    <DropdownItem key="copy" endContent={<GoChevronRight />}>
                      <p>Short</p>
                    </DropdownItem>
                    <DropdownItem key="copy" endContent={<GoChevronRight />}>
                      <p>Format</p>
                    </DropdownItem>
                    <DropdownItem key="copy" endContent={<GoChevronRight />}>
                      <p>Convert</p>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown>
                  <DropdownTrigger className=" cursor-pointer hover:opacity-75">
                    <p>Help</p>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Action event example"
                    onAction={(key) => alert(key)}
                  >
                    <DropdownItem key="new">Documentation</DropdownItem>
                    <DropdownItem key="copy" showDivider>
                      Release Notes
                    </DropdownItem>

                    <DropdownItem key="edit">Tips and Tricks</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </>
            )}
          </div>
        </div>

        {isDeveloper ? (
          <div className="HStack items-center gap-5 justify-end">
            {isLoggedIn ? (
              <>
                <Link
                  href="/developer/console"
                  className="Control dark:bg-white/20 dark:bg-opacity-5"
                >
                  Console
                </Link>
                <Dropdown>
                  <DropdownTrigger>
                    <div className="HStack items-center justify-center gap-1 cursor-pointer">
                      {/* <p>{username}</p> */}
                      <FaGear />
                    </div>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Action event example"
                    // onAction={(key) => alert(key)}
                  >
                    <DropdownItem key="new">New file</DropdownItem>
                    <DropdownItem key="copy">Copy link</DropdownItem>
                    <DropdownItem key="edit">Edit file</DropdownItem>
                    <DropdownItem
                      className="text-danger"
                      color="danger"
                      onClick={logout}
                    >
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </>
            ) : (
              <>
                <Link
                  href="/developer/sign-in"
                  className="Control dark:bg-white/20 dark:bg-opacity-5"
                >
                  Account
                </Link>
              </>
            )}
          </div>
        ) : (
          <div className="HStack items-center gap-10 justify-end">
            <button onClick={toggleDayNight} className="Control-ignore">
              {isDay ? <GoSun /> : <GoMoon />}
            </button>
            <div className="VSection-break"></div>
            <div className="gap-10 HStack items-center justify-center">
              {isLoggedIn ? (
                <>
                  <p>Welcome, {username}!</p>
                  <button
                    className="Control dark:bg-white/20 dark:bg-opacity-5"
                    onClick={logout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/sign-in">Sign In</Link>
                  <Link
                    href="/sign-up"
                    className="Control dark:bg-white/20 dark:bg-opacity-5"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Navigation), { ssr: false });
