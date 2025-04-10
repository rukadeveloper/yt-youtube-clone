"use client";

import React from "react";
import usePlayerState from "@/hooks/usePlayerState";
import { useRouter } from "next/navigation";
import { playList } from "@/types/types";
import SharedButton from "@/components/shared/sidebar/SharedButton";
import { IoMdMore, IoMdPlayCircle } from "react-icons/io";

export default function CarouselAdditional({
  playList,
}: {
  playList: playList;
}) {
  const { addSongList } = usePlayerState();
  const { id, owner, playlistName, songList } = playList;
  const { push } = useRouter();

  const moreButton = () => {
    push(`/playlist?list=${id}`);
  };

  const clickPlay = (e: any) => {
    e.stopPropagation();
    addSongList(songList);
  };

  return (
    <div className="additional-button relative w-full h-full">
      <div className="absolute top-4 right-0">
        <SharedButton
          buttonComponent={<IoMdMore size={24} />}
          click={moreButton}
        />
      </div>
      <div className="absolute bottom-2 right-6">
        <SharedButton
          buttonComponent={<IoMdPlayCircle size={46} />}
          click={clickPlay}
        />
      </div>
    </div>
  );
}
