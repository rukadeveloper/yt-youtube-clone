import React from "react";
import { playList, PlayListCarouselProps } from "@/types/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PlayListTitle from "./PlayListTitle";
import PlayListCard from "./PlayListCard";

const SongListCarousel: React.FC<PlayListCarouselProps> = ({
  title,
  subTitle,
  thumbnail,
  playListArray,
}) => {
  return (
    <div className="mt-24 w-full relative z-[100]">
      <Carousel className="w-full max-w-full">
        <div className="flex justify-between items-center">
          <PlayListTitle
            title={title}
            subTitle={subTitle}
            thumbnail={thumbnail}
          />
          <div className="relative">
            <div className="absolute bottom-[10px] right-[55px]">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </div>
        <CarouselContent>
          {playListArray.map((pla: playList, index: number) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3">
              <PlayListCard playList={pla} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SongListCarousel;
