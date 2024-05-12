"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import FacePass from "@/components/public/FacePass/FacePass";
import { TiThSmall } from "react-icons/ti";
import { FaGear } from "react-icons/fa6";
import { IoChevronBack } from "react-icons/io5";
import { BiSolidUserRectangle } from "react-icons/bi";
import { GoBellFill } from "react-icons/go";
import { useEffect } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { Switch } from "@nextui-org/react";

// 3d map render
// import '@tomtom-international/web-sdk-maps/dist/maps.css'
// import tt from '@tomtom-international/web-sdk-maps'

export default function App() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-cover bg-simon-light dark:bg-simon-dark">
      <div className="HStack h-full w-full mt-14">
        <section className="w-full h-full p-7">
          <div className="HStack items-center justify-between">
            <div className="gap-3 HStack items-center">
              <IoChevronBack />
              <div className="HStack gap-3">
                <BiSolidUserRectangle className="text-5xl" />
                <div className="VStack text-sm justify-center">
                  <p className="text-lg font-semibold">Control Center</p>
                  <p>Explore more</p>
                </div>
              </div>
            </div>
            <div className="HStack gap-3">
              <Input
                type="email"
                radius="full"
                label="Search"
                className="max-h-8"
              />

              <div className="HStack  bg-white rounded-full w-8 h-8 aspect-square items-center justify-center">
                <TiThSmall className="text-black" />
              </div>
              <div className="HStack bg-white rounded-full w-8 h-8 aspect-square items-center justify-center">
                <GoBellFill className="text-black" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-2/6 max-w-[400px] mt-7 bg-black h-full opacity-70  HStack justify-end"></section>
      </div>
    </main>
  );
}
