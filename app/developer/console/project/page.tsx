'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Toolbar from "@/components/ProjectToolsBar";
import Dashboard from "@/components/ProjectDashboard";
import Customers from "@/components/ProjectUser";
// Import other components as needed
import { User } from "@nextui-org/react";
export default function MainLayout() {
  const [selectedItem, setSelectedItem] = useState("overview");

  const handleItemClick = (item:any) => {
    setSelectedItem(item);
  };

  return (
    <main className="flex h-[90vh] overflow-y-hidden flex-col items-center justify-center">
      <div className="HStack w-full h-full pt-5 pb-5 pl-7 pr-7">
        <Toolbar selectedItem={selectedItem} handleItemClick={handleItemClick} />
        <section id="Stage" className="pl-5 w-10/12 VStack">

          {selectedItem === "dashboard" && <Dashboard />}
          {selectedItem === "customers" && <Customers />}
          {/* Render other components based on selectedItem */}
        </section>
      </div>
    </main>
  );
}
