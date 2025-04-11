import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvartarLabel() {
  return (
    <div className="avatar-label p-3 flex gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="avatar-info flex flex-col">
        <span>코타님</span>
        <span>@cota</span>
        <button className="text-[#3c93de] mt-[10px] cursor-pointer text-[14px]">
          Google 계정 관리
        </button>
      </div>
    </div>
  );
}
