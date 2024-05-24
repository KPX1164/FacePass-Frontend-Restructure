import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { GoChevronRight } from "react-icons/go";

const ConsoleTools: React.FC = () => {
  return (
    <div className="HStack gap-10 ">
      <Dropdown>
        <DropdownTrigger className="cursor-pointer hover:opacity-75">
          <p>File</p>
        </DropdownTrigger>
        <DropdownMenu aria-label="Action event example" onAction={(key) => alert(key)}>
          <DropdownItem key="new" showDivider>
            New Project
          </DropdownItem>
          <DropdownItem key="copy">Open</DropdownItem>
          <DropdownItem key="copy" endContent={<GoChevronRight />} showDivider>
            <p>Open Recently</p>
          </DropdownItem>
          <DropdownItem key="edit">Select All</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown>
        <DropdownTrigger className="cursor-pointer hover:opacity-75">
          <p>Edit</p>
        </DropdownTrigger>
        <DropdownMenu aria-label="Action event example" onAction={(key) => alert(key)} disabledKeys={["undo", "redo", "cut", "format", "convert"]}>
          <DropdownItem key="undo">Undo</DropdownItem>
          <DropdownItem key="redo" showDivider>
            Redo
          </DropdownItem>
          <DropdownItem key="cut">Cut</DropdownItem>
          <DropdownItem key="copy">Copy</DropdownItem>
          <DropdownItem key="paste" showDivider>
            Paste
          </DropdownItem>
          <DropdownItem key="selectAll" showDivider>
            Select All
          </DropdownItem>
          <DropdownItem key="short" endContent={<GoChevronRight />}>
            <p>Short</p>
          </DropdownItem>
          <DropdownItem key="format" endContent={<GoChevronRight />}>
            <p>Format</p>
          </DropdownItem>
          <DropdownItem key="convert" endContent={<GoChevronRight />}>
            <p>Convert</p>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown>
        <DropdownTrigger className="cursor-pointer hover:opacity-75">
          <p>Help</p>
        </DropdownTrigger>
        <DropdownMenu aria-label="Action event example" onAction={(key) => alert(key)}>
          <DropdownItem key="new">Documentation</DropdownItem>
          <DropdownItem key="copy" showDivider>
            Release Notes
          </DropdownItem>
          <DropdownItem key="edit">Tips and Tricks</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ConsoleTools;
