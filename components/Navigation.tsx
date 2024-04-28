import { useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();

  return (
    <div className="HStack w-full items-center justify-center">
      <header className="w-full HStack items-center justify-between p-5">
        <div className="HStack gap-5 text-sm items-center">
          <div
            className="HStack gap-2 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <p className="font-semibold text-lg">FacePass</p>
          </div>
          <p className="cursor-pointer" onClick={() => router.push("/")}>
            Home
          </p>
          <p className="cursor-pointer" onClick={() => router.push("/plugin")}>
            Plugin
          </p>
          <p className="cursor-pointer" onClick={() => router.push("/pricing")}>
            Pricing
          </p>
        </div>
        <div className="HStack gap-5">
          <p
            className="cursor-pointer flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
            onClick={() => router.push("/sign-up")}
          >
            Developer account
          </p>
        </div>
      </header>
    </div>
  );
}
