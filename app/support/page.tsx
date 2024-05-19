"use client";
import React from "react";

import SupportContact from "@/components/SupportContact";
export default function App() {

  return (
    <main className="flex min-h-screen flex-col justify-between lg:items-center">
      <section className="gap-5  VStack text-left w-full h-full mt-10 lg:w-8/12">
        <p className="text-3xl font-medium ">FacePass Support</p>
        <p className="opacity-70 w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          harum sunt minima voluptatum magnam temporibus repellat quos culpa
          tempora? Optio accusamus nisi quis, ratione vel quod. Officia facere
          numquam cupiditate?
        </p>

        <div className="mt-5"></div>

       <SupportContact/>
      </section>
      
    </main>
  );
}
