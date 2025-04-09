"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiFillCaretDown } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

export default function LibraryDropdown() {
  return (
    <div className="library-dropdown">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="w-[150px] text-[14px] px-3 py-2 bg-[#333] rounded-3xl border border-solid border-neutral-500 flex justify-between items-center box-border">
            <span>최근 활동</span>
            <AiFillCaretDown />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[300px]" align="end">
          <DropdownMenuLabel>정렬 기준</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem className="relative">
            <FaCheck className="absolute left-[5px] top-1/2 -translate-y-1/2" />
            <span>최근 활동</span>
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>최근에 저장됨</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>최근 재생한 음악</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
