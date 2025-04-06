import React from "react";
import MainLogo from "./MainLogo";
import HamButton from "./HamButton";

export default function LogoButton() {
  return (
    <div className="logo-and-button flex flex-row-reverse justify-end items-center gap-5 p-5">
      <MainLogo />
      <HamButton />
    </div>
  );
}
