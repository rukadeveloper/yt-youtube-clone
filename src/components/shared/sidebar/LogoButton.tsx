import React from "react";
import MainLogo from "./MainLogo";
import SharedButton from "./SharedButton";
import { click } from "@/types/types";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

export default function LogoButton({
  isInDrawer = false,
  clickClose,
}: {
  isInDrawer: boolean;
  clickClose?: click;
}) {
  return (
    <div className="logo-and-button flex flex-row-reverse justify-end items-center gap-5 p-5">
      <MainLogo />
      {isInDrawer ? (
        <SharedButton
          buttonComponent={<IoClose size={24} color="#fff" />}
          click={clickClose}
        />
      ) : (
        <SharedButton
          buttonComponent={<RxHamburgerMenu size={24} color="#fff" />}
        />
      )}
    </div>
  );
}
