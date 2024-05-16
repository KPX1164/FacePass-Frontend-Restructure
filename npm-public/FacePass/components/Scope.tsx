import React from "react";
import {
  FaAddressCard,
  FaLocationArrow,
  FaPhone,
  FaTransgenderAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";
import { FaPersonCircleExclamation } from "react-icons/fa6";
import "../resources/FacePassUI.css";

interface ScopeObject {
  icon: JSX.Element;
  description: string;
}

type ScopeKeys = "fullname" | "email" | "location" | "phone" | "gender" | "age" | "dateofbirth";

const iconComponents: Record<ScopeKeys, ScopeObject> = {
  fullname: {
    icon: <FaAddressCard className="FacePass-Icon" />,
    description: "Full name",
  },
  email: { icon: <MdEmail className="FacePass-Icon" />, description: "Email" },
  location: {
    icon: <FaLocationArrow className="FacePass-Icon" />,
    description: "Location",
  },
  phone: {
    icon: <FaPhone className="FacePass-Icon" />,
    description: "Phone number",
  },
  gender: {
    icon: <FaTransgenderAlt className="FacePass-Icon" />,
    description: "Gender",
  },
  age: {
    icon: <FaPersonCircleExclamation className="FacePass-Icon" />,
    description: "Age",
  },
  dateofbirth: {
    icon: <IoCalendarNumber className="FacePass-Icon" />,
    description: "Date of Birth",
  },
};

const Scope = ({ scope }: { scope: ScopeKeys }) => {
  const { icon: Icon, description } = iconComponents[scope];
  return (
    <div className="FacePass-Content-Container">
      {Icon}
      <p className="FacePass-Text-Header">{description}</p>
    </div>
  );
};

export default Scope;
