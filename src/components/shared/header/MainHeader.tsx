"use client";

import React, { useState } from "react";
import CastButton from "./CastButton";
import SearchHeader from "./SearchHeader";
import CustomDrawer from "./CustomDrawer";
import MainLogo from "../sidebar/MainLogo";
import SharedButton from "../sidebar/SharedButton";
import PagePadding from "../main/PagePadding";
import LogoButton from "../sidebar/LogoButton";
import AvatarProfileButton from "./AvatarProfileButton";
import { cn } from "@/lib/utils";
import { RxHamburgerMenu } from "react-icons/rx";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const clickClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={cn(
        "main-header fixed left-0 right-0 top-0 h-[70px] z-[300] bg-black border-b border-neutral-500"
      )}>
      <PagePadding className="flex flex-row-reverse gap-8 items-center">
        <AvatarProfileButton />
        <CastButton />
        <CustomDrawer
          clickClose={clickClose}
          isOpen={isOpen}
          setIsOpen={setIsOpen}>
          <MainLogo />
          <SharedButton
            buttonComponent={<RxHamburgerMenu size={24} color="#fff" />}
          />
        </CustomDrawer>
        <SearchHeader />
        <LogoButton
          className="absolute top-1/2 -translate-y-1/2 left-0"
          isInDrawer={false}
        />
      </PagePadding>
    </div>
  );
}
