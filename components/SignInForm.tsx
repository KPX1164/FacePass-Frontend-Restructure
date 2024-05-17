import React, { useState } from "react";
import { Input, Button, Checkbox } from "@nextui-org/react";
import axios from "axios";
import useToken from "@/hooks/useToken";

type SignInFormProps = {
  isDeveloperPage?: boolean;
};

const SignInForm: React.FC<SignInFormProps> = ({ isDeveloperPage = false }) => {
  const { setToken, role } = useToken();
  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");
  const [emailEntered, setEmailEntered] = useState(false);
  const [emailExists, setEmailExists] = useState(false);
  const [checked, setChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [signedIn, setSignedIn] = useState(false);

  const checkEmailExists = async (email: string) => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/check_email", {
        email,
      });
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
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Login response:", response.data);
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
        window.location.href = "/developer/workspace/project";
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
      const exists = await checkEmailExists(email);
      if (exists) {
        setEmailExists(true);
        setEmailEntered(true);
        await sendPasscode();
      } else {
        setErrorMessage("Email not found. Please check your email.");
        setEmailExists(false);
      }
    } else if (emailEntered && passcode !== "") {
      try {
        const response = await loginUser({ email, passcode });
        console.log("Response to setToken:", response);
        setToken(response);
        setSignedIn(true);
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrorMessage(""); // Clear error message on email change
  };

  return (
    <>
      {!signedIn ? (
        <form onSubmit={handleSubmit} className="VStack gap-5 w-3/12">
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              type="email"
              label="Email"
              value={email}
              onChange={handleEmailChange}
              isDisabled={emailEntered}
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
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
          <Button color="primary" type="submit">
            {emailEntered ? "Sign In" : "Continue"}
          </Button>
        </form>
      ) : (
        role === "user" && isDeveloperPage && (
          <>
            <Checkbox checked={checked} onChange={handleCheckboxChange}>
              I have read terms and services
            </Checkbox>
            <Button color="primary" onClick={handleSignInAsDeveloper}>
              Sign In as Developer
            </Button>
          </>
        )
      )}
    </>
  );
};

export default SignInForm;
