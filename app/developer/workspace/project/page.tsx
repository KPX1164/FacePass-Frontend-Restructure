"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { Input, Button, Checkbox } from "@nextui-org/react";
import { TiThSmall } from "react-icons/ti";
import { FaGear } from "react-icons/fa6";
import { GoChevronDown } from "react-icons/go";
import { IoLogoFlickr } from "react-icons/io";
import { LuChevronsUpDown } from "react-icons/lu";
import { BsChevronExpand } from "react-icons/bs";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { columns, users } from "@/database/data";
import { MdEdit } from "react-icons/md";
import { IoTrashBinSharp } from "react-icons/io5";

// dashboard
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  getKeyValue,
} from "@nextui-org/react";

const statusColorMap = {
  active: "success",
  deactive: "danger",
};

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  cn,
} from "@nextui-org/react";
import { IoFolderOpenSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { User } from "@nextui-org/react";

export default function Home() {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState("dashboard");
  const [showFilesContent, setShowFilesContent] = useState(false); // State to toggle visibility of Files content

  const handleItemClick = (item: any) => {
    if (item === "file") {
      // Toggle visibility of Files content
      setShowFilesContent(!showFilesContent);
    } else if (item === "a" || item === "b") {
      // Keep Files content open if 'a' or 'b' is clicked
      setSelectedItem(item); // Update the selected item
    } else {
      // For other items, just update the selected item
      setSelectedItem(item);
    }
  };

  //table

  const renderCell = React.useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                {/* <EditIcon /> */}
                <MdEdit />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                {/* <DeleteIcon /> */}
                <IoTrashBinSharp />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  return (
    <main className="flex h-screen flex-col items-center justify-center pt-14 bg-secondary dark:bg-dark-secondary">
      <div className="HStack w-full h-full pt-5 pb-5 pl-7 pr-7">
        <section
          id="Toolbar"
          className="VStack w-2/12  justify-between max-w-[300px] pl-2 pr-2"
        >
          <div className="VStack w-full">
            <Dropdown>
              <DropdownTrigger>
                <div className="HStack cursor-pointer justify-between items-center h-20">
                  <div className="HStack gap-3 items-center">
                    <div className="HStack gap-1">
                      <MdWork className="text-xl" />
                      <p className="font-semibold text-[16px]">Project 1</p>
                    </div>
                    <BsChevronExpand className="font-bold text-md" />
                  </div>
                </div>
              </DropdownTrigger>
              <DropdownMenu
                variant="faded"
                aria-label="Dropdown menu with description"
              >
                <DropdownSection title="Projects" showDivider>
                  <DropdownItem
                    key="new"
                    shortcut="⌘N"
                    description="Create a new file"
                    // startContent={<AddNoteIcon className={iconClasses} />}
                  >
                    New file
                  </DropdownItem>
                  <DropdownItem
                    key="copy"
                    shortcut="⌘C"
                    description="Copy the file link"
                    // startContent={<CopyDocumentIcon className={iconClasses} />}
                  >
                    Copy link
                  </DropdownItem>
                  <DropdownItem
                    key="edit"
                    shortcut="⌘⇧E"
                    description="Allows you to edit the file"
                    // startContent={<EditDocumentIcon className={iconClasses} />}
                  >
                    Edit file
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection title="Quick actions">
                  <DropdownItem
                    key="delete"
                    className="text-danger"
                    color="danger"
                    shortcut="⌘⇧D"
                    description="Permanently delete the file"
                    // startContent={<DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />}
                  >
                    Setting
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>

            <div className="w-full h-1 border-t-1 mb-3 border-opacity-25 border-dashed border-black dark:border-white dark:border-opacity-25"></div>
            <section className="VStack gap-7 text-[12px]">
              <ul className="VStack gap-2  ">
                <li
                  className={`HStack justify-between cursor-pointer rounded-lg pl-3 pr-3 pb-2 pt-2 ${
                    selectedItem === "dashboard"
                      ? "bg-white dark:bg-black font-semibold  shadow-sm"
                      : ""
                  }`}
                  onClick={() => handleItemClick("dashboard")}
                >
                  <div className="HStack gap-2 items-center">
                    <IoFolderOpenSharp className="w-5 h-5 aspect-square" />

                    <p>Dashboard</p>
                  </div>
                  <p></p>
                </li>
              </ul>
              <ul className="VStack gap-2 ">
                <li
                  className={`HStack justify-between cursor-pointer rounded-lg pl-3 pr-3 pb-2 pt-2 ${
                    selectedItem === "products"
                      ? "bg-white dark:bg-black font-semibold  shadow-sm"
                      : ""
                  }`}
                  onClick={() => handleItemClick("products")}
                >
                  <div className="HStack gap-2 items-center">
                    <IoFolderOpenSharp className="w-5 h-5 aspect-square" />
                    <p>Products</p>
                  </div>
                  <p></p>
                </li>
                <li
                  className={`HStack justify-between cursor-pointer rounded-lg pl-3 pr-3 pb-2 pt-2 ${
                    selectedItem === "customers"
                      ? "bg-white dark:bg-black font-semibold  shadow-sm"
                      : ""
                  }`}
                  onClick={() => handleItemClick("customers")}
                >
                  <div className="HStack gap-2 items-center">
                    <IoFolderOpenSharp className="w-5 h-5 aspect-square" />
                    <p>Customers</p>
                  </div>
                  <p></p>
                </li>
                <li
                  className={`HStack justify-between cursor-pointer rounded-lg pl-3 pr-3 pb-2 pt-2 ${
                    selectedItem === "orders"
                      ? "bg-white dark:bg-black font-semibold  shadow-sm"
                      : ""
                  }`}
                  onClick={() => handleItemClick("orders")}
                >
                  <div className="HStack gap-2 items-center">
                    <IoFolderOpenSharp className="w-5 h-5 aspect-square" />
                    <p>Orders</p>
                  </div>
                  <p>1</p>
                </li>
                <li
                  className={`HStack justify-between cursor-pointer rounded-lg pl-3 pr-3 pb-2 pt-2 ${
                    selectedItem === "secret"
                      ? "bg-white dark:bg-black font-semibold  shadow-sm"
                      : ""
                  }`}
                  onClick={() => handleItemClick("secret")}
                >
                  <div className="HStack gap-2 items-center">
                    <IoFolderOpenSharp className="w-5 h-5 aspect-square" />
                    <p>Secret</p>
                  </div>
                  <p></p>
                </li>
              </ul>
              <section
                className={`VStack justify-between items-center cursor-pointer `}
              >
                <div
                  className={`HStack justify-between w-full pt-3 pb-3 items-center  ${
                    selectedItem === "file" ? "" : ""
                  }`}
                  onClick={() => handleItemClick("file")}
                >
                  <p>Files</p>
                  {showFilesContent ? <BsChevronUp /> : <BsChevronDown />}
                </div>

                {showFilesContent && (
                  <ul className={`VStack gap-2 w-full`}>
                    <li
                      className={`HStack justify-between cursor-pointer rounded-lg pl-3 pr-3 pb-2 pt-2 ${
                        selectedItem === "a"
                          ? "bg-white dark:bg-black font-semibold  shadow-sm"
                          : ""
                      }`}
                      onClick={() => handleItemClick("a")}
                    >
                      <div className="HStack gap-2 items-center">
                        <IoFolderOpenSharp className="w-5 h-5 aspect-square" />
                        <p>A</p>
                      </div>
                      <p></p>
                    </li>
                    <li
                      className={`HStack justify-between cursor-pointer rounded-lg pl-3 pr-3 pb-2 pt-2 ${
                        selectedItem === "b"
                          ? "bg-white dark:bg-black font-semibold  shadow-sm"
                          : ""
                      }`}
                      onClick={() => handleItemClick("b")}
                    >
                      <div className="HStack gap-2 items-center">
                        <IoFolderOpenSharp className="w-5 h-5 aspect-square" />
                        <p>B</p>
                      </div>
                      <p></p>
                    </li>
                    {/* Add other file items here */}
                  </ul>
                )}
              </section>
            </section>
          </div>
          <div className="VStack gap-7 text-[12px]">
            <ul className={`VStack gap-2 w-full`}>
              <li
                className={`HStack justify-between cursor-pointer rounded-lg pl-3 pr-3 pb-2 pt-2 ${
                  selectedItem === "setting"
                    ? "bg-white dark:bg-black font-semibold  shadow-sm"
                    : ""
                }`}
                onClick={() => handleItemClick("setting")}
              >
                <div className="HStack gap-2 items-center">
                  <IoMdSettings className="w-5 h-5 aspect-square" />
                  <p>Setting</p>
                </div>
                <p></p>
              </li>

              {/* Add other file items here */}
            </ul>{" "}
          </div>
        </section>
        <section id="Stage" className="pl-5 w-10/12 VStack ">
          <div className=" h-20 w-full">
            <div className="HStack h-full gap-2 items-center">
              {/* <FaCircleUser className="w-12 h-12 aspect-square" />

              <div className="VStack justify-start items-start">
                <p className="gap-2 font-semibold text-lg">
                  Hi there, <span className="font-bold"> Kong</span>
                </p>
                <p className="text-md opacity-75">Monday, 11 November</p>
              </div> */}
              <User
                name="Dusit Thonvisiet"
                description="Software Engineer"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
              />
            </div>
          </div>
          {selectedItem && (
            <div>
              {/* Render content based on the selected item */}
              {selectedItem === "dashboard" && (
                <section className="VStack w-full h-full  gap-4">
                  <div className="grid grid-cols-4 gap-4 ">
                    <div className="bg-white dark:bg-black gap-3 VStack shadow-sm rounded-lg p-3">
                      <p className="opacity-75 text-xs">Sales</p>
                      <div className="VStack">
                        <p className="text-lg font-semibold">$6,678.86</p>
                        <p className="opacity-75 text-sm">
                          +2.3% than last month
                        </p>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-black gap-3 VStack shadow-sm rounded-lg p-3">
                      <p className="opacity-75 text-xs">Sales</p>
                      <div className="VStack">
                        <p className="text-lg font-semibold">$6,678.86</p>
                        <p className="opacity-75 text-sm">
                          +2.3% than last month
                        </p>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-black gap-3 VStack shadow-sm rounded-lg p-3">
                      <p className="opacity-75 text-xs">Sales</p>
                      <div className="VStack">
                        <p className="text-lg font-semibold">$6,678.86</p>
                        <p className="opacity-75 text-sm">
                          +2.3% than last month
                        </p>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-black gap-3 VStack shadow-sm rounded-lg p-3">
                      <p className="opacity-75 text-xs">Sales</p>
                      <div className="VStack">
                        <p className="text-lg font-semibold">$6,678.86</p>
                        <p className="opacity-75 text-sm">
                          +2.3% than last month
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-black gap-3 VStack shadow-sm rounded-lg p-3">
                    <div className="VStack">
                      <div className="HStack justify-between">
                        <p className="font-semibold HStack items-center gap-2">
                          Performance
                          <span className=" opacity-70">
                            <IoIosInformationCircle />
                          </span>
                        </p>
                        <Button
                          variant="bordered"
                          className="HStack gap-3 border-gray-500 border-opacity-25"
                        >
                          <IoFilterOutline />
                          <p>Filters</p>
                        </Button>{" "}
                      </div>
                      <p className="text-xs opacity-70">Real time updates</p>
                    </div>

                    <p className="text-2xl font-semibold">$6,678.86</p>
                    <div className=" w-full HStack items-start justify-start">
                      <img
                        src="https://datavizproject.com/wp-content/uploads/types/Line-Graph.png"
                        alt=""
                        className="h-[400px] object-contain"
                      />
                    </div>
                  </div>
                </section>
              )}
              {selectedItem === "products" && <p>Products Content</p>}
              {selectedItem === "customers" && (
                <section>
                  <Table aria-label="Example table with custom cells">
                    <TableHeader columns={columns}>
                      {(column) => (
                        <TableColumn
                          key={column.uid}
                          align={column.uid === "actions" ? "center" : "start"}
                        >
                          {column.name}
                        </TableColumn>
                      )}
                    </TableHeader>
                    <TableBody items={users}>
                      {(item) => (
                        <TableRow key={item.id}>
                          {(columnKey) => (
                            <TableCell>{renderCell(item, columnKey)}</TableCell>
                          )}
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </section>
              )}
              {selectedItem === "orders" && <p>Orders Content</p>}
              {selectedItem === "secret" && <p>Secret Content</p>}
              {selectedItem === "a" && <p>a Content</p>}
              {selectedItem === "b" && <p>b Content</p>}
              {selectedItem === "setting" && <p>setting</p>}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
