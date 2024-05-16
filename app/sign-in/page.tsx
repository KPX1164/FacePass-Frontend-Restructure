"use client";
import React, { useState } from "react";
import axios from "axios";
import useToken from "@/hooks/useToken";
import SignInForm from "@/components/SignInForm";

export default function App() {


  return (
    <section className="VStack w-full h-full items-center justify-center gap-5">
      <p className="font-semibold text-3xl">Sign In to FacePass Account</p>
      <p>Manage your FacePass account</p> <SignInForm />
    </section>
  );
}
