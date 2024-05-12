"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SiGooglegemini } from "react-icons/si";

export default function Home() {
  const router = useRouter();

  return (
    <main className="VStack gap-10 min-h-screen  items-center justify-between p-24">
      <div className="VStack mt-12 gap-8 w-full items-center justify-center text-center">
        <div className="HStack items-center justify-center gap-2 rounded-full dark:bg-white/20 bg-black/5 ring-1 ring-black/5 w-fit pt-2 pb-2 pl-5 pr-5">
          <SiGooglegemini />
          <p>On-Cloud Vision Inteligent</p>
        </div>
        <p className="text-9xl font-medium">
          Your next password <br className="hidden md:block" /> is not a
          password
        </p>
        <p className="m-0 text-lg opacity-50">
          Find in-depth information about Next.js features and API.
        </p>
        <button
          onClick={() => router.push("/sign-in")}
          className="text-white dark:text-black min-w-60 bg-black dark:bg-white rounded-full pl-7 pr-7 pt-3 pb-3  border-opacity-75"
        >
          Try now
        </button>
      </div>
      

      <div className="mb-32 gap-10 items-center justify-center w-full text-center lg:mb-0 lg:w-full HStack lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            How to use?{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            How does it work?{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a><a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            How to be FacePass developer?{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>
      </div>
    </main>
  );
}
