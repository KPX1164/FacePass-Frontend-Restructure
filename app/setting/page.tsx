"use client"
import React, { useState, useEffect } from "react";
import Toolbar from "@/components/SettingToolsBar";
import UserSetting from "@/components/UserSetting";
import NotificationSetting from "@/components/NotificationSetting";
import SoundSetting from "@/components/SoundSetting";
import GeneralSetting from "@/components/GeneralSetting";
import PrivacySetting from "@/components/PrivacySetting";
import AccessibilitySetting from "@/components/AccessibilitySetting";
import ControlSetting from "@/components/ContolCenterSetting";

export default function App() {
  const [selectedItem, setSelectedItem] = useState("user");

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    // To ensure the client and server render the same initially
    setSelectedItem("user");
  }, []);

  return (
    <main className="flex bg-black h-[90vh] overflow-y-hidden flex-col items-center justify-center">
      <div className="HStack w-full h-full pt-5 pb-5 pl-7 pr-7">
        <Toolbar selectedItem={selectedItem} handleItemClick={handleItemClick} />
        <section id="Stage" className="pl-5 w-full VStack">
          {selectedItem === "user" && <UserSetting />}
          {selectedItem === "notification" && <NotificationSetting />}
          {selectedItem === "sound" && <SoundSetting />}
          {selectedItem === "general" && <GeneralSetting />}
          {selectedItem === "control" && <ControlSetting />}
          {selectedItem === "accessibility" && <AccessibilitySetting />}
          {selectedItem === "privacy" && <PrivacySetting />}
        </section>
      </div>
    </main>
  );
}