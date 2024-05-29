import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import { GoChevronRight } from "react-icons/go";
import { LuLink } from "react-icons/lu";
import useToken from "@/hooks/useToken";

const UserSetting = () => {
  const {
    username,
    role,
    firstName,
    lastName,
    email,
    gender,
    dateOfBirth,
    phoneNumber,
  } = useToken();

  const [showFirstNameInput, setShowFirstNameInput] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState(firstName);

  // State for last name
  const [showLastNameInput, setShowLastNameInput] = useState(false);
  const [editedLastName, setEditedLastName] = useState(lastName);

  // State for date of birth
  const [showDOBInput, setShowDOBInput] = useState(false);
  const [editedDOB, setEditedDOB] = useState(dateOfBirth);

  // State for gender
  const [showGenderInput, setShowGenderInput] = useState(false);
  const [editedGender, setEditedGender] = useState(gender);

  // State for phone number
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  const [editedPhone, setEditedPhone] = useState(phoneNumber);

  // State for email
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [editedEmail, setEditedEmail] = useState(email);


  const [isEditing, setIsEditing] = useState(false);

  const handleFirstNameClick = (e:any) => {
    if (!e.target.matches("input")) {
      setShowFirstNameInput(!showFirstNameInput);
      setIsEditing(!showFirstNameInput || editedFirstName !== firstName);
    }
  };

  const handleFirstNameChange = (e: any) => {
    setEditedFirstName(e.target.value);
    setIsEditing(e.target.value !== firstName);
  };

  const handleLastNameChange = (e: any) => {
    setEditedFirstName(e.target.value);
    setIsEditing(e.target.value !== lastName);
  };

  const updateUser = async () => {
    console.log(email + editedFirstName);
    
    try {
      const response = await fetch('http://127.0.0.1:5000/user/update_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          first_name: editedFirstName,
          // Add other fields to update here as needed
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User updated successfully!', data);
      } else {
        console.error('Error updating user:', data.message);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <section className="w-full h-full gap-5 items-center VStack">
      <div className="VStack">
        <img
          className="w-32 h-32"
          src="https://static.vecteezy.com/system/resources/thumbnails/018/742/015/small_2x/minimal-profile-account-symbol-user-interface-theme-3d-icon-rendering-illustration-isolated-in-transparent-background-png.png"
          alt="User Avatar"
        />
        <p className="text-lg font-medium">{username}</p>
        {role === "user" && (
          <p className="text-base opacity-75">FacePass Account</p>
        )}
        {role === "developer" && (
          <p className="text-base opacity-75">Developer Account</p>
        )}
      </div>

      <section id="Toolbar" className="VStack w-8/12 justify-between pl-2 pr-2">
        <div className="VStack w-full">
          <section className="VStack gap-7 text-sm">
            <ul className="VStack dark:bg-dark-secondary rounded-lg">
              <li
                className="HStack w-full justify-between cursor-pointer rounded-lg pl-5 pr-5 pb-3 pt-3"
                onClick={handleFirstNameClick}
              >
                <div className="HStack w-full justify-between items-center">
                  <p>First Name</p>
                  <div className="gap-1 HStack opacity-75 items-center">
                    {showFirstNameInput ? (
                      <Input
                        type="text"
                        value={editedFirstName}
                        onChange={handleFirstNameChange}
                      />
                    ) : (
                      <p>{firstName}</p>
                    )}
                    <GoChevronRight className="font-normal text-base" />
                  </div>
                </div>
              </li>
              <div className="HSection-break p-0 m-0"></div>
              <li className="HStack w-full justify-between cursor-pointer rounded-lg pl-5 pr-5 pb-3 pt-3">
                <div className="HStack w-full justify-between items-center">
                  <p>Last Name</p>
                   <div className="gap-1 HStack opacity-75">
              {showLastNameInput ? (
                <Input type="text" value={editedLastName} onChange={handleLastNameChange} />
              ) : (
                <p>{lastName}</p>
              )}
              <GoChevronRight className="font-normal text-base" />
            </div>
                </div>
              </li>
            </ul>

            <ul className="VStack dark:bg-dark-secondary rounded-lg">
              <li className="HStack w-full justify-between cursor-pointer rounded-lg pl-5 pr-5 pb-3 pt-3">
                <div className="HStack w-full justify-between items-center">
                  <p>Date of Birth</p>
                  <div className="gap-1 HStack opacity-75">
                    <p className="">{dateOfBirth}</p>
                    <GoChevronRight className="font-normal text-base" />
                  </div>
                </div>
              </li>
              <div className="HSection-break p-0 m-0"></div>
              <li className="HStack w-full justify-between cursor-pointer rounded-lg pl-5 pr-5 pb-3 pt-3">
                <div className="HStack w-full justify-between items-center">
                  <p>Gender</p>
                  <div className="gap-1 HStack opacity-75">
                    <p className="">{gender}</p>
                    <GoChevronRight className="font-normal text-base" />
                  </div>
                </div>
              </li>
            </ul>
            <ul className="VStack dark:bg-dark-secondary rounded-lg">
              <li className="HStack w-full justify-between cursor-pointer rounded-lg pl-5 pr-5 pb-3 pt-3">
                <div className="HStack w-full justify-between items-center">
                  <p>Phone Number</p>
                  <div className="gap-1 HStack opacity-75">
                    <p className="">{phoneNumber}</p>
                    <LuLink className="font-normal text-base" />
                  </div>
                </div>
              </li>
              <div className="HSection-break p-0 m-0"></div>
              <li className="HStack w-full justify-between cursor-pointer rounded-lg pl-5 pr-5 pb-3 pt-3">
                <div className="HStack w-full justify-between items-center">
                  <p>Email</p>
                  <div className="gap-1 HStack opacity-75">
                    <p className="">{email}</p>
                    <LuLink className="font-normal text-base" />
                  </div>
                </div>
              </li>
            </ul>
            {isEditing && (
              <Button onClick={updateUser} className="mt-4">
                Update
              </Button>
            )}
          </section>
        </div>
      </section>
    </section>
  );
};

export default UserSetting;
