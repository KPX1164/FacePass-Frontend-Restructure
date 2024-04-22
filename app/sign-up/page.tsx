"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  Input,
  Button,
  RadioGroup,
  Radio,
  DatePicker,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import moment from "moment";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [formattedBirthDate, setFormattedBirthDate] = useState<string | null>(
    null
  );
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter(); // Initialize useRouter
  const formatDate = (date: any) => {
    return moment(date).format("MM/DD/YYYY");
  };

  const signUp = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/auth/register", {
        first_name: firstName, // Use first_name instead of firstName
        last_name: lastName, // Similarly for other fields
        date_of_birth: formattedBirthDate,
        gender,
        phone_number: phoneNumber,
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signUp();

    // Log form data
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Birth Date:", formattedBirthDate);
    console.log("Gender:", gender);
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <main className="VStack min-h-screen items-center">
      <div className="VStack gap-5 items-center pt-24">
        <p className="font-semibold text-3xl">
          Create Your FacePass Developer Account
        </p>
        <p>One Apple ID is all you need to access all Apple services.</p>
        <form onSubmit={handleSubmit} className="VStack gap-5">
          <div className="HStack gap-5">
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input
                type="text"
                label="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
              <Input
                type="text"
                label="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <DatePicker
            label="Birth date"
            value={birthDate}
            onChange={(date) => {
              setBirthDate(date);
              setFormattedBirthDate(date !== null ? formatDate(date) : null);
            }}
            className="w-full"
          />

          <RadioGroup
            label="Select your gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            orientation="horizontal"
          >
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </RadioGroup>

          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              type="number"
              label="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="section-break"></div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              type="email"
              label="Email"
              description="This will be your connected email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="section-break"></div>
          <div className="w-full">
            <p className="text-xs text-center">
              <span className="opacity-75">
                Your FacePass account information is used to allow you to sign
                in securely and access your data. <br /> FacePass records
                certain data for security, support and reporting purposes.
              </span>
              <span className="text-blue-600">
                See how your data is managed.
              </span>
            </p>
          </div>
          <Button color="primary" type="submit">
            Continue
          </Button>
        </form>
      </div>
    </main>
  );
}
