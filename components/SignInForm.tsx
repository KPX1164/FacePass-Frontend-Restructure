import React, { useState } from "react";
import { Input, Button, Checkbox } from "@nextui-org/react";
import axios from "axios";
import useToken from "@/hooks/useToken";
import { useRouter } from "next/router"; // Add the useRouter hook

type SignInFormProps = {
  isDeveloperPage?: boolean;
};

export default function SignInForm({ isDeveloperPage = false }: SignInFormProps) {
  const { setToken } = useToken();
  const router = useRouter(); // Initialize the useRouter hook
  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");
  const [emailEntered, setEmailEntered] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [checked, setChecked] = useState(false); // State for checkbox
  const [role, setRole] = useState(""); // State for user role

  const checkEmailExists = async (email: string) => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/check_email", { email });
      return response.data.exists;
    } catch (error) {
      console.error("Check email error:", error);
      return false;
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

  const loginUser = async (credentials: any) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/auth/login",
        credentials,
        { headers: { "Content-Type": "application/json" } }
      );
      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

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
      } catch (error) {
        console.error("Error updating role:", error);
      }
    } else {
      alert("Please check the checkbox to sign in as a developer.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailEntered && email !== "") {
      const emailExists = await checkEmailExists(email);
      if (emailExists) {
        setEmailExists(true);
        setEmailEntered(true);
        await sendPasscode();
      } else {
        setEmailExists(false);
        console.log("Email does not exist. Please register.");
      }
    } else if (emailEntered && passcode !== "") {
      try {
        const response = await loginUser({ email, passcode });
        setToken(response.token);
        setRole(response.role);
        console.log("User First Name:", response.user?.first_name);

        if (response.role === "developer") {
          router.push("/developer");
        }
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="VStack gap-5 w-3/12">
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isDisabled={emailEntered}
        />
      </div>
      {emailEntered && emailExists && (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input
            type="password"
            label="Passcode"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
          />
        </div>
      )}
      {isDeveloperPage && (
        <>
          <Checkbox checked={checked} onChange={handleCheckboxChange}>
            I have read terms and services
          </Checkbox>
          <Button color="primary" onClick={handleSignInAsDeveloper}>
            Sign In as Developer
          </Button>
        </>
      )}
      <Button color="primary" type="submit">
        {emailEntered ? "Sign In" : "Continue"}
      </Button>
    </form>
  );
}
