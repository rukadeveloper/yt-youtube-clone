import React from "react";
import { getSongListTop10 } from "@/lib/dummyData";
import { chunkArray } from "@/lib/utils";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import SongListCarouselClient from "./SongListCarouselClient";

export default async function SongListCarousel({ title }: { title: string }) {
  const top10Array = await getSongListTop10();
  const chunkedArray = chunkArray(top10Array, 4);

  return (
    <div className="song-list-carousel flex flex-col pt-[60px] relative">
      <h2 className="text-[26px] leading-[26px] inline-block">{title}</h2>
      <SongListCarouselClient chunkedArray={chunkedArray} />
      <div className="custom_button absolute top-[60px] right-0 flex items-center gap-7">
        <button className="prevs w-[30px] h-[30px] bg-black border border-solid border-neutral-400 rounded-full flex justify-center items-center disabled:opacity-45 cursor-pointer">
          <span className="sr-only">이전 버튼</span>
          <FaArrowLeft size={12} />
        </button>
        <button className="nexts w-[30px] h-[30px] bg-black border border-solid border-neutral-400 rounded-full flex justify-center items-center disabled:opacity-45 cursor-pointer">
          <span className="sr-only">다음 버튼</span>
          <FaArrowRight size={12} />
        </button>
      </div>
    </div>
  );
}
