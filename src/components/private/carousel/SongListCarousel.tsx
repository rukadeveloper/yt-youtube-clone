import React from "react";
import { SongListCarouselProps, TopSong } from "@/types/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PlayListTitle from "./PlayListTitle";
import SongColumn from "./SongColumn";
import { chunkArray } from "@/lib/utils";

const SongListCarousel: React.FC<SongListCarouselProps> = ({
  title,
  subTitle,
  thumbnail,
  songListTop10,
}) => {
  const chunkedTop10SongList = chunkArray(songListTop10, 4) as TopSong[][];

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
          {chunkedTop10SongList?.map((songList: TopSong[], index: number) => (
            <CarouselItem key={index} className="basis-1/2">
              <SongColumn songList={songList} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default SongListCarousel;
