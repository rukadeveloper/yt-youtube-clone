"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { playList, PlayListCarouselProps } from "@/types/types";
import PlayListTitle from "./PlayListTitle";
import PlayListCard from "./PlayListCard";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import { FaArrowLeft } from "react-icons/fa6";

import { FreeMode, Navigation } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

const breakPoints = {
  768: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
};

const SongListCarouselCopy: React.FC<PlayListCarouselProps> = ({
  title,
  subTitle,
  thumbnail,
  playListArray,
}) => {
  return (
    <div className="mt-24 w-full relative z-[100] relative">
      <PlayListTitle title={title} subTitle={subTitle} thumbnail={thumbnail} />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        breakpoints={breakPoints}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        modules={[FreeMode, Navigation]}>
        {playListArray.map((playList: playList) => (
          <SwiperSlide key={playList.id}>
            <PlayListCard playList={playList} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom_button absolute top-0 right-0 flex items-center gap-7">
        <button className="prev w-[30px] h-[30px] bg-black border border-solid border-neutral-400 rounded-full flex justify-center items-center disabled:opacity-45 cursor-pointer">
          <span className="sr-only">이전 버튼</span>
          <FaArrowLeft size={12} />
        </button>
        <button className="next w-[30px] h-[30px] bg-black border border-solid border-neutral-400 rounded-full flex justify-center items-center disabled:opacity-45 cursor-pointer">
          <span className="sr-only">다음 버튼</span>
          <FaArrowRight size={12} />
        </button>
      </div>
    </div>
  );
};

export default SongListCarouselCopy;
