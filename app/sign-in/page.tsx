'use client';
import React, { useState } from "react";
import axios from "axios";
import { Input, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function App() {
  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");
  const [emailEntered, setEmailEntered] = useState(false);
  const [token, setToken] = useState(null); // State to store the token
  const [role, setRole] = useState(null); // State to store the user role

  const router = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (!emailEntered && email !== "") {
      setEmailEntered(true);
      await sendPasscode();
    } else if (emailEntered && passcode !== "") {
      signIn();
    }
  };

  const sendPasscode = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/auth/send_passcode", {
        email,
      });
      console.log("Passcode sent!", response.data);
    } catch (error) {
      console.error("Passcode error:", error);
    }
  };

  const signIn = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/auth/login", {
        email,
        passcode,
      });
      console.log("Login successful!", response.data);
      const { token, role } = response.data; // Assuming the response contains token and role
      setToken(token);
      setRole(role);
      // Save token and role in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      router.push("/"); // Redirect to homepage after successful login
    } catch (error) {
      console.error("Login error:", error);
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
                label="Passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
              />
            </div>
          )}
          <div className="section-break"></div>
          <div className="w-full VStack items-center justify-center">
            <p className="text-xs text-blue-600 text-center HStack items-center">
              Forgotten your passcode?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
