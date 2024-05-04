import { useRouter } from "next/navigation";
export default function Navigation() {
  const router = useRouter();

  return (
    <div className="HStack w-full items-center justify-center pl-7 pr-7">
      <header className="w-full HStack items-center justify-between p-5">
        <div className="HStack w-1/3 gap-5 text-sm items-center justify-start">
          <div
            className="HStack gap-2 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <p className="font-semibold text-lg">FacePass</p>
          </div>
        </div>
        <div className="HStack items-center justify-center gap-24 rounded-full dark:bg-white/20 bg-black/5 ring-1 ring-black/5 w-fit pt-2 pb-2 pl-5 pr-5 cursor-pointer">

          <p
            className=" opacity-45 hover:opacity-100 cursor-pointer"
            onClick={() => router.push("/")}
          >
            Home
          </p>
          <p
            className=" opacity-45 hover:opacity-100  cursor-pointer"
            onClick={() => router.push("/plugin")}
          >
            How to use
          </p>
          <p
            className=" opacity-45 hover:opacity-100  cursor-pointer"
            onClick={() => router.push("/pricing")}
          >
            Support
          </p>
        </div>
        <div className="HStack w-1/3 items-center gap-5 justify-end">
          <button onClick={() => router.push("/sign-in")} className="HStack items-center justify-center gap-2 rounded-full dark:bg-white/20 bg-black/5 ring-1 ring-black/5 min-w-40 w-fit pt-2 pb-2 pl-5 pr-5">
            Sign In
          </button>
        </div>
      </header>
    </div>
  );
}
