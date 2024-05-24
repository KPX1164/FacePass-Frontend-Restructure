import React from "react";
import { Link } from "@nextui-org/react";
import { GoArrowUpRight } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

import Waves from "@/components/Waves";
import { SlOptionsVertical } from "react-icons/sl";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

export default function App() {
  return (
    <main className="VStack  w-screen  items-center  ">
      <section className="VStack w-full  bg-white items-center">
        <div className="w-9/12 pt-32 VStack gap-3  pb-20 ">
          <p className="text-2xl font-medium">Welcome to FacePass!</p>
          <p className="w-4/12">
            Tools from FacePass for building app infrastructure, improving app
            quality, and growing your business
          </p>
          <div className="HStack gap-10 mt-7">
            <Button
              radius="full"
              className="bg-black text-white pl-7 pr-7 pt-3 pb-3"
            >
              Create a project
            </Button>
            <Link href="/developer/documentation" className="HStack gap-1">
              <p>Documentation</p>
              <GoArrowUpRight className="text-xs" />
            </Link>
          </div>
        </div>
      </section>
      <Waves />
      <section className="w-full items-center pl-10 pr-10">
        <div className="w-9/12 grid grid-cols-4 items-center">
          <div className="bg-white w-[250px] h-[250px] p-5 hover:border-5 hover:border-black hover:border-opacity-10 rounded-lg shadow-sm aspect-square">
            <div className="HStack w-full justify-end">
              <Dropdown>
                <DropdownTrigger>
                  <SlOptionsVertical />
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="copy">Open</DropdownItem>
                  <DropdownItem key="copy" showDivider>
                    Download
                  </DropdownItem>
                  <DropdownItem key="copy" showDivider>
                    Move to Bin
                  </DropdownItem>
                  <DropdownItem key="copy">Get info</DropdownItem>
                  <DropdownItem key="copy">Rename</DropdownItem>
                  <DropdownItem key="copy" showDivider>
                    Duplicate
                  </DropdownItem>

                  <DropdownItem key="copy" showDivider>
                    Collaburation
                  </DropdownItem>
                  <DropdownItem key="copy">Duplicate</DropdownItem>

                  <DropdownItem key="new">Setting</DropdownItem>
               
                </DropdownMenu>
              </Dropdown>
            </div>
            <Link href="/developer/console/project" className="VStack p-4 pb-5  h-full w-full justify-end">
              <p className="font-medium text-xl">Basic</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
