import React from "react";
import { Link } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col justify-between lg:items-center">
      <section className="gap-5  VStack text-left w-full h-full mt-20 lg:w-8/12">
        <p className="text-3xl font-medium ">Human Interface Guildelines</p>
        <p className="opacity-70 w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          harum sunt minima voluptatum magnam temporibus repellat quos culpa
          tempora? Optio accusamus nisi quis, ratione vel quod. Officia facere
          numquam cupiditate?
        </p>
        <div className="HStack gap-1">
        <Link href="https://www.figma.com/design/aS9szZuIVjnU1aBNTlfM4J/FacePass-Resources?node-id=0%3A1&t=6naRtFwR86cAHTwH-1" target="_blank">
          Resources
        </Link>
        <GoArrowUpRight className="text-blue-600 text-xs align-super" />

        </div>
        

        <div className="w-full h-full VStack lg:items-center">
          <div className="bg-white HStack h-full rounded-lg w-full min-h-[450px] ">
            <div className="w-8/12 h-full  bg-red-500">left</div>
            <div className="w-4/12 h-full bg-blue-500">right</div>
          </div>
        </div>
      </section>
    </main>
  );
}
