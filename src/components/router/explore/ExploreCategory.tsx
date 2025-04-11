import React from "react";
import CategoryMenu from "./CategoryMenu";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { BsTextParagraph } from "react-icons/bs";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { cc } from "@/types/types";
import {
  dummyGenreList,
  getAllPlaylist,
  getSongListTop10,
} from "@/lib/dummyData";
import PlayListCarouselCopy from "@/components/private/carousel/PlayListCarouselCopy";
import SongListCarousel from "@/components/private/carousel/SongListCarousel";
import GenreListCarousel from "@/components/private/carousel/GenreListCarousel";

export default async function ExploreCategory() {
  const categoryContents = [
    {
      label: "최신 음악",
      icon: <IoMusicalNotesSharp size={22} />,
    },
    {
      label: "추세",
      icon: <BsTextParagraph size={22} />,
    },
    {
      label: "분위기 및 장르",
      icon: <MdOutlineEmojiEmotions size={22} />,
    },
  ];

  const [playListArray, songListTop10] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ]);

  return (
    <div className="category-wrapper">
      <div className="pt-[150px] relative flex flex-col lg:flex-row gap-4">
        {categoryContents.map((cc: cc) => (
          <CategoryMenu key={cc.label} label={cc.label} icon={cc.icon} />
        ))}
      </div>
      <PlayListCarouselCopy
        playListArray={playListArray}
        title="새 앨범 및 싱글"
      />
      <SongListCarousel songListTop10={songListTop10} title="인기곡" />
      <GenreListCarousel genreList={dummyGenreList} title="분위기 및 장르" />
    </div>
  );
}
