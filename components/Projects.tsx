import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { SlOptionsVertical } from "react-icons/sl";
import Link from "next/link";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/project/get_all_project");
        setProjects(response.data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white dark:bg-black w-[250px] h-[250px] p-5 hover:border-5 hover:border-black hover:border-opacity-10 rounded-lg shadow-sm aspect-square"
        >
          <div className="HStack w-full justify-end">
            <Dropdown>
              <DropdownTrigger>
                <SlOptionsVertical />
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="open">Open</DropdownItem>
                <DropdownItem key="download" showDivider>
                  Download
                </DropdownItem>
                <DropdownItem key="moveToBin" showDivider>
                  Move to Bin
                </DropdownItem>
                <DropdownItem key="getInfo">Get info</DropdownItem>
                <DropdownItem key="rename">Rename</DropdownItem>
                <DropdownItem key="duplicate" showDivider>
                  Duplicate
                </DropdownItem>
                <DropdownItem key="collaboration" showDivider>
                  Collaboration
                </DropdownItem>
                <DropdownItem key="settings">Settings</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <Link
            href={`/developer/console/project/${project.id}`}
            className="VStack p-4 pb-5 h-full w-full justify-end"
          >
            <p className="font-medium text-xl">{project.title}</p>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Projects;
