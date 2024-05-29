import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { IoFolderOpenSharp } from "react-icons/io5";
import { BsChevronExpand } from "react-icons/bs";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { GoChevronRight } from "react-icons/go";
import useToken from "@/hooks/useToken";
export default function SerttingToolsBar({
  selectedItem,
  handleItemClick,
}: any) {
  const [showFilesContent, setShowFilesContent] = useState(false);
  const { username } = useToken();

  const toggleFilesContent = () => {
    setShowFilesContent(!showFilesContent);
  };

  return (
    <section
      id="Toolbar"
      className="VStack w-4/12 justify-between max-w-[300px] pl-2 pr-2"
    >
      <div className="VStack w-full">
        {/* <div className="w-full h-1 border-t-1 mb-3 border-opacity-25 border-dashed border-black dark:border-white dark:border-opacity-25"></div> */}
        <section className="VStack gap-7 text-sm">
          <ul className="VStack gap-3">
            <li
              className={`HStack  bg-white dark:bg-dark-secondary justify-between cursor-pointer rounded-lg pl-3 pr-3 pb-2 pt-2 ${
                selectedItem === "user"
                  ? "bg-white dark:bg-opacity-45 font-semibold shadow-sm"
                  : ""
              }`}
              onClick={() => handleItemClick("user")}
            >
              <div className="HStack justify-between w-full items-center ">
                <User
                  name={username}
                  description="FacePass Account"
                  avatarProps={{
                    src: "https://static.vecteezy.com/system/resources/thumbnails/018/742/015/small_2x/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png",
                  }}
                />
              </div>
            </li>
      
          </ul>
          <ul className="VStack dark:bg-dark-secondary rounded-lg ">
            <li
              className={`HStack  w-full justify-between cursor-pointer rounded-lg pl-5 pr-5 pb-3 pt-3 ${
                selectedItem === "notification"
                ? "bg-white dark:bg-opacity-45 font-semibold shadow-sm"
                : ""
              }`}
              onClick={() => handleItemClick("notification")}
            >
              <div className="HStack w-full justify-between items-center">
                <p>Notification</p>
                <GoChevronRight className=" font-normal text-base" />
              </div>
            </li>
            <div className="HSection-break p-0 m-0"></div>
            <li
              className={`HStack  w-full justify-between cursor-pointer rounded-lg pl-5 pr-5 pb-3 pt-3 ${
                selectedItem === "sound"
                ? "bg-white dark:bg-opacity-45 font-semibold shadow-sm"
                : ""
              }`}
              onClick={() => handleItemClick("sound")}
            >
              <div className="HStack w-full justify-between items-center">
                <p>Sound</p>
                <GoChevronRight className=" font-normal text-base" />
              </div>
            </li>
          </ul>

          <ul className="VStack dark:bg-dark-secondary rounded-lg ">
            <li
              className={`HStack  w-full justify-between cursor-pointer rounded-lg pl-5 pr-5 pb-3 pt-3 ${
                selectedItem === "general"
                ? "bg-white dark:bg-opacity-45 font-semibold shadow-sm"
                : ""
              }`}
              onClick={() => handleItemClick("general")}
            >
              <div className="HStack w-full justify-between items-center">
                <p>General</p>
                <GoChevronRight className=" font-normal text-base" />
              </div>
            </li>
            <div className="HSection-break p-0 m-0"></div>
            <li
              className={`HStack  w-full justify-between cursor-pointer rounded-lg pl-5 pr-5 pb-3 pt-3 ${
                selectedItem === "control"
                ? "bg-white dark:bg-opacity-45 font-semibold shadow-sm"
                : ""
              }`}
              onClick={() => handleItemClick("control")}
            >
              <div className="HStack w-full justify-between items-center">
                <p>Control Center</p>
                <GoChevronRight className=" font-normal text-base" />
              </div>
            </li>

            <li
              className={`HStack  w-full justify-between cursor-pointer rounded-lg pl-5 pr-5 pb-3 pt-3 ${
                selectedItem === "accessibility"
                ? "bg-white dark:bg-opacity-45 font-semibold shadow-sm"
                : ""
              }`}
              onClick={() => handleItemClick("accessibility")}
            >
              <div className="HStack w-full justify-between items-center">
                <p>Accessibility</p>
                <GoChevronRight className=" font-normal text-base" />
              </div>
            </li>
            <li
              className={`HStack  w-full justify-between cursor-pointer rounded-lg pl-5 pr-5 pb-3 pt-3 ${
                selectedItem === "privacy"
                ? "bg-white dark:bg-opacity-45 font-semibold shadow-sm"
                : ""
              }`}
              onClick={() => handleItemClick("privacy")}
            >
              <div className="HStack w-full justify-between items-center">
                <p>Privacy an& Security</p>
                <GoChevronRight className=" font-normal text-base" />
              </div>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
