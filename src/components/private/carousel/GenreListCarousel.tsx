import React from "react";
import { GenreListCarouselProps } from "@/types/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PlayListTitle from "./PlayListTitle";
import { chunkArray } from "@/lib/utils";
import GenreColumn from "./GenreColumn";

const GenreListCarousel: React.FC<GenreListCarouselProps> = ({
  title,
  subTitle,
  thumbnail,
  genreList,
}) => {
  const chunkedgenreList = chunkArray(genreList, 4) as string[][];

  return (
    <div className="mt-24 pb-24 w-full relative z-[100]">
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
          {chunkedgenreList?.map((genreList: string[], index: number) => (
            <CarouselItem
              key={index}
              className="xl:basis-1/4 lg:basis-1/3 md:basis-1/2 basis-full">
              <GenreColumn genreList={genreList} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default GenreListCarousel;
