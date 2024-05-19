import React from "react";
import { Link } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col justify-between lg:items-center">
      <section className="gap-5  VStack text-left w-full h-full mt-20 lg:w-8/12">
        <p className="text-3xl font-medium ">Get helps</p>
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

        <p className="text-3xl font-medium ">Find documents and Guildelines</p>
        <section className="grid grid-cols-3 gap-4 min-h-[300px]">
          <div className="bg-white w-full h-full rounded-lg p-10">
            <div className="h-4/6"></div>
            <div className="h-2/6">
              <p className="font-medium text-lg">Installation</p>
              <ul>
                <li className="pl-5 pt-1 pb-1">Document</li>
                <li className="pl-5 pt-1 pb-1">Usage</li>
              </ul>
            </div>
          </div>
          <div className="bg-white w-full h-full rounded-lg p-10">
            <div className="h-4/6"></div>
            <div className="h-2/6">
              <p className="font-medium text-lg"> Documentation</p>

              <ul>
                <li className="pl-5 pt-1 pb-1">Document</li>
                <li className="pl-5 pt-1 pb-1">Usage</li>
              </ul>
            </div>
          </div>
          <div className="bg-white w-full h-full rounded-lg p-10">
            <div className="h-4/6"></div>
            <div className="h-2/6">
              <p className="font-medium text-lg"> Components</p>

              <ul>
                <li className="pl-5 pt-1 pb-1">Document</li>
                <li className="pl-5 pt-1 pb-1">Usage</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
