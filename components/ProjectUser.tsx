import React from "react";
import { columns, users } from "@/database/data";
import { IoTrashBin } from "react-icons/io5";
import { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownSection,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { IoCheckmarkOutline } from "react-icons/io5";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
  Input,
} from "@nextui-org/react";
const statusColorMap: Record<string, string> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export default function ProjectUser() {
  const [selectedFilter, setSelectedFilter] = useState("none");

  const renderCell = React.useCallback((user: any, columnKey: keyof any) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User description={user.email} name={cellValue}>
            {user.email}
          </User>
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
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <IoTrashBin />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);
  return (
    <section className="VStack gap-5">
      <div className="HStack gap-3 items-center">
        <Input size="sm" type="text" label="Search" radius="lg" />
        <Dropdown>
          <DropdownTrigger>
            <Button variant="ghost">Filter</Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
          <DropdownSection title="Sort by">
              {["none", "name", "date"].map((key) => (
                <DropdownItem
                  key={key}
                  endContent={
                    selectedFilter === key && <IoCheckmarkOutline />
                  }
                  onClick={() => setSelectedFilter(key)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </DropdownItem>
              ))}
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>

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
  );
}
