"use client";

import React, { useState } from "react";
import Image from "next/image";
import { allSongList, playList } from "@/types/types";

interface channel {
  id: number;
  subscribers: number;
  name: string;
  songList: allSongList[];
  playlistArray: playList[];
}

export default function ChannelSongListInfo({ channel }: { channel: channel }) {
  const [channelSongList, setChannelSongList] = useState(
    [...channel.songList].splice(0, 4)
  );

  const moreButton = () => {
    if (channelSongList.length <= 4) {
      alert("최대치입니다.");
      return;
    } else {
      setChannelSongList([...channel.songList]);
    }
  };

  return (
    <div className="channel-song-info">
      <h2 className="text-[22px]" style={{ fontWeight: "800" }}>
        노래
      </h2>
      <ul className="song-wrapper mt-[16px]">
        {channelSongList.map((songs: allSongList, idx: number) => (
          <li className="w-full mb-[20px] flex items-center" key={idx}>
            <div className="song-thumb w-[40px] h-[40px] mr-[10px] relative">
              <Image
                src={songs.imageSrc}
                alt="song-thumb"
                fill
                className="object-cover rounded-md"
                suppressHydrationWarning
              />
            </div>
            <div className="w-[40%]">{songs.name}</div>
            <div className="w-[20%]">{songs.channel}</div>
          </li>
        ))}
      </ul>
      <button
        className="w-[100px] py-2 border border-solid border-neutral-700 rounded-3xl"
        onClick={moreButton}>
        모두 표시
      </button>
    </div>
  );
}
