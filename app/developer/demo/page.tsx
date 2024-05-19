"use client";
import React, { useState } from "react";
import FacePass from "@/npm-public/FacePass";

export default function App() {
  const defaultCode = `import React from "react";
import FacePass from '@/npm-public/FacePass'
export default function App() {
  const requests = ["fullname", "phone","email","location"]
  return (
      <FacePass scopes={requests}/>
  );
}
  `;
  const [code, setCode] = useState(defaultCode);
  const requests = ["fullname", "phone", "email", "location"];

  return (
    <main className="flex min-h-screen top-0 fixed w-screen">
      <section className=" w-full mt-20 mb-10">
        <div className="flex w-full h-full">
          <section className="w-1/2 h-full border-gray-500 border-2 border-opacity-25 bg-white rounded-lg p-4 mr-2">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-full"
            />
          </section>
          <section className="w-1/2 h-full p-4 ml-2 VStack items-center justify-center">
            {/* <iframe srcDoc={code} title="preview" className="w-full h-full" /> */}
            <FacePass scopes={requests} />
          </section>
        </div>
      </section>
    </main>
  );
}
