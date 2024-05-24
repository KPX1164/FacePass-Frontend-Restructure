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
      <div className="w-full h-full">
        <div className="HStack h-full w-full justify-between">
          <div className="HStack h-full w-full justify-between">
            <section className="VStack w-full p-5">
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
              <section className="w-full h-full p-7 pb-0">
                <div className=" VStack gap-3 w-4/12 h-full justify-between">
                  <div className="w-full gap-3 VStack">
                    <div className="HStack items-center  justify-between">
                      <div className="HStack justify-start gap-3 items-center">
                        <p className=" font-semibold">Notification</p>
                        <p className=" font-light text-xs h-5 HStack items-center HStack justify-center rounded-full ">
                          4
                        </p>
                      </div>
                      <button className="HStack justify-end items-center">
                        <IoCloseCircle className="w-6 h-6 opacity-25" />
                      </button>
                    </div>
                    <ul className="VStack gap-2">
                      <li className=" HStack items-center bg-white bg-opacity-15 rounded-xl h-[70px] p-3 hover:bg-opacity-25 ">
                        <div className="HStack w-full gap-3">
                          <img
                            src="https://m.media-amazon.com/images/I/41b3zsiq4pL.png"
                            alt=" Logo"
                            className="w-[45px] h-[45px] rounded-[0.6rem] "
                          />
                          <div className="VStack w-full justify-center">
                            <div className="HStack w-full justify-between">
                              <p className="font-medium">Tiktok</p>

                              <p className="font-normal text-sm opacity-70">
                                1:12 AM
                              </p>
                            </div>
                            <p className="font-normal opacity-70 text-sm">
                              Connected your facepass account
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className=" HStack items-center bg-white bg-opacity-15 rounded-xl h-[70px] p-3 hover:bg-opacity-25 ">
                        <div className="HStack w-full gap-3">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png"
                            alt=" Logo"
                            className="w-[45px] h-[45px]"
                          />
                          <div className="VStack w-full justify-center">
                            <div className="HStack w-full justify-between">
                              <p className="font-medium">Title</p>

                              <p className="font-normal text-sm opacity-70">
                                9:00 AM
                              </p>
                            </div>
                            <p className="font-normal opacity-70 text-sm">
                              Description
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className=" HStack items-center bg-white bg-opacity-15 rounded-xl h-[70px] p-3 hover:bg-opacity-25 ">
                        <div className="HStack w-full gap-3">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png"
                            alt=" Logo"
                            className="w-[45px] h-[45px]"
                          />
                          <div className="VStack w-full justify-center">
                            <div className="HStack w-full justify-between">
                              <p className="font-medium">Title</p>

                              <p className="font-normal text-sm opacity-70">
                                Yesterday, 9:00 AM
                              </p>
                            </div>
                            <p className="font-normal opacity-70 text-sm">
                              Description
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className=" HStack items-center bg-white bg-opacity-15 rounded-xl h-[70px] p-3 hover:bg-opacity-25 ">
                        <div className="HStack w-full gap-3">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png"
                            alt=" Logo"
                            className="w-[45px] h-[45px]"
                          />
                          <div className="VStack w-full justify-center">
                            <div className="HStack w-full justify-between">
                              <p className="font-medium">Title</p>

                              <p className="font-normal text-sm opacity-70">
                                Fri 10 May, 9:00 AM
                              </p>
                            </div>
                            <p className="font-normal opacity-70 text-sm">
                              Description
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </section>
            <section className="w-2/6 max-w-[400px] mt-7  HStack justify-end">
              <div className=" p-5 w-full  bg-white">
                <div className="HStack mt-10 justify-center h-full">
                  <div className="VStack h-full w-full items-center gap-3">
                    <img
                      src="https://static-00.iconduck.com/assets.00/pinterest-icon-512x512-3vn0ggs9.png"
                      alt=" Logo"
                      className="w-[70px] h-[70px] rounded-[0.6rem] "
                    />
                    <p>Printerest</p>
                    <div className="VStack w-full bg-black bg-opacity-25 gap-3 p-3 rounded-lg ">
                      <div className="HStack w-full justify-between items-center">
                        <p>Title</p>
                        <Switch
                          defaultSelected
                          color="success"
                          aria-label="Automatic updates"
                        />
                      </div>
                      <div className="HStack w-full justify-between items-center">
                        <p>Title</p>
                        <Switch
                          defaultSelected
                          color="success"
                          aria-label="Automatic updates"
                        />
                      </div>

                      <div className="HSection-break"></div>
                      <div className="HStack w-full justify-between items-center">
                        <p>Title</p>
                        <Switch
                          defaultSelected
                          color="success"
                          aria-label="Automatic updates"
                        />
                      </div>
                    </div>
                    <div className="VStack text-center w-full bg-black bg-opacity-25 gap-3 p-3 rounded-lg ">
                      <p className="text-red-500 font-semibold">Disconnect</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
