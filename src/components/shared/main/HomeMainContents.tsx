import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PlayListCarousel from "@/components/private/carousel/PlayListCarousel";
import Category from "@/components/private/category/Category";
import { dummyPlaylistArray } from "@/lib/dummyData";

export default function HomeMainContents() {
  const dummyPlayListArrayCopy = [...dummyPlaylistArray];

  return (
    <div className="mt-[20px] relative z-[30]">
      <Category />
      <PlayListCarousel
        playListArray={[...dummyPlayListArrayCopy]}
        thumbnail={
          <Avatar className="w-[46px] h-[46px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        }
        title="다시 듣기"
        subTitle="도도"
      />
    </div>
  );
}
