import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function HamButton() {
  return (
    <div className="ham-button flex items-center">
      <button className="flex justify-center items-center w-[46px] h-[46px] hover:bg-[rgba(144,144,144,.45)] rounded-full">
        <span className="sr-only">햄버거 버튼</span>
        <RxHamburgerMenu size={24} color="#fff" />
      </button>
    </div>
  );
}
