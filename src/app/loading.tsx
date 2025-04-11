"use client";

import React from "react";
import { BarLoader } from "react-spinners";

export default function loading() {
  return (
    <div className="loader w-full fixed top-0 right-0 left-0 z-[500]">
      <BarLoader color="red" cssOverride={{ width: "100%", zIndex: 500 }} />
    </div>
  );
}
