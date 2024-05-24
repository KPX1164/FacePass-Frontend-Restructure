'use client'
import React, { useState, useRef, useEffect } from "react";
import SideNavigation from "@/components/developer/component-page/SideNavigation";
import { Code } from "@nextui-org/code";
import { Snippet } from "@nextui-org/snippet";
import ShortCut from "@/components/developer/component-page/ShortCut";

export default function App() {
  const [selectedItem, setSelectedItem] = useState<string | null>("installation");
  const [activeShortcut, setActiveShortcut] = useState<string | null>("npm"); // Set the default activeShortcut to "npm"
  const installationRef = useRef<HTMLDivElement>(null);
  const npmRef = useRef<HTMLDivElement>(null);
  const cdnRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    item: string
  ) => {
    setActiveShortcut(item);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getItemClassNames = (item: string) => {
    const isActive = activeShortcut === item;
    return `pl-3 pr-3 pt-2 pb-2 rounded-md cursor-pointer ${
      isActive ? "opacity-100" : "opacity-25"
    }`;
  };

  const renderContent = () => {
    switch (selectedItem) {
      case "installation":
        return (
          <section className="HStack w-full">
            <div className="VStack w-full gap-10">
              <div ref={installationRef} className="gap-3 VStack">
                <p className="text-4xl font-medium">Installation</p>
                <p className="opacity-45">
                  There are few ways to import FacePass into your project:
                </p>
              </div>
              <div className="HSection-break dark:bg-white"></div>

              <div ref={npmRef} className="gap-3 VStack">
                <p className="text-xl font-normal">NPM Installation</p>
                <p className="opacity-45">
                  You can easily install FacePass from NPM.
                </p>
                <Snippet>npm install facepass</Snippet>
              </div>
              <div className="HSection-break dark:bg-white"></div>

              <div ref={cdnRef} className="gap-3 VStack">
                <p className="text-xl font-normal">CDN Installation</p>
                <p className="opacity-45">
                  You can easily install FacePass from NPM.
                </p>
                <Snippet>
                  src="https://cdn.jsdelivr.net/npm/facepass/facepass.umd.js"
                </Snippet>
              </div>
            </div>
          </section>
        );
      case "usage":
        return (
          <div>
            <section className="HStack w-full">
              <div className="VStack w-full gap-10">
                <div ref={installationRef} className="gap-3 VStack">
                  <p className="text-4xl font-medium">Basic Usage</p>
                  <p className="opacity-45">
                    There are few ways to import FacePass into your project:
                  </p>
                </div>
                <div className="HSection-break dark:bg-white"></div>

                <div ref={cdnRef} className="gap-3 VStack">
                  <p className="text-xl font-normal">Import</p>
                  <p className="opacity-45">
                    You can easily install FacePass from NPM.
                  </p>
                  <Code>import FacePass from '@facepass'</Code>
                </div>
                <div className="HSection-break dark:bg-white"></div>

                <div ref={npmRef} className="gap-3 VStack">
                  <p className="text-xl font-normal">Script</p>
                  <p className="opacity-45">
                    You can easily install FacePass from NPM.
                  </p>
                  <Code>requests = ["fullname", "age", "email", "phone"]</Code>
                </div>
                <div className="HSection-break dark:bg-white"></div>

                <div ref={cdnRef} className="gap-3 VStack">
                  <p className="text-xl font-normal">Body</p>
                  <p className="opacity-45">
                    You can easily install FacePass from NPM.
                  </p>
                  <Code>FacePass scopes = requests</Code>
                </div>
              </div>
            </section>
          </div>
        );
      // Add more cases as needed for other items
      default:
        return <div>Select an item from the menu.</div>;
    }
  };

  useEffect(() => {
    // Set the activeShortcut to "npm" when the component mounts
    setActiveShortcut("npm");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between Optimise-view ">
      <section className="w-full h-full flex">
        <section className="w-2/12 h-full sticky top-0">
          <SideNavigation setSelectedItem={setSelectedItem} />
        </section>
        <section className="w-8/12 h-full p-4">{renderContent()}</section>
        <section className="w-2/12 h-full sticky top-0">
          <ShortCut
            selectedItem={selectedItem}
            scrollToSection={scrollToSection}
            getItemClassNames={getItemClassNames}
            npmRef={npmRef}
            cdnRef={cdnRef}
          />
        </section>
      </section>
    </main>
  );
}
