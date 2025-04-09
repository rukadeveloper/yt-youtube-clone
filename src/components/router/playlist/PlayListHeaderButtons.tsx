"use client";

import React from "react";
import { FaPlay } from "react-icons/fa";
import { BsBookmarkPlus } from "react-icons/bs";
import { IoMdMore } from "react-icons/io";

export default function PlayListHeaderButtons() {
  return (
    <div className="playlist-header-buttons flex gap-6 mt-10">
      <button className="py-2 px-3 w-[80px] box-border flex flex-row-reverse justify-between items-center bg-white text-black rounded-4xl cursor-pointer">
        <span>재생</span>
        <FaPlay />
      </button>
      <button className="py-2 px-3 w-[140px] box-border flex flex-row-reverse justify-between items-center bg-transparent text-white border border-white rounded-4xl cursor-pointer">
        <span>보관함에 저장</span>
        <BsBookmarkPlus />
      </button>
      <button>
        <span className="sr-only">더보기</span>
        <IoMdMore size={24} />
      </button>
    </div>
  );
}
