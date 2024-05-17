// App.tsx
'use client'
import React from "react";
import SignInForm from "@/components/SignInForm";

const App = () => {
  return (
    <section className="VStack w-full h-full items-center justify-center gap-5">
      <p className="font-semibold text-3xl">
        Sign In to FacePass Developer Account
      </p>
      <p>Manage your FacePass account</p>
      <SignInForm isDeveloperPage={true} />
    </section>
  );
};

export default App;
