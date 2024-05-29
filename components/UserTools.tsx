import React, { useState } from "react";
import { FaGear } from "react-icons/fa6";
import useToken from "@/hooks/useToken";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,Link
} from "@nextui-org/react";
import { User } from "@nextui-org/react";
import { IoChevronDownOutline } from "react-icons/io5";
type UserToolsProps = {
    siteApp?: string;
  };
  const UserTools: React.FC<UserToolsProps>  = ({ siteApp = "FacePass" }) => {
  const { logout, username } = useToken();

  return (
    <div className="HStack gap-10">
        {siteApp === "Developer" && (
                <Link
                href="/developer/console"
                className="bg-night dark:bg-black  pt-2 pb-2 pl-4 pr-4 rounded-lg text-sm text-white"
              >
                Console
              </Link>
        )}
         {siteApp === "FacePass" && (
                <Link
                href="/control"
                className="bg-night dark:bg-black   pt-2 pb-2 pl-4 pr-4 rounded-lg text-sm text-white"
              >
                Control Center
              </Link>
        )}
     
      <Dropdown>
        <DropdownTrigger>
          <div className="HStack items-center justify-center gap-2 cursor-pointer">
            <p className="text-lg font-medium ">{username}</p>
            <IoChevronDownOutline className="font-bold text-lg" />
          </div>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Action event example"
          // onAction={(key) => alert(key)}
        >
          <DropdownItem key="profile" showDivider>
            Profile
          </DropdownItem>
          <DropdownItem key="setting" href="/setting" showDivider>
            Setting
          </DropdownItem>
          <DropdownItem className="text-danger" color="danger" onClick={logout}>
            Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default UserTools;
