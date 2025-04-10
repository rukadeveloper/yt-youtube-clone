import React from "react";
import MainLogo from "./MainLogo";
import SharedButton from "./SharedButton";
import { click } from "@/types/types";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { cn } from "@/lib/utils";

export default function LogoButtonCopy({
  isInDrawer = false,
  clickClose,
  className,
}: {
  isInDrawer: boolean;
  clickClose?: click;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "logo-and-button flex flex-row-reverse justify-end items-center gap-4 p-3",
        className
      )}>
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
