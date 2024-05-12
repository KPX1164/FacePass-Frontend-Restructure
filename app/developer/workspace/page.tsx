"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { Input, Button, Checkbox } from "@nextui-org/react";
import { TiThSmall } from "react-icons/ti";
import { FaGear } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-black pt-14">
      <div className="VStack w-full h-full pt-5 pb-5 pl-7 pr-7">
        <section className="HStack gap-5 h-1/2 w-full  ">
          <div className=" h-full w-3/12 p-5">
            <div className="w-full VStack gap-5 p-5">
              <p className="text-5xl leading-snug font-semibold">
                Manage your <br /> Projects
              </p>
              <p className="text-lg opacity-75">
                Create projects to sort files ans have quick access to documents
              </p>
            </div>
          </div>
          <div className=" h-full w-9/12 p-5">
            <div className="HStack justify-end  h-full gap-10 w-full">
              <div className="h-full w-[150px] VStack items-center justify-center border-white rounded-3xl  border-dashed  border-4">
                <FiPlus className="text-3xl" />
              </div>
              <div className="bg-pink-400 rounded-3xl justify-between VStack  h-full w-[300px] p-10">
                <div className="HStack justify-between items-center">
                  <p className="font-semibold text-xl">03</p>
                  <BsThreeDotsVertical className="text-lg" />
                </div>
                <div>
                  <p className="text-2xl font-bold">Title</p>
                  <p className="text-base opacity-70 font-normal">
                    Description
                  </p>
                </div>{" "}
              </div>
              <div className="bg-green-400 rounded-3xl justify-between VStack  h-full w-[300px] p-10">
                <div className="HStack justify-between items-center">
                  <p className="font-semibold text-xl">02</p>
                  <BsThreeDotsVertical className="text-lg" />
                </div>
                <div>
                  <p className="text-2xl font-bold">Title</p>
                  <p className="text-base opacity-70 font-normal">
                    Description
                  </p>
                </div>
              </div>
              <div className="bg-red-400 rounded-3xl justify-between VStack  h-full w-[300px] p-10">
                <div className="HStack justify-between items-center">
                  <p className="font-semibold text-xl">01</p>
                  <BsThreeDotsVertical className="text-lg" />
                </div>
                <div>
                  <p className="text-2xl font-bold">Title</p>
                  <p className="text-base opacity-70 font-normal">
                    Description
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
        </section>
        <section className="HStack gap-5 h-1/2 w-full  ">
          <div className=" h-full w-3/12 p-5">
            <div className="bg-white rounded-3xl h-full w-full">
              <div className="HStack justify-between p-5">
                <p className="text-2xl font-medium text-black">Storage</p>
                <IoCloseCircle className="w-6 h-6 text-black opacity-25" />
              </div>
            </div>
          </div>
          <div className=" h-full w-9/12 p-5">
            <div className="bg-white rounded-3xl  h-full w-full">
              <div className="HStack justify-between p-5">
                <p className="text-2xl font-medium text-black">Lastest</p>
                <IoCloseCircle className="w-6 h-6 text-black opacity-25" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
