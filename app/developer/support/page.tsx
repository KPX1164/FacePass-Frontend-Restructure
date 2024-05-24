"use client";
import React from "react";
import { Link } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import SupportContact from "@/components/SupportContact";
import { HiArrowDownTray } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { HiOutlineHandRaised } from "react-icons/hi2";
import { HiOutlineCode } from "react-icons/hi";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col justify-between lg:items-center Optimise-view ">
      <section className="gap-5  VStack text-left w-full h-full mt-20 lg:w-8/12">
        <p className="text-3xl font-medium ">Get helps</p>
        <p className="opacity-70 w-3/4">
          Explore our wide range of tools and technologies, where our team of
          FacePass experts is here to assist you every step of the way.
        </p>
        <div className="HStack gap-1">
          <Link
            href="https://www.figma.com/design/aS9szZuIVjnU1aBNTlfM4J/FacePass-Resources?node-id=0%3A1&t=6naRtFwR86cAHTwH-1"
            target="_blank"
          >
            Report
          </Link>
          <GoArrowUpRight className="text-blue-600 text-xs align-super" />
        </div>
        <div className="mt-10"></div>
        <p className="text-3xl font-medium ">Find documents and Guildelines</p>
        <section className="grid grid-cols-3 gap-4 h-[250px]">
          <div className="bg-white gap-5 VStack w-full h-full rounded-lg p-10">
            <div className="h-3/6 VStack justify-end">
              <HiArrowDownTray className="text-5xl" />
            </div>
            <div className="h-3/6 VStack gap-2">
              <p className="font-medium text-lg">Installation</p>
              <ul className="VStack gap-1">
                <Link className="HStack gap-1 items-center p-1" href="#">
                  <IoDocumentTextOutline className="text-2xl" />

                  <p>Documentation</p>
                </Link>
                <Link className="HStack gap-1 items-center p-1" href="#">
                  <IoDocumentTextOutline className="text-2xl" />

                  <p>Help Guilds</p>
                </Link>
              </ul>
            </div>
          </div>
          <div className="bg-white gap-5 VStack w-full h-full rounded-lg p-10">
            <div className="h-3/6 VStack justify-end">
              <HiOutlineCode className="text-5xl" />
            </div>
            <div className="h-3/6 VStack gap-2">
              <p className="font-medium text-lg">Coding and Usage</p>
              <ul className="VStack gap-1">
                <Link className="HStack gap-1 items-center p-1" href="#">
                  <IoDocumentTextOutline className="text-2xl" />

                  <p>Documentation</p>
                </Link>
                <Link className="HStack gap-1 items-center p-1" href="#">
                  <IoDocumentTextOutline className="text-2xl" />

                  <p>Help Guilds</p>
                </Link>
              </ul>
            </div>
          </div>
          <div className="bg-white gap-5 VStack w-full h-full rounded-lg p-10">
            <div className="h-3/6 VStack justify-end">
              <HiOutlineHandRaised className="text-5xl" />
            </div>
            <div className="h-3/6 VStack gap-2">
              <p className="font-medium text-lg">Terms and Conditions</p>
              <ul className="VStack gap-1">
                <Link className="HStack gap-1 items-center p-1" href="#">
                  <IoDocumentTextOutline className="text-2xl" />

                  <p>Documentation</p>
                </Link>
                <Link className="HStack gap-1 items-center p-1" href="#">
                  <IoDocumentTextOutline className="text-2xl" />

                  <p>Help Guilds</p>
                </Link>
              </ul>
            </div>
          </div>
        </section>
        <SupportContact />
      </section>
    </main>
  );
}
