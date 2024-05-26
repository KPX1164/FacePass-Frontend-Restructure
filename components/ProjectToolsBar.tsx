import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { IoFolderOpenSharp } from "react-icons/io5";
import { BsChevronExpand } from "react-icons/bs";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem } from "@nextui-org/react";

export default function ProjectToolsBar({ selectedItem, handleItemClick }:any) {
  const [showFilesContent, setShowFilesContent] = useState(false);

  const toggleFilesContent = () => {
    setShowFilesContent(!showFilesContent);
  };

  return (
    <section id="Toolbar" className="VStack w-2/12 justify-between max-w-[300px] pl-2 pr-2">
      <div className="VStack w-full">
      

        {/* <div className="w-full h-1 border-t-1 mb-3 border-opacity-25 border-dashed border-black dark:border-white dark:border-opacity-25"></div> */}
        <section className="VStack gap-7 text-[12px]">
          <ul className="VStack gap-2">
            <li className={`HStack justify-between cursor-pointer rounded-lg pl-3 pr-3 pb-2 pt-2 ${selectedItem === "overview" ? "bg-white dark:bg-black font-semibold shadow-sm" : ""}`} onClick={() => handleItemClick("overview")}>
              <div className="HStack gap-2 items-center">
                <IoFolderOpenSharp className="w-5 h-5 aspect-square" />
                <p>Overview</p>
              </div>
            </li>
            <li className={`HStack justify-between cursor-pointer rounded-lg pl-3 pr-3 pb-2 pt-2 ${selectedItem === "dashboard" ? "bg-white dark:bg-black font-semibold shadow-sm" : ""}`} onClick={() => handleItemClick("dashboard")}>
              <div className="HStack gap-2 items-center">
                <IoFolderOpenSharp className="w-5 h-5 aspect-square" />
                <p>Dashboard</p>
              </div>
            </li>
            <li className={`HStack justify-between cursor-pointer rounded-lg pl-3 pr-3 pb-2 pt-2 ${selectedItem === "customers" ? "bg-white dark:bg-black font-semibold shadow-sm" : ""}`} onClick={() => handleItemClick("customers")}>
              <div className="HStack gap-2 items-center">
                <IoFolderOpenSharp className="w-5 h-5 aspect-square" />
                <p>User</p>
              </div>
            </li>
          
            <li className={`HStack justify-between cursor-pointer rounded-lg pl-3 pr-3 pb-2 pt-2 ${selectedItem === "env" ? "bg-white dark:bg-black font-semibold shadow-sm" : ""}`} onClick={() => handleItemClick("env")}>
              <div className="HStack gap-2 items-center">
                <IoFolderOpenSharp className="w-5 h-5 aspect-square" />
                <p>Environment</p>
              </div>
            </li>
          </ul>
          <section className={`VStack justify-between items-center cursor-pointer`}>
            <div className={`HStack justify-between w-full pt-3 pb-3 items-center`} onClick={toggleFilesContent}>
              <p>Files</p>
              {showFilesContent ? <BsChevronUp /> : <BsChevronDown />}
            </div>
            {showFilesContent && (
              <ul className={`VStack gap-2 w-full`}>
                <li className={`HStack justify-between cursor-pointer rounded-lg pl-3 pr-3 pb-2 pt-2 ${selectedItem === "a" ? "bg-white dark:bg-black font-semibold shadow-sm" : ""}`} onClick={() => handleItemClick("a")}>
                  <div className="HStack gap-2 items-center">
                    <IoFolderOpenSharp className="w-5 h-5 aspect-square" />
                    <p>A</p>
                  </div>
                </li>
                <li className={`HStack justify-between cursor-pointer rounded-lg pl-3 pr-3 pb-2 pt-2 ${selectedItem === "b" ? "bg-white dark:bg-black font-semibold shadow-sm" : ""}`} onClick={() => handleItemClick("b")}>
                  <div className="HStack gap-2 items-center">
                    <IoFolderOpenSharp className="w-5 h-5 aspect-square" />
                    <p>B</p>
                  </div>
                </li>
                {/* Add other file items here */}
              </ul>
            )}
          </section>
        </section>
      </div>
      <div className="VStack gap-7 text-[12px]">
        <ul className={`VStack gap-2 w-full`}>
          <li className={`HStack justify-between cursor-pointer rounded-lg pl-3 pr-3 pb-2 pt-2 ${selectedItem === "setting" ? "bg-white dark:bg-black font-semibold shadow-sm" : ""}`} onClick={() => handleItemClick("setting")}>
            <div className="HStack gap-2 items-center">
              <IoMdSettings className="w-5 h-5 aspect-square" />
              <p>Setting</p>
            </div>
          </li>
          {/* Add other items here */}
        </ul>
      </div>
    </section>
  );
}
