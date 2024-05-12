import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";

export default function App() {
  let tabs = [
    {
      id: "photos",
      label: "Photos",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "music",
      label: "Music",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: "videos",
      label: "Videos",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="VStack gap-5 text-center w-full">
        <p className="text-5xl font-medium">Choose your new Plane. </p>
        <p className="text-lg">Have questions about planing?</p>
        <div className="flex w-full flex-col">
          {/* <Tabs aria-label="Dynamic tabs">
            {tabs.map((item) => (
              <Tab key={item.id} title={item.label}>
                <Card>
                  <CardBody>{item.content}</CardBody>
                </Card>
              </Tab>
            ))}
          </Tabs> */}
          <div className="HStack gap-5 w-full items-center justify-center mt-20">
            <div className="VStack bg-white bg-opacity-25 rounded-lg w-1/4 pt-10 pb-10 pl-5 pr-5 text-left gap-3">
              <p className="text-xl font-medium">2-Core CPU</p>
              <p className=" font-thin">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                ipsa quisquam repudiandae vel deserunt quia minima iusto,
                tempora nesciunt et aliquam quaerat ea sunt totam laudantium
                nulla officiis rem doloremque officia velit magni architecto eum
                qui nemo! Illum earum inventore porro quis, at eaque, cum
                repellat veritatis odio odit quaerat!
              </p>

              <p className="text-xl font-medium">
                $133.25/mo.per month for 12 mo.*
              </p>
              <Button color="primary">Select</Button>
            </div>
            <div className="VStack bg-white bg-opacity-25 rounded-lg w-1/4 pt-10 pb-10 pl-5 pr-5 text-left gap-3">
              <p className="text-xl font-medium">14-Core CPU</p>
              <p className=" font-thin">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                ipsa quisquam repudiandae vel deserunt quia minima iusto,
                tempora nesciunt et aliquam quaerat ea sunt totam laudantium
                nulla officiis rem doloremque officia velit magni architecto eum
                qui nemo! Illum earum inventore porro quis, at eaque, cum
                repellat veritatis odio odit quaerat!
              </p>

              <p className="text-xl font-medium">
                $133.25/mo.per month for 12 mo.*
              </p>
              <Button color="primary">Select</Button>
            </div>
            <div className="VStack bg-white bg-opacity-25 rounded-lg w-1/4 pt-10 pb-10 pl-5 pr-5 text-left gap-3">
              <p className="text-xl font-medium">32-Core CPU</p>
              <p className=" font-thin">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                ipsa quisquam repudiandae vel deserunt quia minima iusto,
                tempora nesciunt et aliquam quaerat ea sunt totam laudantium
                nulla officiis rem doloremque officia velit magni architecto eum
                qui nemo! Illum earum inventore porro quis, at eaque, cum
                repellat veritatis odio odit quaerat!
              </p>

              <p className="text-xl font-medium">
                $133.25/mo.per month for 12 mo.*
              </p>
              <Button color="primary">Select</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
