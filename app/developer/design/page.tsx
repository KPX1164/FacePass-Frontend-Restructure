import React from "react";
import { Link } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col  lg:items-center Optimise-view ">
      <section className="gap-5  VStack text-left w-full h-full mt-10 mb-32 lg:w-8/12">
        <p className="text-3xl font-medium ">Human Interface Guildelines</p>
        <p className="opacity-70 w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          harum sunt minima voluptatum magnam temporibus repellat quos culpa
          tempora? Optio accusamus nisi quis, ratione vel quod. Officia facere
          numquam cupiditate?
        </p>
        <div className="HStack gap-1">
          <Link
            href="https://www.figma.com/design/aS9szZuIVjnU1aBNTlfM4J/FacePass-Resources?node-id=0%3A1&t=6naRtFwR86cAHTwH-1"
            target="_blank"
          >
            Resources
          </Link>
          <GoArrowUpRight className="text-blue-600 text-xs align-super" />
        </div>
        <div className="w-full h-full gap-5 VStack lg:items-center">
          <div className=" HStack h-full rounded-lg w-full min-h-[450px] shadow-sm">
            <img
              src="/design.jpg"
              className="  h-full rounded-3xl w-full min-h-[450px] object-cover"
              alt=""
            />
          </div>

          <section className="grid grid-cols-3 gap-4 h-[300px] w-full">
            <div className="bg-white w-full h-full rounded-3xl shadow-sm">
              <img
                src="/design2.jpg"
                className="  h-full rounded-3xl w-full h-[300px] object-cover"
                alt=""
              />
            </div>
            <div className="bg-white w-full h-full rounded-3xl shadow-sm">
              <img
                src="/design4.jpg"
                className="  h-full rounded-3xl w-full h-[300px] object-cover"
                alt=""
              />
            </div>
            <div className="bg-white w-full h-full rounded-3xl shadow-sm">
              <img
                src="/design5.jpg"
                className="  h-full rounded-3xl w-full h-[300px] object-cover"
                alt=""
              />
            </div>
          </section>
          <section className="mt-20 cursor-pointer">
            <Link
              href="https://www.figma.com/design/aS9szZuIVjnU1aBNTlfM4J/FacePass-Resources?node-id=0%3A1&t=6naRtFwR86cAHTwH-1"
              target="_blank"
              className="pl-16  items-center pr-16 pt-4 pb-4 bg-black shadow-sm bg-opacity-100 rounded-full HStack gap-1 text-white hover:bg-opacity-75"
            >
              <p> All Design Resources</p>{" "}
              <GoChevronRight className="text-white text-xl" />
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
