"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  Input,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailEntered, setEmailEntered] = useState(false);

  const router = useRouter(); // Initialize useRouter
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!emailEntered && email !== "") {
      setEmailEntered(true);
    } else if (emailEntered) {
      signIn();
    }
  };
  const signIn = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/auth/login", {
        email,
        password,
      });

      console.log("Registration successful!", response.data);
      // Redirect or show a success message
      router.push("/"); // Redirect to "/"
    } catch (error) {
      console.error("Sign-up error:", error);
      // Handle error, show error message to user, etc.
    }
  };


  return (
    <main className="VStack min-h-screen items-center">
      <div className="VStack gap-5 items-center pt-24">
        <p className="font-semibold text-3xl">FacePass Developer Account</p>
        <p>Manage your FacePass account</p>
        <form onSubmit={handleSubmit} className="VStack gap-5">
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isDisabled={emailEntered}
          />
        </div>
        {emailEntered && (
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        )}
          <div className="section-break"></div>
          <div className="w-full VStack items-center justify-center">
            <p className="text-xs text-blue-600 text-center HStack items-center">
              Forgotten yuor password?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </p>
          </div>
          <Button color="primary" type="submit">
          {emailEntered ? "Sign In" : "Continue"}
        </Button>
        </form>
      </div>
    </main>
  );
}
