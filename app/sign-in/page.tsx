
"use client";
import React, { useEffect, useState } from "react";
import useToken from "@/hooks/useToken";
import SignInWithLayout from "@/components/SignInLayout";


export default function App() {
  const {setToken, token} = useToken();

  useEffect(() => {
    if (token) {
      window.location.href = "/";
    }
  }, [token]); 

  if(!token) {
    return (
      <>
        <SignInWithLayout setToken={setToken} />
      </>
    );
  }
}
