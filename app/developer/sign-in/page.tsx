"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { Input, Button, Checkbox } from "@nextui-org/react";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");
  const [emailEntered, setEmailEntered] = useState(false);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  const [isDeveloper, setIsDeveloper] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleSignInAsDeveloper = async () => {
    if (checked) {
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/auth/update_role",
          {
            email,
            role: "dev",
          }
        );
        console.log("Role updated to 'dev'", response.data);
        router.push("/developer");

        // Perform redirect or other actions upon successful role update
      } catch (error) {
        console.error("Error updating role:", error);
      }
    } else {
      alert("Please check the checkbox to sign in as a developer.");
    }
  };

  const handleCancel = async () => {
    try {
      // Update user's role to 'dev' in the backend
      const response = await axios.post(
        "http://127.0.0.1:5000/auth/update_role",
        {
          email,
          role: "dev",
        }
      );
      console.log("Role updated to 'dev'", response.data);

      // Redirect to "/developer/sign-in"
      router.push("/developer/sign-in");
    } catch (error) {
      console.error("Cancel error:", error);
    }
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (!emailEntered && email !== "") {
      const emailExistsResponse = await axios.post(
        "http://127.0.0.1:5000/check_email",
        { email }
      );
      const emailExists = emailExistsResponse.data.exists;
      if (emailExists) {
        setEmailEntered(true);
        await sendPasscode();
      } else {
        console.log("Email does not exist. Please register.");
      }
    } else if (emailEntered && passcode !== "") {
      signIn();
    }
  };

  const sendPasscode = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/auth/send_passcode",
        { email }
      );
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
      const { token, role } = response.data;
      setToken(token);
      setRole(role);
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      if (role === "developer") {
        setIsDeveloper(true);
        router.push("/developer");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="VStack gap-5 items-center -mt-44">
        {role === null && (
          <div>
            <p className="font-semibold text-3xl">
              Sign in to FacePass Developer
            </p>
            <p>One FacePass account is all you need to access all services.</p>
            <div className="w-full">
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
          </div>
        )}
        {/* Conditional rendering based on the user's role */}
        {role === "user" && (
          <div>
            <form onSubmit={handleSubmit} className="VStack gap-5">
              <p>You are not a developer yet</p>
              <p>You must pay for a developer account $99/year.</p>
              <Checkbox checked={checked} onChange={handleCheckboxChange}>
                I have read terms and services
              </Checkbox>{" "}
              <Button color="primary" onClick={handleSignInAsDeveloper}>
                Sign In as Developer
              </Button>
              <Button color="primary" variant="light" onClick={handleCancel}>
                Cancel
              </Button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
