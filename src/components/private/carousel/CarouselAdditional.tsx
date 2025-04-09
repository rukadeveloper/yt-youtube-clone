"use client";

import React from "react";
import SharedButton from "@/components/shared/sidebar/SharedButton";
import { IoMdMore, IoMdPlayCircle } from "react-icons/io";
import { useRouter } from "next/navigation";
import { playList } from "@/types/types";

export default function CarouselAdditional({
  playList,
}: {
  playList: playList;
}) {
  const { id } = playList;
  const { push } = useRouter();

  const moreButton = () => {
    push(`/playlist?list=${id}`);
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
        <SharedButton buttonComponent={<IoMdPlayCircle size={46} />} />
      </div>
    </div>
  );
}
