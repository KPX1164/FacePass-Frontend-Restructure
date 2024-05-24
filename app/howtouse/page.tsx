import React from "react";
import { Link } from "@nextui-org/react";
import { GoChevronRight } from "react-icons/go";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col justify-between lg:items-center Optimise-view ">
      <section className="gap-5  VStack items-center w-full h-full mt-20 lg:w-8/12">
        <p className="text-xl">Easy way to use</p>
        <p className="text-5xl font-semibold ">Sign In with FacePass</p>
        <p className="opacity-70 w-3/4">
          A face authentication service simplifies user verification through
          seamless and secure facial recognition.
        </p>
        <div className="relative w-full h-[500px] rounded-3xl">
          <img
            className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            src="face_example.jpg"
            alt="FacePass"
          />
          <div className="absolute inset-0 bg-black opacity-45 rounded-3xl"></div>

          <div className="absolute w-full h-full HStack inset-0 flex  text-white p-7">
            <div className="w-6/12 h-full">
              <p className="font-medium text-xl"> Face Authentication</p>
            </div>
            <div className="w-6/12 pt-[150px] h-full items-center text-center justify-center">
              <p className="font-medium text-4xl w-8/12 text-center"> Recreate your <br /> own password, so it’s never lost.</p>
            </div>
          </div>
        </div>
        <section className=" cursor-pointer">
            <Link
              href="https://www.figma.com/design/aS9szZuIVjnU1aBNTlfM4J/FacePass-Resources?node-id=0%3A1&t=6naRtFwR86cAHTwH-1"
              target="_blank"
              className="pl-16  items-center pr-16 pt-4 pb-4 bg-black shadow-sm bg-opacity-100 rounded-full HStack gap-1 text-white hover:bg-opacity-75"
            >
              <p> Recreate now</p>
              <GoChevronRight className="text-white text-xl" />
            </Link>
          </section>
      </section>
    </main>
  );
}
