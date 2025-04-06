import React from "react";
import { GoPlus } from "react-icons/go";

export default function NewPlayList() {
  return (
    <div className="new-playlist-button mx-2 my-3">
      <button className="w-full flex justify-center gap-2 items-center text-white text-[100] py-2 bg-neutral-800 rounded-2xl">
        <GoPlus size={20} />
        <span>새 재생목록</span>
      </button>
    </div>
  );
}
