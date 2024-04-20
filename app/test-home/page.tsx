import React from "react";
import {Input} from "@nextui-org/react";

export default function App() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 p-52">
      <Input type="email" label="Email" />
    </div>
  );
}