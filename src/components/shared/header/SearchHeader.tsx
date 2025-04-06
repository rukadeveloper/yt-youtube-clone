import React from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchHeader() {
  return (
    <form className="search-header absolute top-1/2 -translate-y-1/2 left-0 hidden lg:flex items-center flex-row-reverse justify-end gap-5 w-[350px] box-border px-3 py-2 bg-[rgba(45,45,45,.45)] rounded-3xl">
      <input
        type="text"
        className="flex-1 outline-none text-white text-[15px]"
        placeholder="노래,앨범,아티스트,팟 캐스트 검색"
      />
      <button type="button">
        <IoSearchOutline size={22} color="white" />
      </button>
    </form>
  );
}
