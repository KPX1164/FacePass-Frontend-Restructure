// Button.js
"use client";
import React, { useState } from "react";
import Scope from "./components/Scope";
import "./resources/FacePassUI.css";
import { Input, Button as NextButton } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

const Button = ({ scopes }: { scopes: string[] }) => {
  const [showModal, setShowModal] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [forceSign, setForceSign] = useState(false);
  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");
  const [emailEntered, setEmailEntered] = useState(false);
  const [token, setToken] = useState(null); // State to store the token
  const [role, setRole] = useState(null); // State to store the user role
  const router = useRouter();

  const handleButtonClick = () => {
    setShowModal(true);
  };
  const handleSubmit = async (e: any) => {
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
      // Local host for testing
      const response = await axios.post(
        "http://127.0.0.1:5000/auth/send_passcode",
        {
          email,
        }
      );
      console.log("Passcode sent!", response.data);
    } catch (error) {
      console.error("Passcode error:", error);
    }
  };

  const signIn = async () => {
    try {
      // Local host for testing
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

  const handleCloseModal = () => {
    setShowModal(false);
    setConfirm(false); // Reset completed state
    setForceSign(false);
  };

  const handleContinue = () => {
    setConfirm(true); // Set completed state to true
  };
  const handleForceSign = () => {
    setConfirm(false);
    setForceSign(true); // Set completed state to true
  };

  return (
    <div>
      <button className="FacePass-Button" onClick={handleButtonClick}>
        Sign In with <span>FacePass</span>
      </button>
      {showModal && (
        <div className="FacePass-Overlayer" onClick={handleCloseModal}>
          <div className="FacePass-Modal" onClick={(e) => e.stopPropagation()}>
            {/* Modal content */}
            {!confirm && !forceSign ? (
              <>
                <div className="FacePass-Modal-Header ">
                  <p className="FacePass-Text-Title">Sign In</p>
                  <button
                    className="FacePass-Secondary-Button"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                </div>
              
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png"
                  alt=" Logo"
                  className="FacePass-Media-Logo"
                />
                <p className="FacePass-Text-Header">
                  Request data linked to you
                </p>
                <div style={{ maxWidth: "300px" }}>
                  <p className="FacePass-Text-Normal">
                    {" "}
                    The following data may be corrected and linked to your
                    accounts
                  </p>
                </div>
                <div
                  className={`FacePass-Content-Warper ${
                    scopes.length === 1 ? "FacePass-Content-Center" : ""
                  }`}
                >
                  {scopes.map((scope) => (
                    <Scope key={scope} scope={scope} />
                  ))}
                </div>

                <button
                  className="FacePass-Primary-Button"
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </>
            ) : confirm ? (
              <div className="FacePass-VStack ">
                <p className="FacePass-Text-Hero">FacePass</p>
                <p
                  className="FacePass-Text-Normal"
                  style={{
                    color: "red",
                  }}
                >
                  Face authentication is not support FacePass 0.0.1 Developer
                  Beta
                </p>
                <p
                  className="FacePass-Secondary-Button"
                  onClick={handleForceSign}
                >
                  Force Sign-in
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="FacePass-Form-Container">
                <p className="FacePass-Text-Hero">Force Sign-in</p>{" "}
                <Input
                  type="email"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  isDisabled={emailEntered}
                />
                {emailEntered && (
                  <Input
                    type="password"
                    label="Passcode"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                  />
                )}
                <div className="FacePass-Section-Break"></div>
                <div className="FacePass-Content-Center ">
                  <p
                    className="FacePass-Text-Normal text-blue-600 "
                    style={{ display: "flex" }}
                  >
                    Forgotten your passcode?
                    <GoArrowUpRight className="w-4 h-4" />
                  </p>
                </div>
                <NextButton color="primary" type="submit">
                  {emailEntered ? "Sign In" : "Continue"}
                </NextButton>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Button;
