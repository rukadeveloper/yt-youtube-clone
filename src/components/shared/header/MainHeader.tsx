"use client";

import React, { useState, useEffect, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CastButton from "./CastButton";
import SearchHeader from "./SearchHeader";
import CustomDrawer from "./CustomDrawer";
import MainLogo from "../sidebar/MainLogo";
import HamButton from "../sidebar/HamButton";
import { cn } from "@/lib/utils";

export default function MainHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const clickClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!headerRef.current) return;
    const handleScroll = () => {
      const scrollValue = headerRef.current?.scrollTop;
      console.log(scrollValue);
      setIsScrolled(scrollValue !== 0);
    };

    headerRef.current?.addEventListener("scroll", handleScroll);

    return () => headerRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "main-header sticky top-0 py-5 z-[20] flex flex-row-reverse gap-4 items-center",
        isScrolled && "bg-black"
      )}
      ref={headerRef}>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <CastButton />
      <CustomDrawer
        clickClose={clickClose}
        isOpen={isOpen}
        setIsOpen={setIsOpen}>
        <MainLogo />
        <HamButton />
      </CustomDrawer>
      <SearchHeader />
    </div>
  );
}
