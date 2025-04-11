import React from "react";
import HeaderBackChanger from "@/components/shared/playlist/HeaderBackChanger";
import PlayListHeader from "@/components/router/playlist/PlayListHeader";
import SongCardRowWrapper from "@/components/shared/playlist/SongCardRowWrapper";
import { getPlaylistById } from "@/lib/dummyData";
import { getRandomElementFromArray, sleep } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import MainHeader from "@/components/shared/header/MainHeader";
import GradientImage from "@/components/shared/main/GradientImage";
import PlayerWrapper from "@/components/shared/player/PlayerWrapper";
import PagePadding from "@/components/shared/main/PagePadding";

export default async function PlayListPage({
  searchParams,
}: {
  searchParams: Promise<{ list: string }>;
}) {
  await sleep(2000);

  const params = await searchParams;

  const playlist = await getPlaylistById(Number(params.list));

  const imageSrc = getRandomElementFromArray(playlist.songList)?.imageSrc;

  if (!playlist) permanentRedirect("/");

  return (
    <>
      <main className="w-full md:w-[calc(100%_-_100px)] mlg:w-[calc(100%_-_240px)] h-full main-content relative">
        <MainHeader />
        <GradientImage />
        <PlayerWrapper />
        <PagePadding>
          <div className="main-content-wrapper relative z-[60]">
            <HeaderBackChanger imageSrc={imageSrc} />
            <PlayListHeader playlist={playlist} />
            <SongCardRowWrapper playlist={playlist} />
          </div>
        </PagePadding>
      </main>
    </>
  );
}
