import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { GoSun, GoMoon } from "react-icons/go";
import Link from "next/link";
import useToken from "@/hooks/useToken";

export default function Navigation() {
  const [activePage, setActivePage] = useState("/");
  const [isDay, setIsDay] = useState(true);
  const { isLoggedIn, logout, username, role, token } = useToken();

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
            href={"/"}
          >
            Developer.FacePass
          </Link>

          <div className="VSection-break"></div>
          <div className="HStack items-center justify-center gap-14 rounded-full w-fit pt-2 pb-2 pl-5 pr-5 ">
            <Link
              className={`opacity-${
                activePage === "/" ? "100" : "45"
              } hover:opacity-100 cursor-pointer`}
              onClick={() => {
                setActivePage("/");
              }}
              href={"/"}
            >
              Home
            </Link>
            <Link
              className={`opacity-${
                activePage === "/plugin" ? "100" : "45"
              } hover:opacity-100  cursor-pointer`}
              onClick={() => {
                setActivePage("/plugin");
              }}
              href={"/plugin"}
            >
              How to use
            </Link>
            <Link
              className={`opacity-${
                activePage === "/pricing" ? "100" : "45"
              } hover:opacity-100  cursor-pointer`}
              onClick={() => {
                setActivePage("/pricing");
              }}
              href={"/pricing"}
            >
              Support
            </Link>
          </div>
        </div>

        <div className="HStack   items-center gap-10 justify-end">
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
                <Link href={"/sign-in"}>Sign In</Link>
                <Link
                  href={"/sign-up"}
                  className="Control dark:bg-white/20 dark:bg-opacity-5"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
