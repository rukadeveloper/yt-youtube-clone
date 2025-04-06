import { clickClose } from "@/types/types";
import React from "react";
import { IoClose } from "react-icons/io5";

export default function CloseButton({
  clickClose,
}: {
  clickClose: clickClose;
}) {
  return (
    <div className="ham-button flex items-center">
      <div
        className="flex justify-center items-center w-[46px] h-[46px] hover:bg-[rgba(144,144,144,.45)] rounded-full"
        onClick={clickClose}>
        <span className="sr-only">닫기 버튼</span>
        <IoClose size={24} color="#fff" />
      </div>
    </div>
  );
}
