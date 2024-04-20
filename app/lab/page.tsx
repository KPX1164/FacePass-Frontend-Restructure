import React from "react";
import { Input } from "@nextui-org/react";
import { DatePicker } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { animals } from "./data";

export default function App() {
  return (
    <main className="VStack min-h-screen items-center ">
      <div className="VStack gap-5 items-center pt-24">
        <p className="font-semibold text-3xl">
          Create Your FacePass Developer Account
        </p>
        <p>One Apple ID is all you need to access all Apple services.</p>
        <form action="" className="VStack gap-5">
          <div className="HStack gap-5">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input type="text" label="First name" />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input type="text" label="Last name" />
            </div>
          </div>

          <DatePicker label="Birth date" className="w-full" />

          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input type="number" label="Phone number" />
          </div>
          <div className="section-break"></div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              type="email"
              label="Email"
              description="This will be your connected email"
            />
          </div>
        </form>
      </div>
    </main>
  );
}
