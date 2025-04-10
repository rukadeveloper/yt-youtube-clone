import Image from "next/image";
import React from "react";
import { playList } from "@/types/types";
import CarouselAdditional from "./CarouselAdditional";

export default function CardImage({
  imgSrc,
  playList,
}: {
  imgSrc: string;
  playList: playList;
}) {
  return (
    <div className="card-image relative h-[236px]">
      <Image
        src={imgSrc}
        alt="card-thumbnail"
        fill={true}
        className="object-cover"
        suppressHydrationWarning
      />
      <CarouselAdditional playList={playList} />
    </div>
  );
}
