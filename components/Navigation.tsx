import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { GoSun, GoMoon } from "react-icons/go";
import Link from "next/link";
import useToken from "@/hooks/useToken";
import dynamic from "next/dynamic";

type NavigationProps = {
  isDeveloper?: boolean;
};

const Navigation: React.FC<NavigationProps> = ({ isDeveloper = false }) => {
  const [activePage, setActivePage] = useState("/");
  const [isDay, setIsDay] = useState(true);
  const { isLoggedIn, logout, username } = useToken();

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, []);

  const toggleDayNight = () => {
    setIsDay(!isDay);
    console.log(isDay);
  };

  return (
    <div className="HStack w-full items-center justify-center pl-7 pr-7">
      <header className="z-40 w-full HStack items-center justify-between p-5">
        <div className="HStack gap-5 text-sm items-center justify-start">
          <Link
            className="opacity-100 font-semibold text-2xl hover:opacity-100 cursor-pointer"
            href={isDeveloper ? "/developer" : "/"}
          >
            {isDeveloper ? "Developer.FacePass" : "FacePass"}
          </Link>
          <div className="VSection-break"></div>
          <div className="HStack items-center justify-center gap-14 rounded-full w-fit pt-2 pb-2 pl-5 pr-5">
            <Link
              className={`opacity-${
                activePage === (isDeveloper ? "/Discovers" : "/") ? "100" : "45"
              } hover:opacity-100 cursor-pointer`}
              onClick={() => setActivePage(isDeveloper ? "/Discovers" : "/")}
              href={isDeveloper ? "/Discovers" : "/"}
            >
              {isDeveloper ? "Discovers" : "Home"}
            </Link>
            <Link
              className={`opacity-${
                activePage === (isDeveloper ? "/documentation" : "/plugin")
                  ? "100"
                  : "45"
              } hover:opacity-100 cursor-pointer`}
              onClick={() =>
                setActivePage(isDeveloper ? "/documentation" : "/plugin")
              }
              href={isDeveloper ? "/documentation" : "/plugin"}
            >
              {isDeveloper ? "Documentation" : "How to use"}
            </Link>
            <Link
              className={`opacity-${
                activePage === (isDeveloper ? "/component" : "/pricing")
                  ? "100"
                  : "45"
              } hover:opacity-100 cursor-pointer`}
              onClick={() =>
                setActivePage(isDeveloper ? "/component" : "/pricing")
              }
              href={isDeveloper ? "/component" : "/pricing"}
            >
              {isDeveloper ? "Components" : "Support"}
            </Link>
            {isDeveloper && (
              <>
                <Link
                  className={`opacity-${
                    activePage === "/design" ? "100" : "45"
                  } hover:opacity-100 cursor-pointer`}
                  onClick={() => setActivePage("/design")}
                  href="/design"
                >
                  Design
                </Link>
                <Link
                  className={`opacity-${
                    activePage === "/demo" ? "100" : "45"
                  } hover:opacity-100 cursor-pointer`}
                  onClick={() => setActivePage("/demo")}
                  href="/demo"
                >
                  Demo
                </Link>
                <Link
                  className={`opacity-${
                    activePage === "/developersupport" ? "100" : "45"
                  } hover:opacity-100 cursor-pointer`}
                  onClick={() => setActivePage("/developersupport")}
                  href="/developersupport"
                >
                  Support
                </Link>
              </>
            )}
          </div>
        </div>

        {isDeveloper ? (
          <div className="HStack items-center gap-10 justify-end">
             <Link
                    href="/sign-in"
                    className="Control dark:bg-white/20 dark:bg-opacity-5"
                  >
                    Account
                  </Link>
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
