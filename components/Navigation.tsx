import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { GoSun, GoMoon } from "react-icons/go";


export default function Navigation() {
  const router = useRouter();
  const [activePage, setActivePage] = useState("/");
  const [isDay, setIsDay] = useState(true);

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
          <p
            className="opacity-100 font-semibold text-2xl hover:opacity-100 cursor-pointer"
            onClick={() => {
              router.push("/");
              setActivePage("/");
            }}
          >
            FacePass
          </p>

          <span className=" opacity-25">|</span>
          <div className="HStack items-center justify-center gap-14 rounded-full w-fit pt-2 pb-2 pl-5 pr-5 ">
            <p
              className={`opacity-${
                activePage === "/" ? "100" : "45"
              } hover:opacity-100 cursor-pointer`}
              onClick={() => {
                router.push("/");
                setActivePage("/");
              }}
            >
              Home
            </p>
            <p
              className={`opacity-${
                activePage === "/plugin" ? "100" : "45"
              } hover:opacity-100  cursor-pointer`}
              onClick={() => {
                router.push("/plugin");
                setActivePage("/plugin");
              }}
            >
              How to use
            </p>
            <p
              className={`opacity-${
                activePage === "/pricing" ? "100" : "45"
              } hover:opacity-100  cursor-pointer`}
              onClick={() => {
                router.push("/pricing");
                setActivePage("/pricing");
              }}
            >
              Support
            </p>
          </div>
        </div>

        <div className="HStack   items-center gap-10 justify-end">
          <button onClick={toggleDayNight} className="Control ignore">
            {isDay ? <GoSun /> : <GoMoon />}
          </button>
<div className="gap-3 HStack items-center justify-center"><button onClick={() => router.push("/sign-in")} >
            Sign In
          </button>
          <span className="opacity-25">|</span>
          <button onClick={() => router.push("/sign-up")} className="Control dark:bg-white/20 dark:bg-opacity-5">
            Sign Up
          </button></div>
          
        </div>
      </header>
    </div>
  );
}
