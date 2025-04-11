import React from "react";
import { FaChromecast } from "react-icons/fa";

export default function CastButton() {
  return (
    <button className="cursor-pointer">
      <FaChromecast size={26} color="white" />
    </button>
  );
}
