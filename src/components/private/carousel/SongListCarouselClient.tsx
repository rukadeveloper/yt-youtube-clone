"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SongListRow from "./SongListRow";
import { TopSong } from "../../../types/types";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { FreeMode, Navigation } from "swiper/modules";

const breakPoints = {
  1280: {
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 2,
  },
};

export default function SongListCarouselClient({
  chunkedArray,
}: {
  chunkedArray: TopSong[][];
}) {
  return (
    <Swiper
      className="mt-6 w-full"
      slidesPerView={1}
      freeMode={true}
      breakpoints={breakPoints}
      modules={[FreeMode, Navigation]}
      navigation={{
        prevEl: ".prevs",
        nextEl: ".nexts",
      }}>
      {chunkedArray.map((chunked: TopSong[], idx: number) => (
        <SwiperSlide key={idx}>
          <SongListRow chunked={chunked} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
