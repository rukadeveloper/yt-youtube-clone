import React from "react";
import MainLogo from "./MainLogo";
import HamButton from "./HamButton";
import CloseButton from "./CloseButton";
import { clickClose } from "@/types/types";

export default function LogoButton({
  isInDrawer = false,
  clickClose,
}: {
  isInDrawer: boolean;
  clickClose?: clickClose;
}) {
  return (
    <div className="logo-and-button flex flex-row-reverse justify-end items-center gap-5 p-5">
      <MainLogo />
      {isInDrawer ? <CloseButton clickClose={clickClose} /> : <HamButton />}
    </div>
  );
}
