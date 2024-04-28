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
        </div>
        <div className="HStack gap-12">
          <p className=" opacity-45 cursor-pointer" onClick={() => router.push("/")}>
            Home
          </p>
          <p className=" opacity-45 cursor-pointer" onClick={() => router.push("/plugin")}>
            How to use
          </p>
          <p className=" opacity-45 cursor-pointer" onClick={() => router.push("/pricing")}>
            Support
          </p>
        </div>
        <div className="HStack gap-5">
          <p
            className="cursor-pointer flex w-full justify-center"
            onClick={() => router.push("/sign-up")}
          >
            Sign In
          </p>
        </div>
      </header>
    </div>
  );
}
